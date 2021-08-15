<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <button
      class="flex items-center justify-between w-full p-4 text-white bg-black"
      @click="expanded = !expanded"
    >
      <h1 class="text-2xl font-bold">Regimientos</h1>
      <div>
        <SvgChevronDown class="w-6" v-if="!expanded" />
        <SvgChevronUp class="w-6" v-if="expanded" />
      </div>
    </button>

    <!-- main -->
    <!-- regimientos existentes -->
    <div v-show="expanded">
      <ul class="flex flex-wrap p-4">
        <li
          v-for="regimiento in regimientos"
          :key="regimiento.id"
          class="mb-2 mr-2"
        >
          <div
            class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-green-50"
          >
            <span>{{ regimiento.name }}</span>
          </div>
        </li>
      </ul>

      <!-- nuevo regimiento -->
      <div class="bg-gray-100">
        <!-- titulo -->
        <div class="px-4 py-2 bg-gray-200">
          <h1 class="font-bold text-md">Nuevo regimiento</h1>
        </div>

        <!-- form -->
        <form @submit.prevent="add" class="p-4 space-y-2">
          <div class="grid grid-cols-3 gap-2">
            <label class="flex flex-col">
              <span>Nombre</span>
              <input
                type="text"
                placeholder="Ej. BPC"
                v-model="regimientoFormulario.name"
              />
            </label>
          </div>
          <button type="submit" class="px-3 py-2 text-white bg-green-500">
            Crear regimiento
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import SvgTrash from "@/components/SvgTrash";
import SvgChevronDown from "@/components/SvgChevronDown";
import SvgChevronUp from "@/components/SvgChevronUp";

export default {
  components: { SvgTrash, SvgChevronDown, SvgChevronUp },
  data() {
    return {
      regimientoFormulario: { name: "" },
      expanded: false,
    };
  },
  computed: {
    ...mapState(["regimientos"]),
  },
  methods: {
    ...mapActions(["admin/crearRegimiento"]),
    async add() {
      await this["admin/crearRegimiento"]({ item: this.regimientoFormulario });
      this.regimientoFormulario = {};
    },
  },
};
</script>
