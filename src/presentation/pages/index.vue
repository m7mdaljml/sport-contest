<template>
  <div class="app-shell light">
    <main-header site-name="Visca Cup" />
    <div class="app-body">
      <div class="body">
        <router-view />
        <main-footer />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

// components
const MainHeader = defineAsyncComponent(
  () => import("../components/base-content/header.vue"),
);
const MainFooter = defineAsyncComponent(
  () => import("../components/base-content/footer.vue"),
);
</script>
