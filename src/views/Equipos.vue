<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Equipos" />

    <!-- lista de cards de clanes -->
    <div class="max-w-5xl p-4 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      <EquiposClanesList :clanes="clanes" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import EquiposClanesList from "@/components/EquiposClanesList";
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Equipos",
  components: {
    EquiposClanesList,
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  computed: {
    clanes() {
      return this.$store.state.clanes;
    },
  },
  async created() {
    await this.fetchAllItems("clanes");
    await this.fetchAllItems("soldados");
    await this.fetchAllItems("regimientos");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
