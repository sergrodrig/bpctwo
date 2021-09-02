<template>
  <div>
    <!-- titulo -->
    <div class="py-3 bg-black border-4 border-black">
      <p class="w-full text-xl font-semibold text-center text-white">
        Tabla de posiciones
      </p>
    </div>
    <!-- resultados -->
    <div class="w-full border-4 border-black divide-y-2 divide-black">
      <div
        class="grid grid-cols-12 px-2 py-2 text-sm text-white bg-black border-t border-gray-600 "
      >
        <!-- <div class="col-span-2 text-center">Mov</div> -->
        <div class="col-span-2 text-center md:col-span-1">Pos.</div>
        <div class="col-span-8 md:col-span-3">Clan</div>
        <div class="text-center">J</div>
        <div class="hidden text-center md:block">G</div>
        <div class="hidden text-center md:block">E</div>
        <div class="hidden text-center md:block">P</div>
        <div class="hidden text-center md:block">R+</div>
        <div class="hidden text-center md:block">R-</div>
        <div class="hidden text-center md:block">W/L</div>
        <div class="text-center">Pts</div>
      </div>
      <div
        v-for="(equipo, index) in equiposOrdenados"
        :key="equipo"
        class="grid grid-cols-12 px-2 py-2"
      >
        <!-- <div class="flex items-center justify-center col-span-2">
          <component class="w-4" :is="equipo"></component>
        </div> -->
        <div class="col-span-2 text-center md:col-span-1">{{ index + 1 }}</div>
        <div class="col-span-8 md:col-span-3">{{ equipo.name }}</div>
        <div class="text-center">{{ equipo.fechasJugadas }}</div>
        <div class="hidden text-center md:block">
          {{ equipo.fechasGanadas }}
        </div>
        <div class="hidden text-center md:block">
          {{ equipo.fechasEmpatadas }}
        </div>
        <div class="hidden text-center md:block">
          {{ equipo.fechasPerdidas }}
        </div>
        <div class="hidden text-center md:block">
          {{ equipo.roundsGanados }}
        </div>
        <div class="hidden text-center md:block">
          {{ equipo.roundsPerdidos }}
        </div>
        <div class="hidden text-center md:block">{{ equipo.ratioRounds }}</div>
        <div class="text-center">{{ equipo.puntos }}</div>
      </div>
    </div>
    <div class="px-3 py-4 text-xs text-gray-500">
      <!-- <p>
        <span class="font-bold">Mov: </span> Movimiento en la tabla respecto
        fecha anterior
      </p> -->
      <p><span class="font-bold">Pos: </span> Posicion en la tabla</p>
      <p><span class="font-bold">J: </span> Fechas Jugadas</p>
      <p><span class="font-bold">G: </span> Fechas Ganadas</p>
      <p><span class="font-bold">E: </span> Fechas Empatadas</p>
      <p><span class="font-bold">P: </span> Fechas Perdidas</p>
      <p><span class="font-bold">R+: </span> Rounds Ganados en total</p>
      <p><span class="font-bold">R-: </span> Rounds Perdidos en total</p>
      <p><span class="font-bold">W/L: </span> Ratio Rounds Ganados/Perdidos</p>
      <p><span class="font-bold">Pts: </span> Puntos</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import SvgArrowSmUp from "@/components/SvgArrowSmUp";
import SvgArrowSmDown from "@/components/SvgArrowSmDown";
import SvgMinus from "@/components/SvgMinus";

export default {
  name: "TablaPosiciones",
  data() {
    return {
      // [].sort(this.ordenar(["", ""], "pts", "w_l"));
    };
  },
  components: {
    SvgArrowSmUp,
    SvgArrowSmDown,
    SvgMinus,
  },
  computed: {
    ...mapState(["equipos", "resultados"]),
    equiposOrdenados() {
      return this.ordenar(this.equipos, "puntos", "ratioRounds");
    },
  },
  methods: {
    ordenar(arr, prop1, prop2) {
      arr.sort((a, b) => {
        if (a[prop1] == b[prop1]) {
          if (a[prop2] == b[prop2]) return 0;
          return a[prop2] > b[prop2] ? -1 : 1;
        } else {
          return a[prop1] > b[prop1] ? -1 : 1;
        }
      });
      return arr;
    },
  },
};
</script>
