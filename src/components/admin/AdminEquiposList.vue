<template>
  <div class="border-4 border-black">
    <!-- titulo -->

    <div class="p-4 text-white bg-black">
      <h1 class="text-2xl font-bold">Equipos</h1>
    </div>

    <!-- lista equipos -->
    <div class="p-4 space-y-12">
      <!-- equipos existentes -->
      <ul class="flex flex-wrap">
        <li v-for="equipo in equipos" :key="equipo.id" class="mb-2 mr-2">
          <button
            class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-blue-50 hover:bg-blue-100"
          >
            <span>{{ equipo.name }}</span>
          </button>
        </li>
      </ul>

      <!-- nuevo equipo -->
      <div class="mt-8 space-y-2">
        <p class="font-bold">Nuevo Equipo</p>
        <form class="flex space-x-2" @submit.prevent="add">
          <input
            type="text"
            placeholder="nombre"
            v-model="nuevoEquipoForm.name"
          />
          <button type="submit" class="px-2 py-1 text-white bg-green-500">
            Guardar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import SvgTrash from "@/components/SvgTrash";

export default {
  components: { SvgTrash },
  data() {
    return {
      nuevoEquipoForm: {},
    };
  },
  computed: {
    ...mapState(["equipos"]),
  },
  methods: {
    ...mapActions(["admin/crearEquipo"]),
    equipoGetter(id) {
      return this.$store.getters.equipo(id);
    },
    async add() {
      await this["admin/crearEquipo"]({ item: this.nuevoEquipoForm });
      this.nuevoEquipoForm = {};
    },
  },
};
</script>
