<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <button
      class="flex items-center justify-between w-full p-4 text-white bg-black"
      @click="expanded = !expanded"
    >
      <h1 class="text-2xl font-bold">Soldados</h1>
      <div>
        <SvgChevronDown class="w-6" v-if="!expanded" />
        <SvgChevronUp class="w-6" v-if="expanded" />
      </div>
    </button>

    <!-- main -->
    <!-- soldados existentes -->
    <div v-show="expanded">
      <ul class="flex flex-wrap p-4">
        <li v-for="soldado in soldados" :key="soldado.id" class="mb-2 mr-2">
          <button
            @click.stop="editar(soldado)"
            class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-yellow-50 hover:bg-yellow-100"
          >
            <span>{{ soldado.nick }}</span>
          </button>
        </li>
      </ul>

      <!-- nuevo soldado -->
      <div class="bg-gray-100">
        <!-- titulo -->
        <div v-if="editando" class="px-4 py-2 bg-gray-200">
          <h1 class="font-bold text-md">Actualizar soldado</h1>
        </div>
        <div v-if="!editando" class="px-4 py-2 bg-gray-200">
          <h1 class="font-bold text-md">Nuevo soldado</h1>
        </div>

        <!-- form -->
        <div class="p-4 space-y-2">
          <div class="grid grid-cols-3 gap-2">
            <label class="flex flex-col">
              <span>Nick</span>
              <input
                type="text"
                placeholder="Ej. Chernobyl"
                v-model="soldadoFormulario.nick"
              />
            </label>
            <label class="flex flex-col">
              <span>Equipo</span>
              <select v-model="soldadoFormulario.equipo">
                <option
                  :value="equipo.id"
                  v-for="equipo in equipos"
                  :key="equipo"
                >
                  {{ equipo.name }}
                </option>
                <option value="" selected="selected">( Sin equipo )</option>
              </select>
            </label>
            <label class="flex flex-col">
              <span>Regimiento</span>
              <select v-model="soldadoFormulario.regimiento">
                <option selected disabled>Selecciona un regimiento:</option>
                <option
                  :value="regimiento.id"
                  v-for="regimiento in regimientos"
                  :key="regimiento"
                >
                  {{ regimiento.name }}
                </option>
                <option value="">( Sin regimiento )</option>
              </select>
            </label>
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
              Actualizar soldado
            </button>
          </div>
          <button
            @click.stop="add"
            v-if="!editando"
            class="px-3 py-2 text-white bg-green-500 hover:bg-green-600"
          >
            Crear soldado
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
      soldadoFormulario: { nick: "", equipo: "", regimiento: "" },
      editando: false,
      expanded: false,
    };
  },
  computed: {
    ...mapState(["soldados", "equipos", "regimientos"]),
  },
  methods: {
    ...mapActions(["admin/crearSoldado", "admin/actualizarSoldado"]),
    async add() {
      await this["admin/crearSoldado"]({ item: this.soldadoFormulario });
      this.soldadoFormulario = {};
    },
    editar(soldado) {
      this.editando = true;
      this.soldadoFormulario.id = soldado.id || "";
      this.soldadoFormulario.nick = soldado.nick || "";
      this.soldadoFormulario.equipo = soldado.equipo || "";
      this.soldadoFormulario.regimiento = soldado.regimiento || "";
    },
    cancelarEdicion() {
      this.editando = false;
      this.soldadoFormulario = {};
    },
    async actualizar() {
      await this["admin/actualizarSoldado"](this.soldadoFormulario);
      this.cancelarEdicion();
    },
  },
};
</script>
