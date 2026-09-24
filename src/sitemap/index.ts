import Contest from "../presentation/pages/contest/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/contest",
    name: "contest",
    component: Contest,
  },
  {
    path: "/",
    redirect: "/contest",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/contest",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;