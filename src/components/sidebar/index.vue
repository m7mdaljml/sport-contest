<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-1 ml-0 sidebar-border"
    :class="{ 'light border': isLight, 'dark-sidebar': !isLight }"
    style="width: 280px"
  >
    <ul class="nav flex-column">
      <li v-for="(route, index) in routes" :key="index">
        <a
          href="#"
          class="nav-link"
          :class="{ 'text-dark': isLight, 'text-light': !isLight }"
          @click="$emit('updateRoute', route.component)"
        >
          <font-awesome-icon :icon="route.icon" />
          {{ (route.name as any)[lang] }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { default as routes } from "../../sitemap/index";
defineProps<{ isLight: Boolean; lang: string }>();
const emit = defineEmits(["updateRoute"]);

onMounted(() => {
  emit("updateRoute", routes[0].component);
});
</script>
