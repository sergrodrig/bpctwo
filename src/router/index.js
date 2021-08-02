import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Liga from "../views/Liga.vue";
import Equipos from "../views/Equipos.vue";
import Mapas from "../views/Mapas.vue";
import MapaDetail from "../views/MapaDetail.vue";
import Resultados from "../views/Resultados.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { toTop: true, smoothScroll: true },
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
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/liga",
    name: "Liga",
    component: Liga,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: Equipos,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/mapas",
    name: "Mapas",
    component: Mapas,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/mapas/:mapaId",
    name: "MapaDetail",
    component: MapaDetail,
    meta: { toTop: true, smoothScroll: true },
    props: true,
  },
  {
    path: "/resultados",
    name: "Resultados",
    component: Resultados,
    meta: { toTop: true, smoothScroll: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});

export default router;
