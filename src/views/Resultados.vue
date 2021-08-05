<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />

    <!-- tabla de posiciones -->
    <div class="max-w-2xl p-4 mx-auto lg:py-8">
      <!-- tabla -->
      <!-- <TablaPosicionesEnDuro /> -->
      <TablaPosiciones />
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";
import TituloPagina from "@/components/TituloPagina";
// import TablaPosicionesEnDuro from "@/components/TablaPosicionesEnDuro";
import TablaPosiciones from "@/components/TablaPosiciones";

export default {
  name: "Resultados",
  components: {
    TituloPagina,
    TablaPosiciones,
    // TablaPosicionesEnDuro,
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  async created() {
    this.asyncDataStatus_fetch();
  },
};
</script>
