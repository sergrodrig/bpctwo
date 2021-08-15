<template>
  <div class="border-4 border-black">
    <!-- titulo -->
    <div class="p-4 text-white bg-black">
      <h1 class="text-2xl font-bold">Soldados</h1>
    </div>

    <!-- lista soldados -->
    <div class="p-4 space-y-12">
      <!-- soldados existentes -->
      <ul class="flex flex-wrap">
        <li v-for="soldado in soldados" :key="soldado.id" class="mb-2 mr-2">
          <button
            @click.stop="editarSoldado(soldado)"
            class="flex items-center px-3 py-2 space-x-4 text-black border border-black rounded-sm  bg-yellow-50 hover:bg-yellow-100"
          >
            <span>{{ soldado.nick }}</span>
          </button>
        </li>
      </ul>

      <!-- edicion -->
      <div v-if="editando" class="space-y-2">
        <div class="grid grid-cols-3 space-x-2">
          <label class="flex flex-col">
            <span>Nick</span>
            <input
              type="text"
              placeholder="nick"
              v-model="soldadoEnEdicion.nick"
            />
          </label>
          <label class="flex flex-col">
            <span>Equipo</span>
            <select v-model="soldadoEnEdicion.equipo">
              <option selected="selected" disabled>
                Selecciona un equipo:
              </option>
              <option
                :value="equipo.id"
                v-for="equipo in equipos"
                :key="equipo"
              >
                {{ equipo.name }}
              </option>
            </select>
          </label>
          <label class="flex flex-col">
            <span>Regimiento</span>
            <select v-model="soldadoEnEdicion.regimiento">
              <option selected="selected" disabled>
                Selecciona un regimiento:
              </option>
              <option
                :value="regimiento.id"
                v-for="regimiento in regimientos"
                :key="regimiento"
              >
                {{ regimiento.name }}
              </option>
            </select>
          </label>
        </div>
        <div class="flex space-x-2">
          <button
            @click.stop="cancelarEdicion"
            class="px-3 py-2 text-white bg-red-500 rounded-sm hover:bg-red-600"
          >
            Cancelar
          </button>
          <button
            @click.stop="actualizar(soldadoEnEdicion)"
            class="px-3 py-2 text-white bg-green-500 rounded-sm  hover:bg-green-600"
          >
            Guardar
          </button>
        </div>
      </div>

      <!-- nuevo soldado -->
      <div class="space-y-2">
        <p class="font-bold">Nuevo soldado</p>
        <form class="flex space-x-2" @submit.prevent="add">
          <input
            type="text"
            placeholder="nombre"
            v-model="nuevoSoldadoForm.nick"
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
      nuevoSoldadoForm: {},
      editando: false,
      soldadoEnEdicion: {},
    };
  },
  computed: {
    ...mapState(["soldados", "equipos", "regimientos"]),
  },
  methods: {
    ...mapActions(["admin/crearSoldado", "admin/actualizarSoldado"]),
    async add() {
      await this["admin/crearSoldado"]({ item: this.nuevoSoldadoForm });
      this.nuevoSoldadoForm = {};
    },
    editarSoldado(soldado) {
      this.editando = true;
      this.soldadoEnEdicion = {};
      this.soldadoEnEdicion.id = soldado.id;
      this.soldadoEnEdicion.nick = soldado.nick;
      this.soldadoEnEdicion.equipo = soldado.equipo;
      this.soldadoEnEdicion.regimiento = soldado.regimiento;
    },
    cancelarEdicion() {
      this.editando = false;
      this.soldadoEnEdicion = {};
    },
    actualizar(soldado) {
      this["admin/actualizarSoldado"](soldado);
      this.cancelarEdicion();
    },
  },
};
</script>
