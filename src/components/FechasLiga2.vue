<template>
  <div class="divide-y-4 divide-black">
    <div v-if="!loading">
      <!-- fecha x -->
      <div
        v-for="(fecha, index) in encuentros.length / 4"
        :key="fecha.id"
        class="mb-8 border-4 border-black"
      >
        <h1 class="py-2 text-center text-white bg-black">
          Fecha {{ index + 1 }}
        </h1>
        <!-- duelo x -->
        <div v-for="encuentro in encuentros" :key="encuentro">
          <router-link
            v-if="encuentro.fecha === index + 1"
            is="span"
            class="grid grid-cols-12 text-center divide-x-2 divide-black"
            :to="{ name: 'Resultados' }"
          >
            <div class="col-span-4">{{ encuentro.localNombre }}</div>
            <div>{{ resultadoEncuentro(encuentro.numero).local }}</div>
            <div class="col-span-2">vs</div>
            <div>{{ resultadoEncuentro(encuentro.numero).visita }}</div>
            <div class="col-span-4">{{ encuentro.visitaNombre }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    encuentros: {
      type: Array,
      required: true,
      defaul: () => [],
    },
    resultados: {
      type: Array,
      required: true,
      defaul: () => [],
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    nombreClan(id) {
      const clan = this.clanes.find((c) => c.id === id);
      const nombre = clan.nombre;
      return nombre;
    },

    // CUANDO SE ACTUALICE UN RESULTADO, UNA FUNCION DEBE HACER ESTE MISMO CALCULO
    // Y AGREGAR UNA PROPIEDAD AL DOCUMENTO CON EL PUNTAJE DE CADA EQUIPO
    // Y LA SUMA DE LAS RONDAS
    resultadoEncuentro(encuentro) {
      const resultado = this.resultados.find((r) => r.encuentro == encuentro);
      const partidas = resultado.partidas;
      const puntosLocal = partidas.filter((p) => p.local === 6).length;
      const puntosVisita = partidas.filter((p) => p.visita === 6).length;
      return { local: puntosLocal, visita: puntosVisita };
    },
  },
};
</script>
