// * LIB
import { createApp } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

// * IMPORT
import "./assets/index.css";
import App from "./App.vue";
import router from "./router";
import "./router/permission.js";
import store from "./store";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);
app.use(store);
app.use(VueSweetalert2);
app.use(router);
app.mount("#app");
