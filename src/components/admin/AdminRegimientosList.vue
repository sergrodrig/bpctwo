<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <div class="p-4 text-white bg-black">
      <h1 class="text-2xl font-bold">Regimientos</h1>
    </div>

    <!-- lista regimientos -->
    <div class="p-4 space-y-12">
      <!-- regimientos existentes -->
      <ul class="flex flex-wrap">
        <li
          v-for="regimiento in regimientos"
          :key="regimiento.id"
          class="mb-2 mr-2"
        >
          <button
            class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-green-50 hover:bg-green-100"
          >
            <span>{{ regimiento.name }}</span>
          </button>
        </li>
      </ul>

      <!-- nuevo regimiento -->
      <div class="space-y-2">
        <p class="font-bold">Nuevo regimiento</p>
        <form class="flex space-x-2" @submit.prevent="add">
          <input
            type="text"
            placeholder="nombre"
            v-model="nuevoRegimientoForm.name"
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
      nuevoRegimientoForm: {},
    };
  },
  computed: {
    ...mapState(["regimientos"]),
  },
  methods: {
    ...mapActions(["admin/crearRegimiento"]),
    async add() {
      await this["admin/crearRegimiento"]({ item: this.nuevoRegimientoForm });
      this.nuevoRegimientoForm = {};
    },
  },
};
</script>
