<template>
  <div class="vh-100 d-flex justify-content-center align-items-center bg-light">
    <div
      class="shadow-lg p-5 rounded-4 bg-white text-center"
      style="min-width: 380px; max-width: 420px; width: 100%"
    >
      <!-- Logo -->
      <div class="mb-3">
        <img
          src="../../../assets/images/logo.png"
          alt="App Logo"
          class="img-fluid"
          style="max-height: 100px"
        />
      </div>

      <!-- Title -->
      <h3 class="mb-4 fw-bold text-dark">
        {{ tGlobal.login }}
      </h3>

      <!-- Username -->
      <div class="mb-3 text-start">
        <label class="form-label fw-semibold">
          {{ tGlobal.userName }}
        </label>
        <input
          v-model="username"
          type="text"
          class="form-control form-control"
          :class="{ 'border-danger': !loginState }"
          :placeholder="tGlobal.enterUserName"
        />
      </div>

      <!-- Password -->
      <div class="mb-3 text-start">
        <label class="form-label fw-semibold">
          {{ tGlobal.password }}
        </label>
        <input
          v-model="password"
          type="password"
          class="form-control form-control"
          :class="{ 'border-danger': !loginState }"
          :placeholder="tGlobal.enterPass"
        />
      </div>

      <!-- Login Button -->
      <div class="d-grid mt-4">
        <button
          type="button"
          class="btn btn-dark btn-lg rounded-pill"
          @click="$emit('validateLogin', username, password)"
        >
          {{ tGlobal.login }}
        </button>
      </div>

      <!-- Error Message -->
      {{ loginState }}
      <div v-if="!loginState" class="mt-3 text-danger fw-medium">
        {{ tGlobal.invalidLogin }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { default as ar } from "../../../i18n/ar";
import { default as en } from "../../../i18n/en";

const props = defineProps<{ lang: string; loginState: boolean }>();
const emit = defineEmits(["validateLogin"]);

const username = ref("");
const password = ref("");

// computed
const tGlobal = computed(() => (props.lang === "en" ? en : ar));
</script>
