import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

// const UserDetails = () => import("./views/UserDetails");

const Home = () => import("../views/Home.vue");
const SignIn = () => import("../views/SignIn.vue");
const SignUp = () => import("../views/SignUp.vue");
const Admin = () => import("../views/Admin.vue");
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
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { toTop: true, smoothScroll: true, requiresAuth: false },
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
  {
    path: "/resultados/:encuentroId",
    name: "ResultadosDetalle",
    component: ResultadosDetalle,
    props: true,
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

router.beforeEach(async (to, from) => {
  await store.dispatch("initAuthentication");
  if (to.meta.requiresAuth && !store.state.authId) {
    return { name: "SignIn", query: { redirectTo: to.path } };
  }
});

export default router;
