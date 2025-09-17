<template>
  <div v-if="!mode.isBusy" class="vh-100">
    <main-header
      name="Visca Cup"
      :is-light="isLight"
      :lang
      @update-mood="changeMood"
      @update-lang="changeLang"
    />

    <div class="d-flex h-100" :class="{ light: isLight, dark: !isLight }">
      <!-- sidebar -->
      <sidebar :is-light="isLight" :lang @update-route="changeRoute" />
      <!-- body content -->
      <div name="body">
        <component :is="compenent" />
      </div>
    </div>
  </div>
  <loader v-else :is-light="isLight" />
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, watch } from "vue";

// vars, refs, ...
const isLight = ref(true),
  mode = ref({ isBusy: false }),
  lang = ref("en"),
  compenent = ref("");

// methods
const load = () => {
  mode.value.isBusy = true;
  return new Promise((res) => {
    setTimeout(() => {
      mode.value.isBusy = false;
      res("ok");
    }, 1500);
  });
};

const changeMood = async () => {
  isLight.value = !isLight.value;
  await load();
};

const changeLang = async (newLang: string) => {
  await load();
  lang.value = newLang;
};

const changeRoute = (comp: any) => {
  compenent.value = comp;
};

// watchers
watch(lang, (newLang) => {
  document.dir = newLang === "ar" ? "rtl" : "ltr";
});

// hooks
onMounted(() => {
  load();
});

// components
const MainHeader = defineAsyncComponent(
  () => import("./components/header/index.vue")
);
const Sidebar = defineAsyncComponent(
  () => import("./components/sidebar/index.vue")
);
const Loader = defineAsyncComponent(
  () => import("./components/content/loader.vue")
);
</script>
