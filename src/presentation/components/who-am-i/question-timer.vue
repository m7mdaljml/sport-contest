<template>
  <span
    class="who-timer"
    :class="tone"
    role="timer"
    :aria-label="`${t.whoAmI.timerLabel}: ${remaining}s`"
  >
    <font-awesome-icon icon="stopwatch" />
    <span class="who-timer-num" aria-hidden="true">
      {{ t.whoAmI.seconds.replace("{n}", String(remaining)) }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tGlobal } from "../../../i18n";

const props = defineProps<{
  remaining: number;
  total: number;
  running: boolean;
}>();

const t = tGlobal;

const tone = computed(() => {
  if (!props.running) return "is-idle";
  const ratio = props.total ? props.remaining / props.total : 0;
  if (ratio <= 0.2) return "is-critical";
  if (ratio <= 0.45) return "is-warning";
  return "";
});
</script>
