import { computed, ref } from "vue";
import en from "./en";
import ar from "./ar";

export type Locale = "en" | "ar";
export type Dictionary = typeof en;

const LOCALE_KEY = "visca_locale";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

const locale = ref<Locale>("en");

const tGlobal = computed(() => dictionaries[locale.value]);

const setLocale = (l: Locale) => {
  locale.value = l;
  document.documentElement.lang = l;
  document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
  try {
    localStorage.setItem(LOCALE_KEY, l);
  } catch (err) {
    console.log(err);
  }
};

const initLocale = () => {
  const saved = localStorage.getItem(LOCALE_KEY);
  setLocale(saved === "ar" || saved === "en" ? saved : "en");
};

export { locale, setLocale, initLocale, tGlobal };
