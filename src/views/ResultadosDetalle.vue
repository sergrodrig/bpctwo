<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="resultados detalle" />

    <!-- detalle duelo -->
    <div class="max-w-4xl px-8 py-4 mx-auto space-y-8 lg:py-24">
      <!-- escudos -->
      <div class="grid items-center justify-center grid-cols-3 text-center">
        <div
          class="flex items-center justify-center w-32 h-32 mx-auto text-6xl text-white bg-black  lg:w-64 lg:h-64"
        >
          <!-- {{ getInitials(resultadosLlave.equipoLocal) }} -->
        </div>
        <div class="text-3xl text-center">vs</div>
        <div
          class="flex items-center justify-center w-32 h-32 mx-auto text-6xl text-white bg-black  lg:w-64 lg:h-64"
        >
          <!-- {{ getInitials(resultadosLlave) }} -->
        </div>
      </div>

      <!-- nombres clanes -->
      <div class="grid items-center grid-cols-3 text-center">
        <div class="text-2xl lg:text-3xl">
          {{ nombreEquipoLocal }}
        </div>
        <div />
        <div class="text-2xl lg:text-2xl">
          {{ nombreEquipoVisita }}
        </div>
      </div>

      <!-- resultado -->
      <div class="grid items-center grid-cols-3 text-center">
        <div class="text-7xl">0</div>
        <div />
        <div class="text-7xl">0</div>
      </div>

      <!-- resultados mapas -->
      <div class="space-y-8">
        <div
          v-for="mapa in resultadosLlave.detalleMapas"
          :key="mapa"
          class="p-4 space-y-4 text-center border rounded shadow-xl"
        >
          <p class="font-bold">{{ mapa.mapa }}</p>
          <div class="grid grid-cols-2 divide-x">
            <p class="text-2xl">{{ mapa.local }}</p>
            <p class="text-2xl">{{ mapa.visita }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- debug -->
    <!--
    <div
      class="max-w-3xl p-4 m-4 mx-auto text-xs text-gray-500 whitespace-pre border "
    >
      {{ resultadosLlave }}
    </div>
    -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TituloPagina from "@/components/TituloPagina";
import asyncDataStatus from "@/mixins/asyncDataStatus";

export default {
  name: "ResultadosDetalle",
  components: {
    TituloPagina,
  },
  props: {
    resultadoId: {
      type: String,
      required: true,
    },
  },
  mixins: [asyncDataStatus],
  async created() {
    await this.fetchAllItems("resultados");
    await this.fetchAllItems("clanes");
    this.asyncDataStatus_fetch();
  },
  computed: {
    ...mapState(["resultados", "clanes"]),
    resultadosLlave() {
      return this.resultados.find((res) => res.id === this.resultadoId);
    },
    nombreEquipoLocal() {
      const equipo = this.clanes.find(
        (clan) => clan.id === this.resultadosLlave.equipoLocal
      );
      return equipo.name;
    },
    nombreEquipoVisita() {
      const equipo = this.clanes.find(
        (clan) => clan.id === this.resultadosLlave.equipoVisita
      );
      return equipo.name;
    },
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
    getInitials(clan) {
      const iniciales = clan
        .split(" ")
        .map((n) => n[0])
        .join("");
      return iniciales;
    },
  },
};
</script>
