<template>
  <div class="d-flex align-items-center gap-2">
    <span
      v-if="streak > 1"
      class="quiz-chip streak-chip"
      :title="t.whoAmI.streak.replace('{n}', String(streak))"
    >
      <font-awesome-icon icon="fire" />
      {{ streak }}
    </span>
    <span
      class="quiz-chip score-chip"
      :key="'who-score-' + score"
      aria-live="polite"
    >
      <font-awesome-icon icon="star" />
      <span class="visually-hidden">{{ t.whoAmI.score }}: </span>
      {{ score }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";

defineProps<{ score: number; streak: number }>();

const t = tGlobal;
</script>
