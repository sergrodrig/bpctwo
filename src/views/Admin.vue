<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Admin" />

    <!-- content -->
    <div
      class="max-w-5xl p-8 mx-auto space-y-8  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <!-- <AdminMantencion /> -->
      <AdminEncuentros />
      <AdminSoldadosList />
      <AdminEquiposList />
      <AdminRegimientosList />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";
import AdminMantencion from "@/components/admin/AdminMantencion";
import AdminEncuentros from "@/components/admin/AdminEncuentros";
import AdminSoldadosList from "@/components/admin/AdminSoldadosList";
import AdminEquiposList from "@/components/admin/AdminEquiposList";
import AdminRegimientosList from "@/components/admin/AdminRegimientosList";

export default {
  components: {
    TituloPagina,
    AdminEncuentros,
    AdminSoldadosList,
    AdminEquiposList,
    AdminRegimientosList,
    AdminMantencion,
  },
  emits: ["ready"],
  mixins: [asyncDataStatus],
  data() {
    return {
      encuentroSeleccionado: null,
    };
  },
  computed: {
    ...mapState([
      "equipos",
      "regimientos",
      "soldados",
      "encuentros",
      "resultados",
    ]),
  },
  async created() {
    await this.fetchAllItems("equipos");
    await this.fetchAllItems("mapas");
    await this.fetchAllItems("regimientos");
    await this.fetchAllItems("soldados");
    await this.fetchAllItems("encuentros");
    await this.fetchAllItems("resultados");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>

<style></style>
