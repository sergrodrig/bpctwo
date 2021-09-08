<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />

    <!-- tabla de posiciones -->
    <div class="max-w-3xl p-4 mx-auto space-y-8 lg:py-8">
      <!-- tabla -->
      <TablaPosicionesEnDuro />
      <!-- <TablaPosiciones /> -->
      <FechasLiga />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";
import TablaPosiciones from "@/components/TablaPosiciones";
import TablaPosicionesEnDuro from "@/components/TablaPosicionesEnDuro";
import FechasLiga from "@/components/FechasLiga";

export default {
  name: "Resultados",
  components: {
    TituloPagina,
    TablaPosiciones,
    TablaPosicionesEnDuro,
    FechasLiga,
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  async created() {
    await this.fetchAllItems("encuentros");
    await this.fetchAllItems("equipos");
    await this.fetchAllItems("resultados");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
