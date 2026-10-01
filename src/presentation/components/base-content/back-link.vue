<template>
  <router-link class="back-link" :to="{ name: 'challenges' }">
    <font-awesome-icon icon="arrow-left" />
    <span>{{ t.challenges.back }}</span>
  </router-link>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";

const t = tGlobal;
</script>
