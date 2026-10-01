<template>
  <fieldset class="who-difficulty">
    <legend class="who-difficulty-legend">{{ t.whoAmI.difficultyLabel }}</legend>
    <div class="who-difficulty-row" role="radiogroup" :aria-label="t.whoAmI.difficultyLabel">
      <button
        v-for="level in levels"
        :key="level"
        type="button"
        class="who-difficulty-btn"
        :class="[level, { 'is-active': modelValue === level }]"
        role="radio"
        :aria-checked="modelValue === level"
        :tabindex="modelValue === level ? 0 : -1"
        @click="select(level)"
        @keydown="onKeydown($event, level)"
      >
        <span class="who-difficulty-name">{{ t.whoAmI.difficulty[level] }}</span>
        <span class="who-difficulty-meta">
          {{ t.whoAmI.difficultyMeta[level] }}
        </span>
        <span
          class="who-stars"
          aria-hidden="true"
        >
          <font-awesome-icon
            v-for="n in 5"
            :key="n"
            icon="star"
            :class="{ 'is-on': n <= stars[level] }"
          />
        </span>
        <span class="visually-hidden">
          {{ t.whoAmI.stars.replace("{n}", String(stars[level])) }}
        </span>
      </button>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";
import type { WhoAmIDifficulty } from "../../../domain/meta/i-who-am-i";

defineProps<{ modelValue: WhoAmIDifficulty }>();
const emit = defineEmits<{ "update:modelValue": [value: WhoAmIDifficulty] }>();

const t = tGlobal;
const levels: WhoAmIDifficulty[] = ["easy", "medium", "hard"];
const stars: Record<WhoAmIDifficulty, number> = { easy: 1, medium: 3, hard: 5 };

const select = (level: WhoAmIDifficulty) => emit("update:modelValue", level);

const onKeydown = (event: KeyboardEvent, level: WhoAmIDifficulty) => {
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  event.preventDefault();
  const step = event.key === "ArrowRight" ? 1 : -1;
  const i = (levels.indexOf(level) + step + levels.length) % levels.length;
  const next = levels[i];
  if (next) select(next);
};
</script>
