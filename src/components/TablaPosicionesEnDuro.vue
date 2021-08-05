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
        class="grid grid-cols-12 px-2 py-2 text-white bg-black border-t border-gray-600 "
      >
        <div class="text-center">Mov.</div>
        <div class="text-center">Pos.</div>
        <div class="col-span-3">Clan</div>
        <div class="text-center">J</div>
        <div class="text-center">G</div>
        <div class="text-center">E</div>
        <div class="text-center">P</div>
        <div class="text-center">Rnd.</div>
        <div class="text-center">W/L</div>
        <div class="text-center">Pts.</div>
      </div>
      <div
        v-for="(posicion, index) in posiciones"
        :key="posicion"
        class="grid grid-cols-12 px-2 py-2"
      >
        <div class="flex justify-center">
          <SvgArrowSmUp class="w-6 text-green-500" v-if="posicion.mov === 1" />
          <SvgMinus class="w-6 text-gray-500" v-if="posicion.mov === 0" />
          <SvgArrowSmDown class="w-6 text-red-500" v-if="posicion.mov === -1" />
        </div>
        <div class="text-center">{{ index + 1 }}</div>
        <div class="col-span-3">{{ posicion.clan }}</div>
        <div class="text-center">{{ posicion.j }}</div>
        <div class="text-center">{{ posicion.g }}</div>
        <div class="text-center">{{ posicion.e }}</div>
        <div class="text-center">{{ posicion.p }}</div>
        <div class="text-center">{{ posicion.rnd }}</div>
        <div class="text-center">{{ posicion.w_l }}</div>
        <div class="text-center">{{ posicion.pts }}</div>
      </div>
    </div>
    <div class="px-3 py-4 text-xs text-gray-500">
      <p><span class="font-bold">Mov:</span>Movimiento en la tabla</p>
      <p><span class="font-bold">J:</span> Fechas Jugadas</p>
      <p><span class="font-bold">G:</span> Fechas Ganadas</p>
      <p><span class="font-bold">E:</span> Fechas Empatadas</p>
      <p><span class="font-bold">P:</span> Fechas Perdidas</p>
      <p><span class="font-bold">Rnd:</span> Rounds Ganados</p>
      <p><span class="font-bold">W/L:</span> Ratio Rounds Ganados/Perdidos</p>
      <p><span class="font-bold">Rnd:</span> Rounds Ganados</p>
      <p><span class="font-bold">Pts:</span> Puntos</p>
    </div>
  </div>
</template>

<script>
import SvgArrowSmUp from "@/components/SvgArrowSmUp";
import SvgArrowSmDown from "@/components/SvgArrowSmDown";
import SvgMinus from "@/components/SvgMinus";

export default {
  name: "TablaPosicionesEnDuro",
  components: {
    SvgArrowSmUp,
    SvgArrowSmDown,
    SvgMinus,
  },
  data() {
    return {
      posiciones: [
        {
          mov: 0,
          pos: 3,
          clan: "Los del Gulag",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 48,
          pts: 16,
        },
        {
          mov: 0,
          pos: 8,
          clan: "Mancoster reloaded",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 36,
          pts: 12,
        },
        {
          mov: 0,
          pos: 2,
          clan: "Disaster groove",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 0,
          pts: 0,
        },
        {
          mov: 0,
          pos: 1,
          clan: "The Chupahoyos",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 0,
          pts: 2,
        },
        {
          mov: 0,
          pos: 5,
          clan: "Zicariato de la perra",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 0,
          pts: 5,
        },
        {
          mov: 0,
          pos: 4,
          clan: "Frozthound",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 37,
          pts: 12,
        },
        {
          mov: 0,
          pos: 6,
          clan: "Wu-Tang Lag",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 34,
          pts: 12,
        },
        {
          mov: 0,
          pos: 7,
          clan: "xxxxxxx",
          j: 0,
          g: 0,
          e: 0,
          p: 0,
          rnd: 0,
          w_l: 34,
          pts: 12,
        },
      ],
    };
  },
};
</script>
