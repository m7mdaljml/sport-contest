import {
  computed,
  reactive,
  ref,
  watch,
  type Ref,
  type UnwrapNestedRefs,
} from "vue";
import { locale, type Locale } from "../../i18n";
import { WHO_AM_I_PLAYERS } from "../../domain/data/players";
import {
  buildGame,
  retranslate,
} from "../../domain/utilities/who-am-i-builder";
import { isCorrectPlayer } from "../../domain/utilities/player-matcher";
import {
  questionPoints,
  settingsFor,
  summarize,
  totalScore,
} from "../../domain/utilities/who-am-i-rules";
import type {
  WhoAmIAnswerOutcome,
  WhoAmIAnswerRecord,
  WhoAmIDifficulty,
  WhoAmIGameState,
} from "../../domain/meta/i-who-am-i";
import { useCountdown } from "./use-countdown";

const emptyState = (): WhoAmIGameState => ({
  questions: [],
  currentQuestionIndex: 0,
  revealedClues: 0,
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  currentStreak: 0,
  bestStreak: 0,
  questionStartedAt: 0,
  gameStatus: "idle",
});

const useWhoAmIGame = (visitorId: Ref<string>, mode: "classic" = "classic") => {
  const state = reactive<WhoAmIGameState>(emptyState());
  const difficulty = ref<WhoAmIDifficulty>("medium");
  const answers = ref<WhoAmIAnswerRecord[]>([]);
  const outcome = ref<WhoAmIAnswerOutcome | null>(null);
  const attempts = ref(0);
  const answeredName = ref("");
  const settings = computed(() => settingsFor(mode, difficulty.value));

  const clock = useCountdown(
    computed(() => settings.value.seconds),
    onTimeout,
  );

  const current = computed(
    () => state.questions[state.currentQuestionIndex] ?? null,
  );
  const solutionName = computed(() => {
    const question = current.value;
    const player = question
      ? WHO_AM_I_PLAYERS.find((p) => p.id === question.playerId)
      : undefined;
    return player ? player.name[locale.value] : "";
  });
  const isLast = computed(
    () => state.currentQuestionIndex >= state.questions.length - 1,
  );
  const answered = computed(() => state.gameStatus === "answered");
  const finished = computed(() => state.gameStatus === "finished");
  const canReveal = computed(
    () =>
      state.gameStatus === "playing" &&
      state.revealedClues < (current.value?.clues.length ?? 0),
  );
  const attemptsLeft = computed(() =>
    Math.max(0, settings.value.attempts - attempts.value),
  );
  const summary = computed(() =>
    summarize(answers.value, state.questions.length),
  );
  const progressPct = computed(() => {
    const total = state.questions.length;
    if (!total) return 0;
    const done = state.currentQuestionIndex + (answered.value ? 1 : 0);
    return Math.round((done / total) * 100);
  });

  const questionOf = (index: number): number => index + 1;

  const revealClue = () => {
    if (!canReveal.value) return;
    state.revealedClues += 1;
  };

  const record = (result: WhoAmIAnswerOutcome, points: number) => {
    const question = current.value;
    if (!question) return;
    answers.value = [
      ...answers.value,
      {
        questionId: question.id,
        playerId: question.playerId,
        outcome: result,
        attempts: attempts.value,
        revealedClues: state.revealedClues,
        points,
        durationMs: Date.now() - state.questionStartedAt,
      },
    ];
    state.score = totalScore(answers.value);
  };

  const enterQuestion = () => {
    state.revealedClues = 1;
    state.questionStartedAt = Date.now();
    state.gameStatus = "playing";
    outcome.value = null;
    attempts.value = 0;
    answeredName.value = "";
    clock.start(settings.value.seconds);
  };

  const start = (level: WhoAmIDifficulty = difficulty.value) => {
    difficulty.value = level;
    const questions = buildGame(
      locale.value,
      settingsFor(mode, level).questions,
      level,
      visitorId.value,
    );
    if (!questions.length) {
      state.gameStatus = "idle";
      return;
    }
    Object.assign(state, emptyState(), { questions });
    answers.value = [];
    state.currentQuestionIndex = 0;
    enterQuestion();
  };

  const lock = (result: WhoAmIAnswerOutcome) => {
    clock.clear();
    state.gameStatus = "answered";
    outcome.value = result;
  };

  const submit = (input: string, selectedId?: string) => {
    const question = current.value;
    if (!question || state.gameStatus !== "playing") return;
    const player = WHO_AM_I_PLAYERS.find((p) => p.id === question.playerId);
    if (!player) return;
    attempts.value += 1;
    answeredName.value = input.trim();

    const isRight = selectedId
      ? selectedId === question.playerId
      : isCorrectPlayer(input, player);

    if (isRight) {
      const points = questionPoints(state.revealedClues, attempts.value - 1);
      state.correctAnswers += 1;
      state.currentStreak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
      record("correct", points);
      lock("correct");
      return;
    }

    if (attemptsLeft.value <= 0) {
      state.currentStreak = 0;
      state.wrongAnswers += 1;
      record("wrong", 0);
      lock("wrong");
      return;
    }
    state.currentStreak = 0;
  };

  const giveUp = () => {
    if (state.gameStatus !== "playing") return;
    state.currentStreak = 0;
    record("gave-up", 0);
    lock("gave-up");
  };

  function onTimeout() {
    if (state.gameStatus !== "playing") return;
    state.currentStreak = 0;
    record("timeout", 0);
    lock("timeout");
  }

  const next = () => {
    if (!answered.value) return;
    if (!isLast.value) {
      state.currentQuestionIndex += 1;
      enterQuestion();
      return;
    }
    state.gameStatus = "finished";
    clock.clear();
  };

  const quit = () => {
    clock.clear();
    Object.assign(state, emptyState());
    answers.value = [];
    outcome.value = null;
  };

  watch(locale, (lang: Locale) => {
    if (!state.questions.length) return;
    state.questions = retranslate(state.questions, lang);
  });

  return {
    state,
    difficulty,
    settings,
    clock,
    outcome,
    attempts: attemptsLeft,
    answeredName,
    current,
    solutionName,
    answered,
    finished,
    isLast,
    canReveal,
    summary,
    progressPct,
    questionOf,
    start,
    revealClue,
    submit,
    giveUp,
    next,
    quit,
    records: answers,
  };
};

export { useWhoAmIGame };
export type { WhoAmIGame as WhoAmIGameApi };
type WhoAmIGame = UnwrapNestedRefs<ReturnType<typeof useWhoAmIGame>>;
