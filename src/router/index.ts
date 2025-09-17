import Home from "../presentation/pages/view/home.vue";
import Contest from "../presentation/pages/view/contest.vue";
import Profile from "../presentation/components/base-content/profile.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "home",
    meta: { label: { en: "Home", ar: "الرئيسية" } },
  },
  {
    path: "/contest",
    name: "Contest",
    component: Contest,
    icon: "computer",
    meta: { label: { en: "Contest", ar: "مسابقة" } },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    icon: "person-half-dress",
    meta: { label: { en: "Profile", ar: "الملف الشخصي" } },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
