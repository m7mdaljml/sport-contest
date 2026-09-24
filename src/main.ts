import { createApp } from "vue";
import App from "./App.vue";
import router from "./sitemap";
import { initLocale } from "./i18n";

// css
import "./assets/style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTrophy,
  faFutbol,
  faShuffle,
  faBolt,
  faMedal,
  faLayerGroup,
  faPlay,
  faStar,
  faCheck,
  faXmark,
  faCircleCheck,
  faCircleXmark,
  faArrowRight,
  faRotateRight,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrophy,
  faFutbol,
  faShuffle,
  faBolt,
  faMedal,
  faLayerGroup,
  faPlay,
  faStar,
  faCheck,
  faXmark,
  faCircleCheck,
  faCircleXmark,
  faArrowRight,
  faRotateRight,
  faGlobe,
);

initLocale();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
