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
          <div
            class="flex items-center px-3 py-2 space-x-4 text-black bg-green-100 border border-black  rounded-xl"
          >
            <span>{{ regimiento.name }}</span>
            <button>
              <SvgTrash class="w-6 p-1 text-white bg-red-500 rounded-full" />
            </button>
          </div>
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
