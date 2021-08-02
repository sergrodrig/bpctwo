import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// tailwind
import "@/index.css";

// firebase config
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "@/config/firebase";
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("unsubscribeAuthUserSnapshot");
  if (user) {
    store.dispatch("fetchAuthUser");
  }
});

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
