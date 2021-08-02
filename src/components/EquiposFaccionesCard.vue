<template>
  <div>
    <div class="flex flex-col hover:shadow-lg lg:flex-row">
      <!-- nombre faccion y avatar -->
      <div class="flex flex-row items-center p-4 bg-black lg:flex-col lg:w-96">
        <!-- avatar -->
        <div class="w-12 h-12 mx-4 bg-white lg:w-24 lg:h-24 lg:my-4">
          <img :src="`/images${faccionEscudo}`" alt="" />
        </div>

        <!-- nombre faccion -->
        <div class="text-white">
          {{ faccion }}
        </div>
      </div>

      <!-- lista soldados -->
      <div class="w-full border-4 border-black">
        <router-link
          v-for="(soldado, index) in soldados"
          :key="soldado.id"
          :to="{ name: 'Equipos' }"
          tag="a"
          class="
            flex
            border-b border-gray-200
            cursor-pointer
            hover:bg-yellow-300
          "
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
              getClanForSoldier(soldado) === '[BP.C]'
                ? 'text-green-500'
                : 'text-red-500'
            "
          >
            {{ getClanForSoldier(soldado) }}
          </div>

          <!-- nick -->
          <div class="flex items-center justify-start w-full pl-4 text-left">
            <span
              :class="
                faccionLider === soldado.id ? 'font-semibold' : 'font-normal'
              "
              >{{ soldado.nick }}</span
            >
            <span v-if="faccionLider === soldado.id" class="pl-2 text-2xl"
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
    faccion: {
      type: String,
      default: "",
    },
    faccionId: {
      required: false,
      type: String,
      default: "",
    },
    faccionEscudo: {
      required: false,
      type: String,
      default: "",
    },
    faccionLider: {
      required: false,
      type: String,
      default: "",
    },
  },
  methods: {
    getClanForSoldier(soldado) {
      const clan = findById(this.$store.state.clanes, soldado.clan);
      if (clan) return `[${clan.name}]`;
      return "";
    },
  },
};
</script>
