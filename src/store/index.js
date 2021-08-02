import { createStore } from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

export default createStore({
  state: {
    clanes: [],
    facciones: [],
    fechas: [],
    mapas: [],
    soldados: [],
    tablaResultados: [],
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
