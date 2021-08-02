import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/index.css";

import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "@/config/firebase";

firebase.initializeApp(firebaseConfig);

const bpctwo = createApp(App);
bpctwo.use(store);
bpctwo.use(router);

const requireComponent = require.context(
  "./components",
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
  bpctwo.component(baseComponentName, baseComponentConfig);
});

bpctwo.mount("#app");
