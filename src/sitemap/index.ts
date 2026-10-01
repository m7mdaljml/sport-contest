import Challenges from "../presentation/pages/challenges/index.vue";
import Contest from "../presentation/pages/contest/index.vue";
import WhoAmI from "../presentation/pages/who-am-i/index.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/challenges",
    name: "challenges",
    component: Challenges,
  },
  {
    path: "/contest",
    name: "contest",
    component: Contest,
  },
  {
    path: "/who-am-i",
    name: "who-am-i",
    component: WhoAmI,
  },
  {
    path: "/",
    redirect: "/challenges",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/challenges",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
