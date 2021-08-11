<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />

    <!-- tabla de posiciones -->
    <div class="max-w-3xl p-4 mx-auto space-y-8 lg:py-8">
      <!-- tabla -->
      <!-- <TablaPosiciones /> -->
      <FechasLiga />
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";
import TablaPosiciones from "@/components/TablaPosiciones";
import FechasLiga from "@/components/FechasLiga";

export default {
  name: "Resultados",
  components: {
    TituloPagina,
    TablaPosiciones,
    FechasLiga,
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  async created() {
    this.asyncDataStatus_fetch();
  },
};
</script>
