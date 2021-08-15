<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <div class="p-4 text-white bg-black">
      <h1 class="text-2xl font-bold">Equipos</h1>
    </div>

    <!-- main -->
    <!-- equipos existentes -->
    <ul class="flex flex-wrap p-4">
      <li v-for="equipo in equipos" :key="equipo.id" class="mb-2 mr-2">
        <button
          @click.stop="editar(equipo)"
          class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-blue-50 hover:bg-blue-100"
        >
          <span>{{ equipo.name }}</span>
        </button>
      </li>
    </ul>

    <!-- nuevo equipo -->
    <div class="bg-gray-100">
      <!-- titulo -->
      <div v-if="editando" class="px-4 py-2 bg-gray-200">
        <h1 class="font-bold text-md">Actualizar equipo</h1>
      </div>
      <div v-if="!editando" class="px-4 py-2 bg-gray-200">
        <h1 class="font-bold text-md">Nuevo equipo</h1>
      </div>

      <!-- form -->
      <div class="p-4 space-y-2">
        <div class="grid grid-cols-3 gap-2">
          <label class="flex flex-col">
            <span>Nombre</span>
            <input
              type="text"
              placeholder="Ej. Los del Gulag"
              v-model="equipoFormulario.name"
            />
          </label>
          <label class="flex flex-col">
            <span>Iniciales</span>
            <input
              type="text"
              placeholder="Ej. LDG"
              v-model="equipoFormulario.initials"
            />
          </label>
        </div>
        <button type="submit" class="px-3 py-2 text-white bg-green-500">
          Crear equipo
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
      equipoFormulario: {},
      editando: false,
    };
  },
  computed: {
    ...mapState(["equipos", "soldados"]),
    soldadosEquipoEnEdicion() {
      return this.soldados.filter((s) => s.equipo === this.equipoFormulario.id);
    },
    soldadosLibres() {
      return this.soldados.filter((s) => s.equipo === null);
    },
  },
  methods: {
    ...mapActions(["admin/crearEquipo", "admin/actualizarEquipo"]),
    async add() {
      await this["admin/crearEquipo"]({ item: this.equipoFormulario });
      this.equipoFormulario = {};
    },
    editar(equipo) {
      this.editando = true;
      this.equipoFormulario = {};
      this.equipoFormulario.id = equipo.id || "";
      this.equipoFormulario.name = equipo.name || "";
      this.equipoFormulario.initials = equipo.initials || "";
      this.equipoFormulario.captain = equipo.captain || "";
    },
    cancelarEdicion() {
      this.editando = false;
      this.equipoFormulario = {};
    },
    async actualizar(equipo) {
      await this["admin/actualizarEquipo"](equipo);
      this.cancelarEdicion();
    },
  },
};
</script>
