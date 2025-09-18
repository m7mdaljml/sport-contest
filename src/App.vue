<template>
  <div v-if="!loggedIn">
    <router-view :loginState @validate-login="validateLogin" />
  </div>
  <div v-else>
    <div v-if="!mode.isBusy" class="vh-100">
      <main-header
        name="Visca Cup"
        :is-light="isLight"
        :lang
        @update-mood="changeMood"
        @update-lang="changeLang"
        @logout="logout"
      />
      <div class="d-flex h-100" :class="{ light: isLight, dark: !isLight }">
        <!-- sidebar -->
        <sidebar :is-light="isLight" :lang />
        <!-- body content -->
        <div name="body">
          <router-view />
        </div>
      </div>
    </div>
    <loader v-else :is-light="isLight" />
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

// vars, refs, ...
const isLight = ref(true),
  mode = ref({ isBusy: false }),
  lang = ref("en"),
  router = useRouter(),
  route = useRoute(),
  loggedIn = ref(false),
  loginState = ref(true);
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

const logout = async () => {
  await load();
  router.replace({ name: "login" });
  loggedIn.value = false;
};

const validateLogin = async () => {
  loggedIn.value = true;
  await load();
  router.replace({ name: "home" });
};

// watchers
watch(lang, (newLang) => {
  document.dir = newLang === "ar" ? "rtl" : "ltr";
});

watch(
  [route, loggedIn],
  () => {
    if (!loggedIn.value && route.name !== "login") {
      router.replace({ name: "login" });
    }
  },
  { immediate: true }
);

// hooks
onMounted(async () => {
  await load();
});

// components
const MainHeader = defineAsyncComponent(
  () => import("../src/presentation/components/base-content/header.vue")
);
const Sidebar = defineAsyncComponent(
  () => import("./presentation/components/base-content/sidebar.vue")
);
const Loader = defineAsyncComponent(
  () => import("../src/presentation/components/base-content/loader.vue")
);
</script>
