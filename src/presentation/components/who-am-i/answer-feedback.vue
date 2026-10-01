<template>
  <div
    v-if="outcome"
    class="who-feedback"
    :class="tone"
    role="status"
    aria-live="polite"
  >
    <font-awesome-icon :icon="icon" class="who-feedback-icon" />
    <div class="who-feedback-body">
      <div class="who-feedback-head">
        {{ headline }}
        <span v-if="showAnswer" class="who-feedback-answer">
          {{ answerName }}
        </span>
      </div>
      <div class="who-feedback-line">{{ line }}</div>
    </div>
    <span v-if="outcome === 'correct'" class="who-feedback-points">
      {{ t.whoAmI.points.replace("{n}", "+" + points) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tGlobal } from "../../../i18n";
import type { WhoAmIAnswerOutcome } from "../../../domain/meta/i-who-am-i";

const props = defineProps<{
  outcome: WhoAmIAnswerOutcome | null;
  answerName: string;
  points: number;
  message: string;
  revealedClues: number;
  attemptsLeft: number;
}>();

const t = tGlobal;

const tone = computed(() => {
  if (props.outcome === "correct") return "is-ok";
  if (props.outcome === "wrong") return "is-bad";
  return "is-out";
});

const icon = computed(() =>
  props.outcome === "correct"
    ? "circle-check"
    : props.outcome === "wrong"
      ? "circle-xmark"
      : "triangle-exclamation",
);

const showAnswer = computed(
  () => props.outcome !== null && props.outcome !== "wrong",
);

const headline = computed(() => {
  const w = tGlobal.value.whoAmI;
  if (props.outcome === "correct") return w.correct;
  if (props.outcome === "wrong") return w.wrong;
  if (props.outcome === "timeout") return w.timeUp;
  return w.gaveUp;
});

const line = computed(() => {
  const w = tGlobal.value.whoAmI;
  if (props.outcome === "correct") {
    const solved = w.solvedWith.replace("{n}", String(props.revealedClues));
    return props.message ? `${solved} · ${props.message}` : solved;
  }
  if (props.outcome === "wrong") {
    return props.attemptsLeft > 0
      ? `${w.tryAgain} ${w.attemptsLeft.replace("{n}", String(props.attemptsLeft))}`
      : `${w.tryAgain} ${w.answerWas}: ${props.answerName}`;
  }
  return props.message || w.tryAgain;
});
</script>
