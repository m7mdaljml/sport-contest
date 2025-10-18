<template>
  <nav
    class="navbar header d-flex justify-content-between align-items-center px-3"
  >
    <!-- Logo & site name -->
    <a class="navbar-brand text-light d-flex align-items-center" href="#">
      <img
        src="../../../assets/images/logo.png"
        width="50"
        height="50"
        class="me-2"
      />
      {{ siteName }}
    </a>

    <!-- Right side controls -->
    <div class="d-flex align-items-center">
      <!-- Mode toggle -->
      <div class="mx-2">
        <button class="btn btn-outline-light" @click="$emit('updateMood')">
          <font-awesome-icon :icon="!isLight ? 'sun' : 'moon'" />
          {{ !isLight ? tGlobal.light : tGlobal.dark }}
        </button>
      </div>

      <!-- Language toggle -->
      <div class="mx-2">
        <button
          class="btn btn-outline-light"
          @click="$emit('updateLang', lang === 'en' ? 'ar' : 'en')"
        >
          <font-awesome-icon icon="earth" />
          {{ lang === "en" ? tGlobal.arabic : tGlobal.english }}
        </button>
      </div>

      <div class="vr mx-3 bg-light"></div>

      <div v-if="user" class="btn-group" style="cursor: pointer">
        <div class="d-flex" data-bs-toggle="dropdown" aria-expanded="false">
          <img
            :src="user.imageUrl"
            class="rounded-circle me-2"
            width="40"
            height="40"
          />
          <div class="d-flex flex-column my-auto text-light">
            {{ user.firstname }} {{ user.lastname }}
          </div>
        </div>
        <ul class="dropdown-menu w-100 mt-2">
          <li>
            <router-link
              class="dropdown-item d-flex align-items-center"
              :to="{ name: 'profile' }"
            >
              <font-awesome-icon icon="person" class="me-2" />
              {{ tGlobal.profile }}
            </router-link>
          </li>
          <li>
            <button
              class="dropdown-item d-flex align-items-center"
              @click="$emit('logout')"
            >
              <font-awesome-icon icon="door-open" class="me-2" />
              {{ tGlobal.logout }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, toRef } from "vue";
import { default as ar } from "../../../i18n/ar";
import { default as en } from "../../../i18n/en";
import { users } from "../../../domain/utilities/users";
import type { IUser } from "../../../domain/meta/i-user";

const props = defineProps<{
  siteName: string;
  isLight: boolean;
  lang: string;
}>();
defineEmits(["updateMood", "updateLang", "logout"]);

const lang = toRef(props, "lang");
const user = ref<IUser | null>(null);

const tGlobal = computed(() => (lang.value === "en" ? en : ar));

onMounted(() => {
  const username = localStorage.getItem("username");
  if (username && users[username]) {
    user.value = users[username];
  }
});
</script>
