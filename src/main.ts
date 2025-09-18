import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// css
import "./assets/style/index.css";
import "./assets/style/loading.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faMoon,
  faEarth,
  faHome,
  faComputer,
  faPerson,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon, faEarth, faHome, faComputer, faPerson, faDoorOpen);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
