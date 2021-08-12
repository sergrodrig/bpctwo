<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Admin" />

    <div
      class="max-w-5xl p-4 mx-auto space-y-4  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <!-- resultados -->
      <div class="p-4 border border-black">
        <h1 class="text-2xl font-bold">Ingresar resultado</h1>
        <div>
          <select v-model="encuentroSeleccionado">
            <option
              v-for="encuentro in encuentros"
              :key="encuentro"
              :value="encuentro.id"
            >
              {{ encuentro }}
            </option>
          </select>
          <p>{{ encuentroSeleccionado }}</p>
        </div>
      </div>

      <!-- soldados -->
      <div class="p-4 border border-black">
        <h1 class="text-2xl font-bold">Soldados</h1>
        <div v-for="soldado in soldados" :key="soldado.id">
          {{ soldado.nick }}
        </div>
      </div>

      <!-- equipos -->
      <div class="p-4 border border-black">
        <h1 class="text-2xl font-bold">Equipos</h1>
        <div v-for="equipo in equipos" :key="equipo.id">
          {{ equipo.name }}
        </div>
      </div>

      <!-- regimientos -->
      <div class="p-4 border border-black">
        <h1 class="text-2xl font-bold">Regimientos</h1>
        <div v-for="regimiento in regimientos" :key="regimiento.id">
          {{ regimiento.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";

export default {
  components: { TituloPagina },
  emits: ["ready"],
  mixins: [asyncDataStatus],
  data() {
    return {
      encuentroSeleccionado: null,
    };
  },
  computed: {
    ...mapState([
      "equipos",
      "regimientos",
      "soldados",
      "encuentros",
      "resultados",
    ]),
  },
  async created() {
    await this.fetchAllItems("equipos");
    await this.fetchAllItems("regimientos");
    await this.fetchAllItems("soldados");
    await this.fetchAllItems("encuentros");
    await this.fetchAllItems("resultados");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
    encuentroDetalle(id) {
      return this.encuentros.find((e) => e.id === id) || {};
    },
  },
};
</script>

<style></style>
