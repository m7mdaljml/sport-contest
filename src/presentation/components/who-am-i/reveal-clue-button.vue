<template>
  <button
    v-if="remaining > 0"
    type="button"
    class="btn-ghost who-reveal"
    :disabled="disabled"
    @click="$emit('reveal')"
  >
    <font-awesome-icon icon="lock-open" />
    {{ remaining === 1 ? t.whoAmI.revealLast : t.whoAmI.reveal }}
    <span class="who-reveal-count">{{ remaining }}</span>
  </button>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";

defineProps<{ remaining: number; disabled: boolean }>();

defineEmits<{ reveal: [] }>();

const t = tGlobal;
</script>
