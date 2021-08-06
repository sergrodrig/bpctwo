<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Mapas" />

    <!-- mapas -->
    <div class="max-w-full p-4 mx-auto">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="mapa in mapas" :key="mapa.id" class="mx-auto">
          <div class="relative w-full border-8 border-black">
            <p
              class="absolute w-full p-5 font-mono text-xl font-semibold text-center text-white uppercase  bg-gradient-to-b from-black to-transparent"
            >
              {{ mapa.name }}
            </p>
            <router-link
              :to="{ name: 'MapaDetail', params: { mapaId: mapa.id } }"
            >
              <img :src="mapa.imageUrlSmall" :alt="`${mapa.name} map image`" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";
import { mapActions } from "vuex";
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Mapas",
  components: {
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  computed: {
    mapas() {
      const mapasMedianos = this.$store.state.mapas.filter(
        (mapa) => mapa.size === "Medium"
      );
      console.log(mapasMedianos);
      return mapasMedianos;
    },
  },
  async created() {
    await this.fetchAllItems("mapas");
    this.asyncDataStatus_fetch();
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
