import { createStore } from "vuex";

import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

import admin from "@/store/modules/admin";

export default createStore({
  state: {
    //
    encuentros: [],
    equipos: [],
    mapas: [],
    regimientos: [],
    resultados: [],
    soldados: [],
    tablaEnDuro: [],

    //
    authId: null,
    unsubscribes: [],
    authUserUnsubscribe: null,
    authObserverUnsubscribe: null,
    users: [],

    //
    mantencion: true,
  },
  mutations,
  actions,
  getters,
  modules: {
    admin,
  },
});
