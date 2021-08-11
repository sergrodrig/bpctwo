<template>
  <div class="border-4 border-black divide-y-4 divide-black">
    <div v-if="!loading">
      <!-- fecha x -->
      <div v-for="fecha in fechas" :key="fecha.id">
        <h1 class="text-center text-white bg-black">
          Fecha {{ fecha.numero }}
        </h1>
        <!-- duelo x -->
        <router-link
          v-for="encuentro in fecha.encuentros"
          :key="encuentro"
          class="grid grid-cols-12 text-center divide-x-2 divide-black"
          :to="{
            name: 'ResultadosDetalle',
            params: { resultadoId: encuentro.numero },
          }"
        >
          {{ nombreClan(encuentro.local) }}
          <div class="col-span-4">{{ nombreClan(encuentro.local) }}</div>
          <div>0</div>
          <div class="col-span-2">vs</div>
          <div>0</div>
          <div class="col-span-4">{{ nombreClan(encuentro.visita) }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(["fechas", "clanes"]),
  },
  async created() {
    this.loading = true;
    await this.fetchAllItems("fechas");
    await this.fetchAllItems("clanes");
    this.loading = false;
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
    nombreClan(id) {
      const clan = this.clanes.find((c) => c.id === id);
      const nombre = clan.nombre;
      return nombre;
    },
  },
};
</script>
