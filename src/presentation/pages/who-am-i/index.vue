<template>
  <div class="page">
    <div class="fun-bg" aria-hidden="true">
      <span v-for="(b, i) in funBg" :key="i" :style="b.style">{{ b.e }}</span>
    </div>

    <div class="quiz-wrap">
      <back-link v-if="mode !== 'result'" class="mb-3" />
      <div v-if="mode === 'intro'" class="panel p-4 p-md-5 text-center">
        <div class="quiz-logo mb-4">
          <font-awesome-icon icon="user-secret" />
        </div>
        <h1 class="page-title mb-2">{{ t.whoAmI.title }}</h1>
        <p class="text-muted mb-4">{{ t.whoAmI.subtitle }}</p>

        <div
          v-if="best || attemptsCount"
          class="d-flex justify-content-center gap-3 mb-4 flex-wrap"
        >
          <span v-if="best" class="quiz-chip">
            <font-awesome-icon icon="trophy" />
            {{ best.score }} · {{ t.whoAmI.stats.best }}
          </span>
          <span class="quiz-chip">
            <font-awesome-icon icon="rotate-right" />
            {{ attemptsCount }} · {{ t.whoAmI.stats.attempts }}
          </span>
        </div>

        <ul class="quiz-intro-list mb-4 text-start">
          <li>
            <span class="qicon"><font-awesome-icon icon="list-check" /></span>
            {{ t.whoAmI.rules }}
          </li>
          <li>
            <span class="qicon"><font-awesome-icon icon="unlock" /></span>
            {{ t.whoAmI.introReveal }}
          </li>
          <li>
            <span class="qicon"><font-awesome-icon icon="stopwatch" /></span>
            {{ t.whoAmI.introTimer }}
          </li>
        </ul>

        <div class="who-intro-pool mb-4">
          <span class="quiz-chip">
            <font-awesome-icon icon="users" />
            {{ t.whoAmI.poolNote.replace("{n}", String(tierPoolSize)) }}
          </span>
        </div>

        <difficulty-picker v-model="level" class="mb-4" />
        <p class="text-muted small mb-4">{{ t.whoAmI.difficultyNote }}</p>

        <button
          type="button"
          class="btn btn-primary btn-lg rounded-pill px-5"
          :disabled="!visitorId"
          @click="start"
        >
          <font-awesome-icon icon="play" class="me-2" />
          {{ t.whoAmI.start }}
        </button>
      </div>

      <div
        v-if="mode === 'playing' || mode === 'answered'"
        class="panel p-4 p-md-5"
      >
        <game-status-bar
          class="mb-3"
          :question-label="questionLabel"
          :difficulty="game.difficulty"
          :score="game.state.score"
          :streak="game.state.currentStreak"
          :remaining="game.clock.remaining"
          :total="game.settings.seconds"
          :running="mode === 'playing'"
          :progress="game.progressPct"
          @quit="quit"
        />
        <WhoAmIQuestion :game="game" :question="game.current" />
      </div>

      <div v-if="mode === 'result'" class="panel p-4 p-md-5">
        <WhoAmIResults
          :summary="game.summary"
          :total="game.state.questions.length"
          :records="game.records"
          :best="best"
          :attempts-count="attemptsCount"
          @play-again="start"
          @home="goHome"
        />
      </div>

      <div v-if="mode === 'empty'" class="panel p-4 p-md-5 text-center">
        <div class="quiz-logo mb-4">
          <font-awesome-icon icon="triangle-exclamation" />
        </div>
        <h1 class="page-title mb-2">{{ t.whoAmI.emptyTitle }}</h1>
        <p class="text-muted mb-4">{{ t.whoAmI.emptyBody }}</p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <button
            type="button"
            class="btn btn-primary rounded-pill px-4"
            @click="start"
          >
            <font-awesome-icon icon="rotate-right" class="me-2" />
            {{ t.whoAmI.retry }}
          </button>
          <button
            type="button"
            class="btn-ghost rounded-pill px-4"
            @click="goHome"
          >
            <font-awesome-icon icon="arrow-left" class="me-2" />
            {{ t.challenges.back }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { tGlobal } from "../../../i18n";
import { getVisitorId } from "../../../domain/utilities/identity";
import { poolFor } from "../../../domain/utilities/who-am-i-builder";
import { useWhoAmIGame } from "../../composables/use-who-am-i-game";
import {
  saveResult,
  bestResult,
  attempts,
} from "../../../domain/utilities/who-am-i-repository";
import DifficultyPicker from "../../components/who-am-i/difficulty-picker.vue";
import BackLink from "../../components/base-content/back-link.vue";
import GameStatusBar from "../../components/who-am-i/game-status-bar.vue";
import WhoAmIQuestion from "../../components/who-am-i/who-ami-question.vue";
import WhoAmIResults from "../../components/who-am-i/who-ami-results.vue";
import type { WhoAmIDifficulty } from "../../../domain/meta/i-who-am-i";

const router = useRouter();
const t = tGlobal;
const visitorId = ref("");
const level = ref<WhoAmIDifficulty>("medium");
const resultsVersion = ref(0);

const game = reactive(useWhoAmIGame(visitorId));
const failed = ref(false);

type View = "intro" | "playing" | "answered" | "result" | "empty";
const mode = computed<View>(() => {
  if (failed.value) return "empty";
  switch (game.state.gameStatus) {
    case "playing":
      return "playing";
    case "answered":
      return "answered";
    case "finished":
      return "result";
    default:
      return "intro";
  }
});

const funBg = [
  {
    e: "🔍",
    style: "left: 8%; --size: 1.6rem; --dur: 14s; --delay: 0s; --opa: .25",
  },
  {
    e: "🕵️",
    style: "left: 24%; --size: 2rem; --dur: 18s; --delay: 3s; --opa: .2",
  },
  {
    e: "📁",
    style: "left: 41%; --size: 1.4rem; --dur: 16s; --delay: 6s; --opa: .22",
  },
  {
    e: "👤",
    style: "left: 58%; --size: 1.9rem; --dur: 20s; --delay: 1s; --opa: .18",
  },
  {
    e: "🔎",
    style: "left: 73%; --size: 1.5rem; --dur: 15s; --delay: 8s; --opa: .22",
  },
  {
    e: "⭐",
    style: "left: 88%; --size: 1.7rem; --dur: 17s; --delay: 4s; --opa: .18",
  },
  {
    e: "🧠",
    style: "left: 15%; --size: 1.3rem; --dur: 22s; --delay: 11s; --opa: .2",
  },
  {
    e: "🗂️",
    style: "left: 67%; --size: 1.5rem; --dur: 19s; --delay: 9s; --opa: .18",
  },
];

const questionLabel = computed(() =>
  tGlobal.value.whoAmI.questionOf
    .replace("{c}", String(game.questionOf(game.state.currentQuestionIndex)))
    .replace("{t}", String(game.state.questions.length)),
);

const best = computed(() => {
  resultsVersion.value;
  return visitorId.value ? bestResult(visitorId.value, level.value) : null;
});

const attemptsCount = computed(() => {
  resultsVersion.value;
  return visitorId.value ? attempts(visitorId.value) : 0;
});

const tierPoolSize = computed(() => poolFor(level.value).length);

const start = () => {
  failed.value = false;
  game.start(level.value);
  if (!game.state.questions.length) failed.value = true;
};

const quit = () => {
  game.quit();
  failed.value = false;
};

const goHome = () => {
  game.quit();
  failed.value = false;
  void router.push({ name: "challenges" });
};

watch(
  () => game.finished,
  (done) => {
    if (!done || !visitorId.value) return;
    saveResult({
      visitorId: visitorId.value,
      mode: "classic",
      difficulty: game.difficulty,
      total: game.state.questions.length,
      score: game.summary.score,
      correct: game.summary.correct,
      accuracy: game.summary.accuracy,
      bestStreak: game.summary.bestStreak,
      answers: game.records.map((r) => ({ ...r })),
    });
    resultsVersion.value += 1;
  },
);

onMounted(async () => {
  visitorId.value = await getVisitorId();
});
</script>
