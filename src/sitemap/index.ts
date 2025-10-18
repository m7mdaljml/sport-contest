import Home from "../presentation/pages/home/index.vue";
import Contest from "../presentation/pages/contest/index.vue";
import Profile from "../presentation/pages/profile/index.vue";
import Login from "../presentation/components/login/index.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/home",
    name: "home",
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
    meta: { label: { en: "Login", ar: "تسجيل الدخول" } },
  },

  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
