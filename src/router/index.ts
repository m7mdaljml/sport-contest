import Home from "../presentation/pages/view/home.vue";
import Contest from "../presentation/pages/view/contest.vue";
import Profile from "../presentation/pages/view/profile.vue";
import Login from "../presentation/pages/login/index.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    icon: "home",
    meta: { label: { en: "Home", ar: "الرئيسية" } },
  },
  {
    path: "/contest",
    name: "contest",
    component: Contest,
    icon: "computer",
    meta: { label: { en: "Contest", ar: "مسابقة" } },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    icon: "person",
    meta: { label: { en: "Profile", ar: "الملف الشخصي" } },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    icon: "person",
    meta: { label: { en: "Login", ar: "تسجيل الدخول" } },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
