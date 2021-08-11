<template>
  <div>
    <div class="flex flex-col hover:shadow-lg lg:flex-row">
      <!-- nombre equipo y avatar -->
      <div class="flex flex-row items-center p-4 bg-black lg:flex-col lg:w-96">
        <!-- avatar -->
        <div class="w-12 h-12 mx-4 lg:w-24 lg:h-24 lg:my-4">
          <!-- <img :src="`/images${equipoEscudo}`" alt="" /> -->
          <div
            class="flex items-center justify-center min-h-full font-mono text-2xl text-white bg-gray-700 rounded-full "
          >
            {{ obtenerInicialesEquipo(equipo) }}
          </div>
        </div>

        <!-- nombre equipo -->
        <div class="text-white">
          {{ equipo }}
        </div>
      </div>

      <!-- lista soldados -->
      <div class="w-full border-4 border-black">
        <router-link
          v-for="(soldado, index) in soldados"
          :key="soldado.id"
          :to="{ name: 'Equipos' }"
          tag="a"
          class="flex border-b border-gray-200 cursor-pointer  hover:bg-yellow-300"
        >
          <!-- numero -->
          <div
            class="flex items-center justify-center w-8 h-8 py-5 pl-4 font-bold"
          >
            {{ index + 1 }}
          </div>

          <!-- equipo -->
          <div
            class="flex items-center justify-center w-32 font-semibold"
            :class="
              obtenerRegimientoDelSoldado(soldado) === '[BP.C]'
                ? 'text-green-500'
                : 'text-red-500'
            "
          >
            {{ obtenerRegimientoDelSoldado(soldado) }}
          </div>

          <!-- nick -->
          <div class="flex items-center justify-start w-full pl-4 text-left">
            <span
              :class="
                equipoLider === soldado.id ? 'font-semibold' : 'font-normal'
              "
            >
              {{ soldado.nick }}
            </span>
            <span v-if="equipoLider === soldado.id" class="pl-2 text-2xl"
              >👨🏻‍✈️</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findById } from "@/helpers";

export default {
  props: {
    soldados: {
      required: true,
      type: Array,
    },
    equipo: {
      type: String,
      default: "",
    },
    equipoId: {
      required: false,
      type: String,
      default: "",
    },
    equipoLider: {
      required: false,
      type: String,
      default: "",
    },
    equipoEscudo: {
      required: false,
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["regimientos"]),
  },
  methods: {
    obtenerRegimientoDelSoldado(soldado) {
      const regimiento = findById(this.regimientos, soldado.regimiento);
      if (regimiento) return `[${regimiento.name}]`;
      return "";
    },
    obtenerInicialesEquipo(equipo) {
      const iniciales = equipo
        .split(" ")
        .map((n) => n[0])
        .join("");
      return iniciales;
    },
  },
};
</script>
