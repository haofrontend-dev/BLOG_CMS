// * LIB
import { createApp } from "vue";

// * IMPORT
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import "./router/permission.js";
import store from "./store";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(store);
app.use(VueSweetalert2);
app.use(router);
app.mount("#app");
