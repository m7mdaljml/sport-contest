<template>
  <li class="clue-card" :class="{ 'is-locked': !revealed }">
    <span class="clue-badge">
      <template v-if="revealed">{{
        t.whoAmI.clueOf.replace("{n}", String(index + 1))
      }}</template>
      <template v-else>
        <font-awesome-icon icon="lock" class="me-1" />
        {{ t.whoAmI.locked }}
      </template>
    </span>
    <p v-if="revealed" class="clue-text">{{ text }}</p>
    <p v-else class="clue-text clue-placeholder" aria-hidden="true">
      ▭ ▭ ▭ ▭ ▭ ▭ ▭ ▭
    </p>
  </li>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";

defineProps<{ index: number; text: string; revealed: boolean }>();

const t = tGlobal;
</script>
