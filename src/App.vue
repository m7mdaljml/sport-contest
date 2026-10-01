<template>
  <main-layout />
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";

const MainLayout = defineAsyncComponent(
  () => import("./presentation/pages/index.vue"),
);

onMounted(() => {
  const splash = document.getElementById("splash");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("splash--hide");
      setTimeout(() => {
        splash.remove();
      }, 450);
    }, 1500);
  }
});
</script>
