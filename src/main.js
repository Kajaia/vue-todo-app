import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const emitter = mitt();

const app = createApp(App);

app.use(router);

app.config.globalProperties.emitter = emitter;

app.mount("#app");
