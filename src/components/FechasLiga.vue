<template>
  <div class="divide-y-4 divide-black">
    <!-- fecha x -->
    <div v-for="(fecha, index) in encuentros.length / 4" :key="fecha">
      <div class="mb-8 border-2 border-black">
        <h1 class="text-center text-white bg-black">Fecha {{ index + 1 }}</h1>
        <!-- duelo x -->
        <!-- <router-link
          v-for="encuentro in encuentros"
          :key="encuentro"
          :to="{
            name: 'ResultadosDetalle',
            params: { encuentroId: encuentro.numero },
          }"
        >
          <div
            v-if="index + 1 === encuentro.fecha"
            class="grid grid-cols-12 text-center divide-x-2 divide-black"
          >
            <div class="col-span-4">{{ encuentro.localNombre }}</div>
            <div>{{ resultadosDetalle(encuentro.numero).local }}</div>
            <div class="col-span-2">vs</div>
            <div>{{ resultadosDetalle(encuentro.numero).visita }}</div>
            <div class="col-span-4">{{ encuentro.visitaNombre }}</div>
          </div>
        </router-link> -->
        <router-link
          v-for="resultado in resultados"
          :key="resultado"
          :to="{
            name: 'ResultadosDetalle',
            params: { encuentroId: resultado.encuentro },
          }"
        >
          <div
            v-if="index + 1 === resultado.fecha"
            class="grid grid-cols-12 text-center divide-x-2 divide-black"
          >
            <div class="col-span-4">
              {{ nombreEquipo(resultado.equipoLocal) }}
            </div>
            <div>{{ resultado.mapasLocal }}</div>
            <div class="col-span-2">vs</div>
            <div>{{ resultado.mapasVisita }}</div>
            <div class="col-span-4">
              {{ nombreEquipo(resultado.equipoVisita) }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(["encuentros", "equipos", "resultados"]),
  },
  methods: {
    nombreEquipo(id) {
      return this.equipos.find((e) => e.id === id).name;
    },
    resultadosDetalle(encuentroId) {
      const resultados =
        this.resultados.find((r) => r.encuentro == encuentroId) || {};
      if (resultados) {
        return {
          local: resultados.mapasLocal || 0,
          visita: resultados.mapasVisita || 0,
        };
      } else {
        return { local: 0, visita: 0 };
      }
    },
  },
};
</script>
