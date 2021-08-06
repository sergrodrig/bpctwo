<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Resultados" />

    <!-- tabla de posiciones -->
    <div class="max-w-3xl p-4 mx-auto lg:py-8">
      <!-- tabla -->
      <!-- <TablaPosicionesEnDuro /> -->
      <TablaPosiciones :pos="posiciones" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  computed: {
    posiciones() {
      return this.$store.state.posiciones;
    },
  },
  async created() {
    await this.fetchAllItems("posiciones");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
