<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="resultados detalle" />

    <!-- detalle duelo -->
    <div class="max-w-4xl px-8 py-4 mx-auto space-y-12 lg:py-24">
      <!-- escudos -->
      <div class="grid items-center justify-center grid-cols-3 text-center">
        <div
          class="flex items-center justify-center w-32 h-32 mx-auto text-6xl text-white bg-black  lg:w-64 lg:h-64"
        >
          {{ equipoLocal.initials }}
        </div>
        <div class="text-3xl text-center">vs</div>
        <div
          class="flex items-center justify-center w-32 h-32 mx-auto text-6xl text-white bg-black  lg:w-64 lg:h-64"
        >
          {{ equipoVisita.initials }}
        </div>
      </div>

      <div class="space-y-8">
        <!-- nombres clanes -->
        <div class="grid items-center grid-cols-3 text-center">
          <div class="text-2xl lg:text-3xl">
            {{ equipoLocal.name }}
          </div>
          <div />
          <div class="text-2xl lg:text-2xl">
            {{ equipoVisita.name }}
          </div>
        </div>

        <!-- resultado -->
        <div class="grid items-center grid-cols-3 text-center">
          <div class="text-7xl">{{ resultadosDetalle.mapasLocal }}</div>
          <div />
          <div class="text-7xl">{{ resultadosDetalle.mapasVisita }}</div>
        </div>
      </div>

      <!-- resultados mapas -->
      <div class="space-y-8">
        <div
          class="p-4 space-y-4 text-center border rounded shadow-xl"
          v-for="mapa in resultadosDetalle.partidas"
          :key="mapa"
        >
          <p class="font-bold">{{ mapa.mapa }}</p>
          <div class="grid grid-cols-2 divide-x">
            <p class="text-2xl">{{ mapa.local }}</p>
            <p class="text-2xl">{{ mapa.visita }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import TituloPagina from "@/components/TituloPagina";
import asyncDataStatus from "@/mixins/asyncDataStatus";

export default {
  name: "ResultadosDetalle",
  components: {
    TituloPagina,
  },
  props: {
    encuentroId: {
      type: String,
      required: true,
    },
  },
  mixins: [asyncDataStatus],
  data() {
    return {};
  },
  async created() {
    await this.fetchAllItems("encuentros");
    await this.fetchAllItems("equipos");
    await this.fetchAllItems("resultados");
    this.asyncDataStatus_fetch();
  },
  computed: {
    ...mapState(["resultados", "encuentros", "equipos", "mapas"]),
    encuentroDetalle() {
      const encuentro =
        this.encuentros.find((e) => e.numero == this.encuentroId) || {};
      return { ...encuentro };
    },
    resultadosDetalle() {
      const resultados =
        this.resultados.find((r) => r.encuentro == this.encuentroId) || {};
      return { ...resultados };
    },
    equipoLocal() {
      if (!this.encuentroDetalle) return {};
      const equipo =
        this.equipos.find((e) => e.id === this.encuentroDetalle.local) || {};
      return { ...equipo };
    },
    equipoVisita() {
      if (!this.encuentroDetalle) return {};
      const equipo =
        this.equipos.find((e) => e.id === this.encuentroDetalle.visita) || {};
      return { ...equipo };
    },
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
