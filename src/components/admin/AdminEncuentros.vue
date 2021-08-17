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

    <!-- encuentros -->
    <AdminEncuentrosEncuentro v-if="expanded" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import AdminEncuentrosEncuentro from "@/components/admin/AdminEncuentrosEncuentro";

import SvgChevronDown from "@/components/SvgChevronDown";
import SvgChevronUp from "@/components/SvgChevronUp";

export default {
  components: {
    SvgChevronDown,
    SvgChevronUp,
    AdminEncuentrosEncuentro,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    ...mapActions(["updateItem"]),
    limpiarFormulario() {
      Object.values(this.resultadosEncuentroForm.resultados).forEach((mapa) => {
        mapa.nombreMapa = "";
        mapa.local = 0;
        mapa.visita = 0;
      });
    },
  },
};
</script>
