import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "f85ba0ab4a82063a39ff",
  cluster: "eu",
  forceTLS: true,
});

const emitter = mitt();

const app = createApp(App);

app.use(router);

app.config.globalProperties.emitter = emitter;

app.mount("#app");
