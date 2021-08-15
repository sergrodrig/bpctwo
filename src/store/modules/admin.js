import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import { docToResource, findById } from "@/helpers";

export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {
    crearEquipo({ dispatch }, { item }) {
      dispatch("createItem", { item, collection: "equipos" }, { root: true });
    },
    crearRegimiento({ dispatch }, { item }) {
      dispatch(
        "createItem",
        { item, collection: "regimientos" },
        { root: true }
      );
    },
    crearSoldado({ dispatch }, { item }) {
      dispatch("createItem", { item, collection: "soldados" }, { root: true });
    },
    actualizarSoldado({ dispatch }, { id, nick, equipo, regimiento }) {
      dispatch(
        "updateItem",
        {
          resource: "soldados",
          id: id,
          newData: { id, nick, equipo, regimiento },
        },
        { root: true }
      );
    },
  },
  mutations: {},
};
