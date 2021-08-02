<template>
  <div>
    <!-- titulo pagina -->
    <div v-if="mapa">
      <titulo-pagina :texto="`Detalle Mapa ${mapa.name}`" />
    </div>

    <!-- mapas -->
    <div v-if="mapa" class="max-w-lg px-4 mx-auto my-12 space-y-6">
      <!-- nombre -->
      <div v-if="mapa.name">
        <p class="text-xl font-bold">Nombre</p>
        <p>{{ mapa.name }}</p>
      </div>

      <!-- ubicacion -->
      <div v-if="mapa.location">
        <p class="text-xl font-bold">Ubicacion</p>
        <p>{{ mapa.location }}</p>
      </div>

      <!-- tamaño -->
      <div v-if="mapa.size">
        <p class="text-xl font-bold">Tamaño</p>
        <p>{{ mapa.size }}</p>
      </div>
      <!-- descripcion -->
      <div v-if="mapa.description">
        <p class="text-xl font-bold">Descripcion</p>
        <p>{{ mapa.description }}</p>
      </div>
    </div>
    <div v-if="mapa" class="min-w-full mx-auto space-y-4">
      <!-- imagen del mapa -->
      <img v-if="mapa.imageUrlBig" :src="mapa.imageUrlBig" />
      <!-- imagen del layout -->
      <img
        class="min-w-full"
        v-if="mapa.mapImageLayoutUrl"
        :src="mapa.mapImageLayoutUrl"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { findById } from "@/helpers";
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";

export default {
  name: "DetalleMapa",
  components: {
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  props: {
    mapaId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["mapas"]),
    mapa() {
      return findById(this.mapas, this.mapaId);
    },
  },
  async created() {
    await this.fetchMapa({ id: this.mapaId });
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchMapa"]),
  },
};
</script>
