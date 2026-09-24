<template>
  <div class="page">
    <div class="fun-bg" aria-hidden="true">
      <span v-for="(b, i) in funBg" :key="i" :style="b.style">{{ b.e }}</span>
    </div>
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
            {{ best ? `${best.score}/${best.total}` : "-" }} ·
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
          {{
            tGlobal.quiz.poolNote.replace(
              "{n}",
              String(FOOTBALL_QUESTIONS.length),
            )
          }}
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
            v-if="answered && selected === question.a"
            :key="'burst-' + current"
            class="confetti"
            aria-hidden="true"
          >
            <span
              v-for="(c, i) in burst"
              :key="i"
              :style="{
                '--tx': c.x + 'px',
                '--ty': c.y + 'px',
                '--rot': c.r + 'deg',
                '--d': c.d + 's',
              }"
            >
              {{ c.e }}
            </span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center gap-2 mb-3"
          >
            <span class="quiz-counter">
              {{ questionOf(current + 1, questions.length) }}
            </span>
            <span
              class="quiz-lvl"
              :class="question.img ? 'lvl-pic' : 'lvl-' + question.lvl"
            >
              {{ chipText(question) }}
            </span>
            <span class="d-flex align-items-center gap-2">
              <span class="quiz-chip score-chip" :key="'score-' + score">
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
              {{ feedback }}
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

        <div class="verdict mb-4">
          <div class="verdict-head">{{ verdict.head }}</div>
          <div class="verdict-line">{{ verdict.line }}</div>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-6">
            <div class="result-stat panel p-3">
              <div class="stat-value">
                <font-awesome-icon icon="trophy" class="text-primary me-2" />
                {{ best ? best.score + "/" + best.total : "-" }}
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
import { computed, onMounted, ref, watch } from "vue";
import { tGlobal, locale } from "../../../i18n";
import { getVisitorId } from "../../../domain/utilities/identity";
import { FOOTBALL_QUESTIONS } from "../../../domain/data/questions";
import {
  pickQuiz,
  resolveQuiz,
  saveResult,
  bestScore,
  attempts,
} from "../../../domain/utilities/quiz-repository";
import type { Locale } from "../../../i18n";
import type { QuestionLevel, QuizQuestion } from "../../../domain/meta/i-quiz";

const visitorId = ref("");
const mode = ref<"intro" | "playing" | "result">("intro");
const questions = ref<QuizQuestion[]>([]);
const pickedIndices = ref<number[]>([]);
const resolvedLang = ref<Locale>(locale.value);
const current = ref(0);
const selected = ref<number | null>(null);
const answered = ref(false);
const score = ref(0);
const feedback = ref("");
const lastPraise = ref(-1);
const lastBoo = ref(-1);
const resultsVersion = ref(0);

const funBg = [
  {
    e: "⚽",
    style: "left: 8%; --size: 1.6rem; --dur: 14s; --delay: 0s; --opa: .25",
  },
  {
    e: "🏆",
    style: "left: 22%; --size: 2rem; --dur: 18s; --delay: 3s; --opa: .20",
  },
  {
    e: "🔥",
    style: "left: 38%; --size: 1.4rem; --dur: 16s; --delay: 6s; --opa: .22",
  },
  {
    e: "🥅",
    style: "left: 55%; --size: 1.9rem; --dur: 20s; --delay: 1s; --opa: .18",
  },
  {
    e: "🎯",
    style: "left: 70%; --size: 1.5rem; --dur: 15s; --delay: 8s; --opa: .22",
  },
  {
    e: "📺",
    style: "left: 86%; --size: 1.7rem; --dur: 17s; --delay: 4s; --opa: .18",
  },
  {
    e: "💥",
    style: "left: 14%; --size: 1.3rem; --dur: 22s; --delay: 11s; --opa: .20",
  },
  {
    e: "🧤",
    style: "left: 66%; --size: 1.5rem; --dur: 19s; --delay: 9s; --opa: .18",
  },
];

const burst = [
  { e: "🎉", x: -150, y: -130, r: -30, d: 0 },
  { e: "⚽", x: 150, y: -115, r: 28, d: 0.05 },
  { e: "⭐", x: -105, y: -175, r: -18, d: 0.1 },
  { e: "🏆", x: 120, y: -180, r: 22, d: 0.15 },
  { e: "🎉", x: -55, y: -215, r: -12, d: 0.2 },
  { e: "⚽", x: 70, y: -225, r: 16, d: 0.25 },
  { e: "🔥", x: -165, y: -55, r: -35, d: 0.1 },
  { e: "💥", x: 170, y: -45, r: 38, d: 0.18 },
];

const question = computed<QuizQuestion>(
  () => questions.value[current.value] as QuizQuestion,
);

const best = computed(() => {
  resultsVersion.value;
  return visitorId.value ? bestScore(visitorId.value) : null;
});
const attemptsCount = computed(() => {
  resultsVersion.value;
  return visitorId.value ? attempts(visitorId.value) : 0;
});

const pct = computed(() =>
  questions.value.length
    ? Math.round((score.value / questions.value.length) * 100)
    : 0,
);

const verdict = computed(
  () =>
    tGlobal.value.quiz.verdicts.find((v) => pct.value >= v.at) ??
    tGlobal.value.quiz.verdicts[tGlobal.value.quiz.verdicts.length - 1]!,
);

const progressPct = computed(() =>
  questions.value.length
    ? Math.round(
        ((current.value + (answered.value ? 1 : 0)) / questions.value.length) *
          100,
      )
    : 0,
);

const pickFeedback = (
  list: readonly string[],
  last: number,
): [string, number] => {
  if (list.length <= 1) return [list[0] ?? "", 0];
  let i = Math.floor(Math.random() * list.length);
  if (i === last) i = (i + 1) % list.length;
  return [list[i] as string, i];
};

const start = () => {
  const picked = pickQuiz(locale.value, 5, 5, undefined, visitorId.value);
  questions.value = picked.questions;
  pickedIndices.value = picked.indices;
  resolvedLang.value = locale.value;
  current.value = 0;
  selected.value = null;
  answered.value = false;
  score.value = 0;
  feedback.value = "";
  lastPraise.value = -1;
  lastBoo.value = -1;
  mode.value = "playing";
};

const choose = (i: number) => {
  if (answered.value) return;
  selected.value = i;
  answered.value = true;
  if (i === question.value.a) {
    score.value += 1;
    const [text, idx] = pickFeedback(
      tGlobal.value.quiz.praise,
      lastPraise.value,
    );
    feedback.value = text;
    lastPraise.value = idx;
  } else {
    const [text, idx] = pickFeedback(tGlobal.value.quiz.boo, lastBoo.value);
    feedback.value = text;
    lastBoo.value = idx;
  }
};

const next = () => {
  if (current.value < questions.value.length - 1) {
    current.value += 1;
    selected.value = null;
    answered.value = false;
    feedback.value = "";
    return;
  }
  if (visitorId.value) {
    saveResult(visitorId.value, score.value, questions.value.length);
    resultsVersion.value += 1;
  }
  mode.value = "result";
};

const quit = () => {
  feedback.value = "";
  mode.value = "intro";
};

watch(locale, (lang) => {
  if (mode.value !== "playing" || pickedIndices.value.length === 0) return;
  const list = resolveQuiz(pickedIndices.value, lang, FOOTBALL_QUESTIONS);
  if (answered.value && question.value) {
    const poolQ = FOOTBALL_QUESTIONS[pickedIndices.value[current.value]];
    const oldOptions = poolQ.o[resolvedLang.value];
    const newOptions = poolQ.o[lang];
    list[current.value] = {
      q: poolQ.q[lang],
      o: question.value.o.map(
        (txt) => newOptions[oldOptions.indexOf(txt)],
      ) as QuizQuestion["o"],
      a: question.value.a,
      lvl: question.value.lvl,
      img: question.value.img,
    };
  }
  questions.value = list;
  resolvedLang.value = lang;
});

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
