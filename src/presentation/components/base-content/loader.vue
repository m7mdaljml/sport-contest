<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100"
    :class="{ light: isLight, dark: !isLight }"
  >
    <div class="loader text-black">
      <img src="../../../assets/images/logo.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isLight: boolean }>();
</script>
