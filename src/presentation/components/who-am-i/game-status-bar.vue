<template>
  <div class="who-statusbar">
    <div class="who-status-left">
      <span class="quiz-chip">
        <font-awesome-icon icon="list-check" />
        {{ questionLabel }}
      </span>
      <span class="quiz-lvl" :class="'lvl-' + difficulty">
        {{ t.whoAmI.difficulty[difficulty] }}
        <span class="who-stars" aria-hidden="true">
          <font-awesome-icon
            v-for="n in 5"
            :key="n"
            icon="star"
            :class="{ 'is-on': n <= stars }"
          />
        </span>
        <span class="visually-hidden">
          {{ t.whoAmI.stars.replace("{n}", String(stars)) }}
        </span>
      </span>
    </div>

    <div class="who-status-right">
      <score-display :score="score" :streak="streak" />
      <question-timer
        :remaining="remaining"
        :total="total"
        :running="running"
      />
      <game-progress :value="progress" :label="questionLabel" />
      <button
        type="button"
        class="btn-ghost who-icon-btn"
        :title="t.whoAmI.quit"
        @click="$emit('quit')"
      >
        <font-awesome-icon icon="xmark" />
        <span class="visually-hidden">{{ t.whoAmI.quit }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tGlobal } from "../../../i18n";
import ScoreDisplay from "./score-display.vue";
import QuestionTimer from "./question-timer.vue";
import GameProgress from "./game-progress.vue";
import type { WhoAmIDifficulty } from "../../../domain/meta/i-who-am-i";

const STARS: Record<WhoAmIDifficulty, number> = { easy: 1, medium: 3, hard: 5 };

const props = defineProps<{
  questionLabel: string;
  difficulty: WhoAmIDifficulty;
  score: number;
  streak: number;
  remaining: number;
  total: number;
  running: boolean;
  progress: number;
}>();

defineEmits<{ quit: [] }>();

const t = tGlobal;
const stars = computed(() => STARS[props.difficulty]);
</script>
