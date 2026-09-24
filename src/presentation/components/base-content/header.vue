<template>
  <nav class="navbar header light px-3">
    <div class="d-flex w-100 align-items-center justify-content-between">
      <router-link
        class="navbar-brand d-flex align-items-center"
        :to="{ name: 'contest' }"
      >
        <span class="brand-logo me-2">
          <img :src="logo" alt="Visca Cup" />
        </span>
        <span class="brand-name">{{ siteName }}</span>
      </router-link>
      <button type="button" class="lang-toggle" @click="toggle">
        <font-awesome-icon icon="globe" />
        {{ locale === "en" ? "العربية" : "English" }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from "../../../assets/images/logo.png";
import { locale, setLocale } from "../../../i18n";

defineProps<{ siteName: string }>();

const toggle = () => setLocale(locale.value === "en" ? "ar" : "en");
</script>
