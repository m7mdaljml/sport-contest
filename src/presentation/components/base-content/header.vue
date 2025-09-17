<template>
  <nav class="navbar header">
    <!-- logo & name -->
    <a class="navbar-brand text-light" href="#">
      <img src="../../../assets/images/logo.png" width="50" height="50" />
      {{ name }}
    </a>
    <div class="d-flex">
      <!-- mode buttons -->
      <div class="mx-2">
        <button class="btn btn-outline-light" @click="$emit('updateMood')">
          <font-awesome-icon :icon="!isLight ? 'sun' : 'moon'" />
          {{ !isLight ? tGlobal.light : tGlobal.dark }}
        </button>
      </div>
      <!-- lang buttons -->
      <div class="mx-2">
        <button
          class="btn btn-outline-light"
          @click="$emit('updateLang', lang == 'en' ? 'ar' : 'en')"
        >
          <font-awesome-icon icon="earth" />
          {{ lang == "en" ? tGlobal.arabic : tGlobal.english }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, toRef } from "vue";
import { default as ar } from "../../../i18n/ar";
import { default as en } from "../../../i18n/en";

const props = defineProps<{ name: string; isLight: boolean; lang: string }>();
defineEmits(["updateMood", "updateLang"]);

// computed
const tGlobal = computed(() => (lang.value === "en" ? en : ar));

// refs
const lang = toRef(props, "lang") as any;
</script>
