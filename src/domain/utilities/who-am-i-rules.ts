import type {
  WhoAmIAnswerRecord,
  WhoAmIDifficulty,
  WhoAmIDifficultyRule,
  WhoAmIGameMode,
  WhoAmISettings,
  WhoAmISummary,
} from "../meta/i-who-am-i";

const WHO_AM_I_RULES = {
  modes: {
    classic: { questions: 10 },
  } satisfies Record<WhoAmIGameMode, { questions: number }>,
  difficulty: {
    easy: { clueCount: 4, seconds: 45, stars: 1 },
    medium: { clueCount: 5, seconds: 30, stars: 3 },
    hard: { clueCount: 5, seconds: 20, stars: 5 },
  } satisfies Record<
    WhoAmIDifficulty,
    Omit<WhoAmIDifficultyRule, "difficulty">
  >,
  points: {
    base: 1000,
    step: 200,
    min: 200,
    wrongPenalty: 100,
  },
  attempts: 3,
} as const;

const difficultyRules = (
  difficulty: WhoAmIDifficulty,
): WhoAmIDifficultyRule => ({
  difficulty,
  ...WHO_AM_I_RULES.difficulty[difficulty],
});

const settingsFor = (
  mode: WhoAmIGameMode,
  difficulty: WhoAmIDifficulty,
): WhoAmISettings => {
  const rules = difficultyRules(difficulty);
  return {
    questions: WHO_AM_I_RULES.modes[mode].questions,
    attempts: WHO_AM_I_RULES.attempts,
    seconds: rules.seconds,
    clueCount: rules.clueCount,
  };
};

const cluePoints = (revealedClues: number): number => {
  const { base, step, min } = WHO_AM_I_RULES.points;
  const used = Math.max(1, revealedClues);
  return Math.max(min, base - (used - 1) * step);
};

const questionPoints = (revealedClues: number, wrongAttempts: number): number =>
  Math.max(
    0,
    cluePoints(revealedClues) -
      wrongAttempts * WHO_AM_I_RULES.points.wrongPenalty,
  );

const totalScore = (records: WhoAmIAnswerRecord[]): number =>
  records.reduce((sum, r) => sum + r.points, 0);

const summarize = (
  records: WhoAmIAnswerRecord[],
  total: number,
): WhoAmISummary => {
  const correct = records.filter((r) => r.outcome === "correct");
  const answered = records.length;
  const clueSum = correct.reduce((sum, r) => sum + r.revealedClues, 0);
  let streak = 0;
  let best = 0;
  records.forEach((r) => {
    if (r.outcome === "correct") {
      streak += 1;
      best = Math.max(best, streak);
    } else {
      streak = 0;
    }
  });
  return {
    score: totalScore(records),
    total,
    correct: correct.length,
    wrong: answered - correct.length,
    accuracy: answered ? Math.round((correct.length / answered) * 100) : 0,
    bestStreak: best,
    averageClues: correct.length
      ? Math.round((clueSum / correct.length) * 10) / 10
      : 0,
    perfectRounds: correct.filter((r) => r.attempts === 1).length,
  };
};

export {
  WHO_AM_I_RULES,
  difficultyRules,
  settingsFor,
  cluePoints,
  questionPoints,
  totalScore,
  summarize,
};
