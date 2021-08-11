<template>
  <div>
    <div class="flex flex-col hover:shadow-lg lg:flex-row">
      <!-- nombre clan y avatar -->
      <div class="flex flex-row items-center p-4 bg-black lg:flex-col lg:w-96">
        <!-- avatar -->
        <div class="w-12 h-12 mx-4 lg:w-24 lg:h-24 lg:my-4">
          <!-- <img :src="`/images${clanEscudo}`" alt="" /> -->
          <div
            class="flex items-center justify-center min-h-full font-mono text-2xl text-white bg-gray-700 rounded-full "
          >
            {{ getInitials(clan) }}
          </div>
        </div>

        <!-- nombre clan -->
        <div class="text-white">
          {{ clan }}
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

          <!-- clan -->
          <div
            class="flex items-center justify-center w-32 font-semibold"
            :class="
              getRegimientoForSoldier(soldado) === '[BP.C]'
                ? 'text-green-500'
                : 'text-red-500'
            "
          >
            {{ getRegimientoForSoldier(soldado) }}
          </div>

          <!-- nick -->
          <div class="flex items-center justify-start w-full pl-4 text-left">
            <span
              :class="
                clanLider === soldado.id ? 'font-semibold' : 'font-normal'
              "
            >
              {{ soldado.nick }}
            </span>
            <span v-if="clanLider === soldado.id" class="pl-2 text-2xl"
              >👨🏻‍✈️</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { findById } from "@/helpers";

export default {
  props: {
    soldados: {
      required: true,
      type: Array,
    },
    clan: {
      type: String,
      default: "",
    },
    clanId: {
      required: false,
      type: String,
      default: "",
    },
    clanEscudo: {
      required: false,
      type: String,
      default: "",
    },
    clanLider: {
      required: false,
      type: String,
      default: "",
    },
  },
  methods: {
    getRegimientoForSoldier(soldado) {
      const regimiento = findById(
        this.$store.state.regimientos,
        soldado.regimiento
      );
      if (regimiento) return `[${regimiento.name}]`;
      return "";
    },
    getInitials(clan) {
      const iniciales = clan
        .split(" ")
        .map((n) => n[0])
        .join("");
      return iniciales;
    },
  },
};
</script>
