<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <button
      class="flex items-center justify-between w-full p-4 text-white bg-black"
      @click="expanded = !expanded"
    >
      <h1 class="text-2xl font-bold">Equipos</h1>
      <div>
        <SvgChevronDown class="w-6" v-if="!expanded" />
        <SvgChevronUp class="w-6" v-if="expanded" />
      </div>
    </button>

    <!-- main -->
    <!-- equipos existentes -->
    <div v-show="expanded">
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
            <div>
              <label v-if="editando" class="flex flex-col">
                <span>Capitan</span>
                <select v-model="equipoFormulario.captain">
                  <option selected disabled>Selecciona un soldado:</option>
                  <option
                    :value="soldadoEquipo.id"
                    v-for="soldadoEquipo in soldadosEquipoEnEdicion"
                    :key="soldadoEquipo"
                  >
                    {{ soldadoEquipo.nick }}
                  </option>
                  <option value="">( Sin capitan )</option>
                </select>
              </label>
              <label v-if="!editando" class="flex flex-col">
                <span>Capitan</span>
                <select v-model="equipoFormulario.captain">
                  <option selected disabled>Selecciona un soldado:</option>
                  <option
                    :value="soldadoLibre.id"
                    v-for="soldadoLibre in soldadosLibres"
                    :key="soldadoLibre"
                  >
                    {{ soldadoLibre.nick }}
                  </option>
                  <option value="">( Sin capitan )</option>
                </select>
              </label>
            </div>
          </div>
          <div class="space-x-2" v-if="editando">
            <button
              @click="cancelarEdicion"
              class="px-3 py-2 text-white bg-red-500 hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              @click.stop="actualizar"
              class="px-3 py-2 text-white bg-green-500 hover:bg-green-600"
            >
              Actualizar equipo
            </button>
          </div>
          <button
            @click.stop="add"
            v-if="!editando"
            class="px-3 py-2 text-white bg-green-500 hover:bg-green-600"
          >
            Crear equipo
          </button>
        </div>
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
      equipoFormulario: { name: "", initials: "", captain: "" },
      editando: false,
      expanded: false,
    };
  },
  computed: {
    ...mapState(["equipos", "soldados"]),
    soldadosEquipoEnEdicion() {
      return this.soldados.filter((s) => s.equipo === this.equipoFormulario.id);
    },
    soldadosLibres() {
      const capitanes = this.equipos.map((e) => e.captain);
      return this.soldados.filter((s) => !capitanes.includes(s.id));
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
      this.equipoFormulario.id = equipo.id || "";
      this.equipoFormulario.name = equipo.name || "";
      this.equipoFormulario.initials = equipo.initials || "";
      this.equipoFormulario.captain = equipo.captain || "";
    },
    cancelarEdicion() {
      this.editando = false;
      this.equipoFormulario = {};
    },
    async actualizar() {
      await this["admin/actualizarEquipo"](this.equipoFormulario);
      this.cancelarEdicion();
    },
  },
};
</script>
