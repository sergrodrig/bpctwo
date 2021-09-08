import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// tailwind
import "@/index.css";

// firebase config
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import firebaseConfig from "@/config/firebase";
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const functions = firebase.functions();
// if (location.hostname === "localhost") {
//   db.useEmulator("localhost", 8888);
//   auth.useEmulator("http://localhost:9099");
//   functions.useEmulator("localhost", 5001);
// }

// vue app instance
const bpctwo = createApp(App);

// globally registered components
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

// config and mount
bpctwo.use(store);
bpctwo.use(router);
bpctwo.mount("#app");
