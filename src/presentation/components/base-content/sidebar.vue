<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-1 ml-0 sidebar-border"
    :class="{ 'light border': isLight, 'dark-sidebar': !isLight }"
    style="width: 280px"
  >
    <ul class="nav flex-column">
      <li v-for="(route, index) in routes" :key="index">
        <router-link
          :to="route.path"
          class="nav-link"
          :class="{ 'text-dark': isLight, 'text-light': !isLight }"
        >
          <font-awesome-icon :icon="route.icon" />
          {{ (route.meta?.label as any)[lang] }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { routes } from "../../../router/index";

defineProps<{ isLight: boolean; lang: string }>();
</script>
