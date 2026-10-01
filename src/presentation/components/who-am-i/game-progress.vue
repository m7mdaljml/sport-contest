<template>
  <div
    class="quiz-progress who-progress"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="label"
  >
    <div class="bar" :style="{ width: value + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number; label: string }>();
</script>
