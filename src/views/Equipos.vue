<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Equipos" />

    <!-- lista de cards de equipos -->
    <div class="max-w-5xl p-4 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      <EquiposList :equipos="equipos" />
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";
import { mapState } from "vuex";

import EquiposList from "@/components/EquiposList";
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Equipos",
  components: {
    EquiposList,
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  computed: {
    ...mapState(["equipos"]),
  },
  async created() {
    this.asyncDataStatus_fetch();
  },
};
</script>
