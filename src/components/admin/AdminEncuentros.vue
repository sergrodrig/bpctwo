<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <button
      class="flex items-center justify-between w-full p-4 text-white bg-black"
      @click="expanded = !expanded"
    >
      <h1 class="text-2xl font-bold">Encuentros</h1>
      <div>
        <SvgChevronDown class="w-6" v-if="!expanded" />
        <SvgChevronUp class="w-6" v-if="expanded" />
      </div>
    </button>

    <!-- main -->
    <!-- encuentros -->
    <div v-show="expanded">
      <ul class="flex flex-wrap p-4">
        <li
          v-for="encuentro in encuentros"
          :key="encuentro.id"
          class="w-full mb-2 mr-2"
        >
          <div
            class="flex flex-col space-x-4 text-black border border-black rounded-sm "
          >
            <button
              class="grid justify-between grid-cols-3 p-2"
              :class="encuentro.fecha % 2 === 0 ? 'bg-gray-100' : 'bg-gray-300'"
            >
              <span class="text-left"
                >Fecha {{ encuentro.fecha }} ({{ encuentro.numero }})</span
              >
              <span class="grid grid-cols-3 col-span-2">
                <span>{{ equipoDetalle(encuentro.local)?.name }}</span>
                <span>vs</span>
                <span>{{ equipoDetalle(encuentro.visita)?.name }}</span>
              </span>
            </button>
            <div class="hidden">
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import SvgChevronDown from "@/components/SvgChevronDown";
import SvgChevronUp from "@/components/SvgChevronUp";

export default {
  components: {
    SvgChevronDown,
    SvgChevronUp,
  },
  data() {
    return {
      encuentroSeleccionado: null,
      expanded: true,
    };
  },
  computed: {
    ...mapState([
      "equipos",
      "encuentros",
      "resultados",
      "authId",
      "users",
      "soldados",
    ]),
    detalleMiPerfil() {
      return this.users.find((u) => u.id === this.authId);
    },
  },
  created() {},
  methods: {
    ...mapActions(["updateItem", "fetchAllItems"]),
    equipoDetalle(id) {
      return this.equipos.find((e) => e.id === id);
    },
  },
};
</script>

<style></style>
