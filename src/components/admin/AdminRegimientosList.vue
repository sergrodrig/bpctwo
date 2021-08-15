<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <div class="p-4 text-white bg-black">
      <h1 class="text-2xl font-bold">Regimientos</h1>
    </div>

    <!-- main -->
    <!-- regimientos existentes -->
    <ul class="flex flex-wrap p-4">
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
    <div class="bg-gray-100">
      <!-- titulo -->
      <div v-if="editando" class="px-4 py-2 bg-gray-200">
        <h1 class="font-bold text-md">Actualizar regimiento</h1>
      </div>
      <div v-if="!editando" class="px-4 py-2 bg-gray-200">
        <h1 class="font-bold text-md">Nuevo regimiento</h1>
      </div>

      <!-- form -->
      <div class="p-4 space-y-2">
        <div class="grid grid-cols-3 gap-2">
          <label class="flex flex-col">
            <span>Nombre</span>
            <input
              type="text"
              placeholder="Ej. BPC"
              v-model="nuevoRegimientoForm.name"
            />
          </label>
        </div>
        <button type="submit" class="px-3 py-2 text-white bg-green-500">
          Crear regimiento
        </button>
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
