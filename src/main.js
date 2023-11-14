import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/main.css";
import "./css/grid.css";
import "../src/assets/icon/fontawesome/css/all.min.css";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("QuillEditor", QuillEditor);
