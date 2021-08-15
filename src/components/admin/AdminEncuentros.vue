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
      <ul class="flex flex-wrap divide-y-2 divide-white">
        <li
          v-for="encuentro in encuentros"
          :key="encuentro.id"
          class="flex flex-col w-full"
        >
          <!-- encuentro -->
          <button
            @click="setEncuentroId(encuentro.numero)"
            class="flex grid flex-col items-center justify-between grid-cols-3 p-2 space-x-4 text-black "
            :class="encuentro.fecha % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'"
          >
            <div class="flex flex-col text-left sm:flex-row sm:space-x-2">
              <span> Fecha {{ encuentro.fecha }} </span>
              <span> [ #{{ encuentro.numero }} ]</span>
            </div>
            <span class="grid grid-cols-1 col-span-2 sm:grid-cols-3">
              <span>{{ equipoDetalle(encuentro.local)?.name }}</span>
              <span>vs</span>
              <span>{{ equipoDetalle(encuentro.visita)?.name }}</span>
            </span>
          </button>

          <!-- encuentro expanded: resultados -->
          <div
            v-show="encuentroExpanded === encuentro.numero"
            class="p-4 space-y-2"
          >
            <div
              class="grid grid-cols-3 space-x-2"
              v-for="mapa in 6"
              :key="mapa"
            >
              <!-- mapa select -->
              <select
                v-model="
                  resultadosEncuentroForm.resultados[`mapa${mapa}`].nombreMapa
                "
              >
                <option value="" selected="selected">( Walkover )</option>
                <option :value="mapa.id" v-for="mapa in mapas" :key="mapa">
                  {{ mapa.name }}
                </option>
              </select>

              <!-- puntajes -->
              <input
                type="text"
                placeholder="resultado local"
                v-model="
                  resultadosEncuentroForm.resultados[`mapa${mapa}`].local
                "
              />
              <input
                type="text"
                placeholder="resultado visita"
                v-model="
                  resultadosEncuentroForm.resultados[`mapa${mapa}`].visita
                "
              />
            </div>

            <!-- botones -->
            <div class="space-x-2">
              <button
                @click.stop="cancelarEdicion"
                class="px-3 py-2 text-white bg-red-500 hover:bg-red-600"
              >
                Cancelar
              </button>
              <button
                @click.stop="save"
                class="px-3 py-2 text-white bg-green-500 hover:bg-green-600"
              >
                Guardar resultados
              </button>
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
      encuentroExpanded: 0,
      resultadosEncuentroForm: {
        encuentro: 0,
        resultados: {
          mapa1: { nombreMapa: "", local: 0, visita: 0 },
          mapa2: { nombreMapa: "", local: 0, visita: 0 },
          mapa3: { nombreMapa: "", local: 0, visita: 0 },
          mapa4: { nombreMapa: "", local: 0, visita: 0 },
          mapa5: { nombreMapa: "", local: 0, visita: 0 },
          mapa6: { nombreMapa: "", local: 0, visita: 0 },
        },
      },
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
      "mapas",
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
    save() {
      // await this["admin/crearSoldado"]({ item: this.soldadoFormulario });
      console.log(this.resultadosEncuentroForm);
    },
    cancelarEdicion() {
      this.encuentroExpanded = 0;
      this.limpiarFormulario();
    },
    setEncuentroId(id) {
      this.encuentroExpanded = id;
      this.limpiarFormulario();
    },
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
