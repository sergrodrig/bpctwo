<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Resultados",
  components: {
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  async created() {
    this.asyncDataStatus_fetch();
  },
};
</script>
