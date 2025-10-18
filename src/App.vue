<template>
  <main-layout />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const MainLayout = defineAsyncComponent(
  () => import("../src/presentation/pages/index.vue")
);
</script>
