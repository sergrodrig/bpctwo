<template>
  <div class="p-4 border border-black">
    <h1 class="text-2xl font-bold">Ingresar resultado</h1>
    {{ detalleMiPerfil?.nick }}
    {{ equipoDetalle() }}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      encuentroSeleccionado: null,
    };
  },
  computed: {
    ...mapState([
      "equipos",
      "encuentros",
      "resultados",
      "authId",
      "users",
      "soldados",
    ]),
    detalleMiPerfil() {
      return this.users.find((u) => u.id === this.authId);
    },
  },
  created() {},
  methods: {
    ...mapActions(["updateItem", "fetchAllItems"]),
    encuentroDetalle(id) {
      return this.encuentros.find((e) => e.id === id) || {};
    },
    equipoDetalle(id) {
      return (
        this.equipos.find(
          (e) => e.id === "95c6d030-f59c-11eb-842e-4f44b59e4ef0"
        ) || {}
      );
    },
  },
};
</script>

<style></style>
