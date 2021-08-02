import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Liga from "../views/Liga.vue";
import Equipos from "../views/Equipos.vue";
import Mapas from "../views/Mapas.vue";
import Resultados from "../views/Resultados.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registrarse",
    name: "SignUp",
    component: SignUp,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/ingresar",
    name: "SignIn",
    component: SignIn,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/liga",
    name: "Liga",
    component: Liga,
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: Equipos,
  },
  {
    path: "/mapas",
    name: "Mapas",
    component: Mapas,
  },
  {
    path: "/resultados",
    name: "Resultados",
    component: Resultados,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
