<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Equipos" />

    <!-- lista de cards de facciones -->
    <div class="max-w-5xl p-4 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      <EquiposFaccionesList :facciones="facciones" class="" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import EquiposFaccionesList from "@/components/EquiposFaccionesList";
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Equipos",
  components: {
    EquiposFaccionesList,
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  computed: {
    facciones() {
      return this.$store.state.facciones;
    },
  },
  async created() {
    await this.fetchAllItems("facciones");
    await this.fetchAllItems("soldados");
    await this.fetchAllItems("clanes");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
