<template>
  <div class="divide-y-4 divide-black">
    <!-- fecha x -->
    <div v-for="(fecha, index) in encuentros.length / 4" :key="fecha">
      <div class="mb-8 border-2 border-black">
        <h1 class="text-center text-white bg-black">Fecha {{ index + 1 }}</h1>
        <!-- duelo x -->
        <router-link
          v-for="encuentro in encuentros"
          :key="encuentro"
          :to="{ name: 'Resultados' }"
        >
          <div
            v-if="index + 1 === encuentro.fecha"
            class="grid grid-cols-12 text-center divide-x-2 divide-black"
          >
            <div class="col-span-4">{{ encuentro.localNombre }}</div>
            <div>0</div>
            <div class="col-span-2">vs</div>
            <div>0</div>
            <div class="col-span-4">{{ encuentro.visitaNombre }}</div>
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
    ...mapState(["encuentros", "equipos"]),
  },
  methods: {
    nombreEquipo(id) {
      const { name } = this.equipos.find((e) => {
        e.id == id;
      });
      return name;
      // return "";
    },
  },
};
</script>
