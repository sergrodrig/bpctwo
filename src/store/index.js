import { createStore } from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

export default createStore({
  state: {
    regimientos: [], // bpc, etc...
    clanes: [], // los del gulag, etc...
    fechas: [],
    mapas: [],
    soldados: [],
    tablaResultados: [],
    posiciones: [],
    temporadas: [],
    authId: null,
    unsubscribes: [],
    authUserUnsubscribe: null,
    authObserverUnsubscribe: null,
    users: [],
  },
  mutations,
  actions,
  getters,
  modules: {},
});
