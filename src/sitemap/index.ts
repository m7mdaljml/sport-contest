import Home from "../components/content/view/home.vue";
import Contest from "../components/content/view/contest.vue";

export default [
  {
    name: { en: "Home", ar: "الرئيسية" },
    path: "/",
    component: Home,
    icon: "home",
  },
  {
    name: { en: "contest", ar: "المسابقة" },
    path: "/contest",
    component: Contest,
    icon: "computer",
  },
];
