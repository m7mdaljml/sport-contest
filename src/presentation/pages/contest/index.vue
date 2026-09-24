<template>
  <div class="page">
    <div class="quiz-wrap">
      <div v-if="mode === 'intro'" class="panel p-4 p-md-5 text-center">
        <div class="quiz-logo mb-4">
          <font-awesome-icon icon="futbol" />
        </div>
        <h1 class="page-title mb-2">{{ tGlobal.quiz.title }}</h1>
        <p class="text-muted mb-4">{{ tGlobal.quiz.subtitle }}</p>

        <div
          v-if="attemptsCount"
          class="d-flex justify-content-center gap-3 mb-4 flex-wrap"
        >
          <span class="quiz-chip">
            <font-awesome-icon icon="rotate-right" />
            {{ attemptsCount }} · {{ tGlobal.quiz.attempts }}
          </span>
          <span class="quiz-chip">
            <font-awesome-icon icon="trophy" />
            {{ best ? `${best.score}/${best.total}` : "—" }} ·
            {{ tGlobal.quiz.best }}
          </span>
        </div>

        <ul class="quiz-intro-list mb-4">
          <li>
            <span class="qicon"><font-awesome-icon icon="shuffle" /></span>
            {{ tGlobal.quiz.intro1 }}
          </li>
          <li>
            <span class="qicon"><font-awesome-icon icon="bolt" /></span>
            {{ tGlobal.quiz.intro2 }}
          </li>
          <li>
            <span class="qicon"><font-awesome-icon icon="medal" /></span>
            {{ tGlobal.quiz.intro3 }}
          </li>
        </ul>

        <span class="quiz-chip mb-4">
          <font-awesome-icon icon="layer-group" />
          {{ tGlobal.quiz.poolNote.replace("{n}", String(FOOTBALL_QUESTIONS.length)) }}
        </span>

        <div>
          <button
            type="button"
            class="btn btn-primary btn-lg rounded-pill px-5"
            :disabled="!visitorId"
            @click="start"
          >
            <font-awesome-icon icon="play" class="me-2" />
            {{ tGlobal.quiz.start }}
          </button>
        </div>
      </div>

      <div v-if="mode === 'playing'">
        <div class="panel p-4 p-md-5">
          <div
            class="d-flex justify-content-between align-items-center gap-2 mb-3"
          >
            <span class="quiz-counter">
              {{ questionOf(current + 1, questions.length) }}
            </span>
            <span class="quiz-lvl" :class="question.img ? 'lvl-pic' : 'lvl-' + question.lvl">
              {{ chipText(question) }}
            </span>
            <span class="d-flex align-items-center gap-2">
              <span class="quiz-chip">
                <font-awesome-icon icon="star" />
                {{ score }}
              </span>
              <button
                type="button"
                class="btn-ghost quiz-restart"
                :title="tGlobal.quiz.restart"
                @click="start"
              >
                <font-awesome-icon icon="rotate-right" />
              </button>
              <button
                type="button"
                class="btn-ghost quiz-restart"
                :title="tGlobal.quiz.quit"
                @click="quit"
              >
                <font-awesome-icon icon="xmark" />
              </button>
            </span>
          </div>

          <div class="quiz-progress mb-4">
            <div class="bar" :style="{ width: progressPct + '%' }"></div>
          </div>

          <h2 class="quiz-question mb-4">{{ question.q }}</h2>

          <div v-if="question.img" class="quiz-img-wrap mb-4">
            <img :src="question.img" class="quiz-img" alt="" />
          </div>

          <div class="d-grid gap-3">
            <button
              v-for="(opt, i) in question.o"
              :key="i"
              type="button"
              class="quiz-option"
              :class="optionClass(i)"
              :disabled="answered"
              @click="choose(i)"
            >
              <span class="opt-key">{{ optKey(i) }}</span>
              <span>{{ opt }}</span>
              <font-awesome-icon
                v-if="answered && (i === question.a || selected === i)"
                :icon="i === question.a ? 'check' : 'xmark'"
                :class="i === question.a ? 'text-success' : 'text-danger'"
                class="ms-auto me-2"
              />
            </button>
          </div>

          <div class="d-flex align-items-center justify-content-between mt-4">
            <span
              v-if="answered"
              class="quiz-feedback"
              :class="selected === question.a ? 'ok' : 'bad'"
            >
              <font-awesome-icon
                :icon="
                  selected === question.a ? 'circle-check' : 'circle-xmark'
                "
              />
              {{
                selected === question.a
                  ? tGlobal.quiz.correct
                  : tGlobal.quiz.wrong
              }}
            </span>
            <span v-else></span>
            <button
              v-if="answered"
              type="button"
              class="btn btn-primary rounded-pill px-4"
              @click="next"
            >
              {{
                current === questions.length - 1
                  ? tGlobal.quiz.finish
                  : tGlobal.quiz.next
              }}
              <font-awesome-icon icon="arrow-right" class="ms-2" />
            </button>
          </div>
        </div>
      </div>

      <div v-if="mode === 'result'" class="panel p-4 p-md-5 text-center">
        <h1 class="page-title mb-1">{{ tGlobal.quiz.resultTitle }}</h1>
        <p class="text-muted mb-4">
          {{ tGlobal.quiz.score }} · {{ score }} {{ tGlobal.quiz.outOf }}
          {{ questions.length }}
        </p>

        <div class="score-ring mb-4" :style="{ '--pct': pct + '%' }">
          <div class="ring-inner">
            <div class="score-num">{{ pct }}%</div>
            <div class="result-stat m-0 p-0" style="padding: 0 !important">
              <div class="stat-label">{{ tGlobal.quiz.yourScore }}</div>
            </div>
          </div>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-6">
            <div class="result-stat panel p-3">
              <div class="stat-value">
                <font-awesome-icon icon="trophy" class="text-primary me-2" />
                {{ best ? best.score + "/" + best.total : "—" }}
              </div>
              <div class="stat-label">{{ tGlobal.quiz.best }}</div>
            </div>
          </div>
          <div class="col-6">
            <div class="result-stat panel p-3">
              <div class="stat-value">{{ attemptsCount }}</div>
              <div class="stat-label">{{ tGlobal.quiz.attempts }}</div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <button
            type="button"
            class="btn btn-primary btn-lg rounded-pill px-5"
            @click="start"
          >
            <font-awesome-icon icon="rotate-right" class="me-2" />
            {{ tGlobal.quiz.playAgain }}
          </button>
          <button
            type="button"
            class="btn-ghost btn-lg rounded-pill px-5"
            @click="quit"
          >
            <font-awesome-icon icon="xmark" class="me-2" />
            {{ tGlobal.quiz.quit }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { tGlobal, locale } from "../../../i18n";
import { getVisitorId } from "../../../domain/utilities/identity";
import { FOOTBALL_QUESTIONS } from "../../../domain/data/questions";
import {
  pickQuiz,
  saveResult,
  bestScore,
  attempts,
} from "../../../domain/utilities/quiz-repository";
import type { QuestionLevel, QuizQuestion } from "../../../domain/meta/i-quiz";

const visitorId = ref("");
const mode = ref<"intro" | "playing" | "result">("intro");
const questions = ref<QuizQuestion[]>([]);
const current = ref(0);
const selected = ref<number | null>(null);
const answered = ref(false);
const score = ref(0);

const question = computed<QuizQuestion>(
  () => questions.value[current.value] as QuizQuestion,
);

const best = computed(() =>
  visitorId.value ? bestScore(visitorId.value) : null,
);
const attemptsCount = computed(() =>
  visitorId.value ? attempts(visitorId.value) : 0,
);

const pct = computed(() =>
  questions.value.length
    ? Math.round((score.value / questions.value.length) * 100)
    : 0,
);

const progressPct = computed(() =>
  questions.value.length
    ? Math.round(
        ((current.value + (answered.value ? 1 : 0)) / questions.value.length) *
          100,
      )
    : 0,
);

const start = () => {
  questions.value = pickQuiz(locale.value, 5, 5, undefined, visitorId.value);
  current.value = 0;
  selected.value = null;
  answered.value = false;
  score.value = 0;
  mode.value = "playing";
};

const choose = (i: number) => {
  if (answered.value) return;
  selected.value = i;
  answered.value = true;
  if (i === question.value.a) score.value += 1;
};

const next = () => {
  if (current.value < questions.value.length - 1) {
    current.value += 1;
    selected.value = null;
    answered.value = false;
    return;
  }
  if (visitorId.value) {
    saveResult(visitorId.value, score.value, questions.value.length);
  }
  mode.value = "result";
};

const quit = () => {
  mode.value = "intro";
};

const optKey = (i: number): string =>
  ["A", "B", "C", "D"][i] ?? String.fromCharCode(65 + i);

const optionClass = (i: number): string => {
  if (!answered.value) return "";
  if (i === question.value.a) return "correct";
  if (i === selected.value) return "wrong";
  return "";
};

const questionOf = (c: number, t: number): string =>
  tGlobal.value.quiz.questionOf
    .replace("{c}", String(c))
    .replace("{t}", String(t));

const lvlText = (lvl: QuestionLevel): string => tGlobal.value.quiz[lvl];
const chipText = (q: QuizQuestion): string =>
  q.img ? tGlobal.value.quiz.pic : lvlText(q.lvl);

onMounted(async () => {
  visitorId.value = await getVisitorId();
});
</script>
