<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />

    <!-- tabla de posiciones -->
    <div class="max-w-3xl p-4 mx-auto space-y-8 lg:py-8">
      <!-- tabla -->
      <!-- <TablaPosicionesEnDuro /> -->
      <!-- <TablaPosiciones :pos="posiciones" :dataEnDuro="dataEnDuro" /> -->
      <TablaPosiciones2 :pos="posiciones" />
      <!-- <FechasLiga2 /> -->
      <FechasLiga2 :encuentros="encuentros" :resultados="resultados" />
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";
import TituloPagina from "@/components/TituloPagina";
import TablaPosicionesEnDuro from "@/components/TablaPosicionesEnDuro";
import TablaPosiciones from "@/components/TablaPosiciones";
import TablaPosiciones2 from "@/components/TablaPosiciones2";
import FechasLiga from "@/components/FechasLiga";
import FechasLiga2 from "@/components/FechasLiga2";

import dataEncuentros from "@/data/encuentros.json";
import dataResultados from "@/data/resultados.json";

export default {
  name: "Resultados",
  components: {
    TituloPagina,
    TablaPosiciones,
    TablaPosiciones2,
    TablaPosicionesEnDuro,
    FechasLiga,
    FechasLiga2,
  },
  mixins: [asyncDataStatus],
  data() {
    return {
      encuentros: dataEncuentros,
      resultados: dataResultados,
    };
  },
  emits: ["ready"],
  async created() {
    this.asyncDataStatus_fetch();
  },
};
</script>
