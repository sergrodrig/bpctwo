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
          newData: { nick, equipo, regimiento },
        },
        { root: true }
      );
    },
    actualizarEquipo({ dispatch }, { id, name, initials, captain }) {
      dispatch(
        "updateItem",
        {
          resource: "equipos",
          id: id,
          newData: { name, initials, captain },
        },
        { root: true }
      );
    },
    actualizarResultado({ dispatch }, { resource, id, newData }) {
      dispatch(
        "updateItem",
        { resource, id, newData: { partidas: newData } },
        { root: true }
      );
    },
    actualizarResultadoPrueba({ dispatch }, { resource, id, newData }) {
      console.log("Admin -> actualizarResultadoPrueba");
      dispatch(
        "updateItemPrueba",
        { resource, id, newData: { partidas: newData } },
        { root: true }
      );
    },
  },
  mutations: {},
};
