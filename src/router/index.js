import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

// const UserDetails = () => import("./views/UserDetails");

const Home = () => import("../views/Home.vue");
const SignIn = () => import("../views/SignIn.vue");
const SignUp = () => import("../views/SignUp.vue");
const Liga = () => import("../views/Liga.vue");
const Equipos = () => import("../views/Equipos.vue");
const Mapas = () => import("../views/Mapas.vue");
const MapaDetail = () => import("../views/MapaDetail.vue");
const Resultados = () => import("../views/Resultados.vue");
const ConfigurarPartida = () => import("../views/ConfigurarPartida.vue");
const ResultadosDetalle = () => import("../views/ResultadosDetalle.vue");

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
    path: "/configuracionpartida",
    name: "ConfigurarPartida",
    component: ConfigurarPartida,
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
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: Equipos,
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
  },
  {
    path: "/mapas",
    name: "Mapas",
    component: Mapas,
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
  },
  {
    path: "/mapas/:mapaId",
    name: "MapaDetail",
    component: MapaDetail,
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
    props: true,
  },
  {
    path: "/resultados",
    name: "Resultados",
    component: Resultados,
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
  },
  {
    path: "/resultados/:encuentroId",
    name: "ResultadosDetalle",
    component: ResultadosDetalle,
    props: true,
    meta: { toTop: true, smoothScroll: true, requiresAuth: true },
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

router.beforeEach(async () => {
  await store.dispatch("initAuthentication");
  store.dispatch("unsubscribeAllSnapshots");
  // if (to.meta.requiresAuth && !store.state.authId) {
  //   return { name: "SignIn", query: { redirectTo: to.path } };
  // }
  // if (to.meta.requiresGuest && store.state.authId) {
  //   return { name: "Home" };
  // }
});

export default router;
