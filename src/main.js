import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/main.css";
import "./css/grid.css";
import "../src/assets/icon/fontawesome/css/all.min.css";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import store from "./store";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common["token"] =
  "Linh " + localStorage.getItem("token");

const app = createApp(App);
app.use(store);
app.use(router);
app.component("QuillEditor", QuillEditor);
app.mount("#app");
