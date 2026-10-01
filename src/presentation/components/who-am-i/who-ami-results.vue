<template>
  <div class="who-results text-center">
    <h1 class="page-title mb-1">{{ t.whoAmI.resultTitle }}</h1>
    <p class="text-muted mb-4">
      {{ t.whoAmI.score }} · {{ summary.score }} · {{ t.whoAmI.stats.correct }}
      {{ summary.correct }}/{{ total }}
    </p>

    <div class="score-ring mb-4" :style="{ '--pct': summary.accuracy + '%' }">
      <div class="ring-inner">
        <div class="score-num">{{ summary.score }}</div>
        <div class="result-stat m-0 p-0 ring-sub">
          <div class="stat-label">{{ summary.accuracy }}%</div>
        </div>
      </div>
    </div>

    <div class="verdict mb-4">
      <div class="verdict-head">{{ verdict.head }}</div>
      <div class="verdict-line">{{ verdict.line }}</div>
    </div>

    <div class="row g-3 mb-4">
      <div class="col-6 col-md-3">
        <div class="result-stat panel p-3">
          <div class="stat-value">
            <font-awesome-icon icon="trophy" class="text-primary me-2" />
            {{ best ? best.score : "-" }}
          </div>
          <div class="stat-label">{{ t.whoAmI.stats.best }}</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="result-stat panel p-3">
          <div class="stat-value">{{ attemptsCount }}</div>
          <div class="stat-label">{{ t.whoAmI.stats.attempts }}</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="result-stat panel p-3">
          <div class="stat-value">
            <font-awesome-icon icon="fire" class="text-primary me-2" />
            {{ summary.bestStreak }}
          </div>
          <div class="stat-label">{{ t.whoAmI.stats.bestStreak }}</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="result-stat panel p-3">
          <div class="stat-value">{{ summary.averageClues }}</div>
          <div class="stat-label">{{ t.whoAmI.stats.averageClues }}</div>
        </div>
      </div>
    </div>

    <ul class="quiz-intro-list mb-4 text-start">
      <li v-for="row in answerLog" :key="row.id">
        <span class="qicon" :class="row.ok ? 'ok' : 'bad'">
          <font-awesome-icon :icon="row.ok ? 'circle-check' : 'circle-xmark'" />
        </span>
        <img :src="row.image" alt="" class="who-log-face" />
        <span class="who-log-name">{{ row.name }}</span>
        <span class="who-log-meta">
          {{ row.outcomeText }}
          <template v-if="row.ok">
            · {{ t.whoAmI.points.replace("{n}", String(row.points)) }}</template
          >
        </span>
      </li>
    </ul>

    <div class="d-flex justify-content-center gap-3 flex-wrap">
      <button
        type="button"
        class="btn btn-primary btn-lg rounded-pill px-5"
        @click="$emit('play-again')"
      >
        <font-awesome-icon icon="rotate-right" class="me-2" />
        {{ t.whoAmI.playAgain }}
      </button>
      <button
        type="button"
        class="btn-ghost btn-lg rounded-pill px-5"
        @click="$emit('home')"
      >
        <font-awesome-icon icon="arrow-left" class="me-2" />
        {{ t.challenges.back }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tGlobal, locale } from "../../../i18n";
import { WHO_AM_I_PLAYERS } from "../../../domain/data/players";
import type {
  WhoAmIAnswerRecord,
  WhoAmIResult,
  WhoAmISummary,
} from "../../../domain/meta/i-who-am-i";

const props = defineProps<{
  summary: WhoAmISummary;
  total: number;
  records: WhoAmIAnswerRecord[];
  best: WhoAmIResult | null;
  attemptsCount: number;
}>();

defineEmits<{ "play-again": []; home: [] }>();

const t = tGlobal;

const verdict = computed(
  () =>
    tGlobal.value.whoAmI.verdicts.find((v) => props.summary.accuracy >= v.at) ??
    tGlobal.value.whoAmI.verdicts[tGlobal.value.whoAmI.verdicts.length - 1]!,
);

interface LogRow {
  id: string;
  ok: boolean;
  name: string;
  image: string;
  points: number;
  outcomeText: string;
}

const answerLog = computed<LogRow[]>(() =>
  props.records.map((r) => {
    const player = WHO_AM_I_PLAYERS.find((p) => p.id === r.playerId);
    return {
      id: r.questionId,
      ok: r.outcome === "correct",
      name: player ? player.name[locale.value] : "",
      image: player?.image ?? "",
      points: r.points,
      outcomeText: outcomeText(r),
    };
  }),
);

const outcomeText = (record: WhoAmIAnswerRecord): string => {
  const w = tGlobal.value.whoAmI;
  if (record.outcome === "correct") return w.correct;
  if (record.outcome === "gave-up") return w.gaveUp;
  if (record.outcome === "timeout") return w.timeUp;
  return w.wrong;
};
</script>
