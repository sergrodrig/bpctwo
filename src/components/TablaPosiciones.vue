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
        class="grid px-2 py-2 text-sm text-white bg-black border-t border-gray-600  grid-cols-16"
      >
        <div class="col-span-2 text-center">Mov</div>
        <div class="col-span-2 text-center md:col-span-1">Pos.</div>
        <div class="col-span-10 md:col-span-5">Clan</div>
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
        v-for="(posicion, index) in posiciones"
        :key="posicion"
        class="grid px-2 py-2 grid-cols-16"
      >
        <div class="flex items-center justify-center col-span-2">
          <component class="w-4" :is="movimiento(posicion)"></component>
        </div>
        <div class="col-span-2 text-center md:col-span-1">{{ index + 1 }}</div>
        <div class="col-span-10 md:col-span-5">{{ posicion.clan }}</div>
        <div class="text-center">
          {{ fechasJugadas(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{ fechasGanadas(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{ fechasEmpatadas(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{ fechasPerdidas(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{ roundsGanados(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{ roundsPerdidos(posicion.estadisticas) }}
        </div>
        <div class="hidden text-center md:block">
          {{
            ratio(
              roundsGanados(posicion.estadisticas),
              roundsPerdidos(posicion.estadisticas)
            )
          }}
        </div>
        <div class="text-center">
          {{
            puntos(
              fechasGanadas(posicion.estadisticas),
              fechasEmpatadas(posicion.estadisticas)
            )
          }}
        </div>
      </div>
    </div>
    <div class="px-3 py-4 text-xs text-gray-500">
      <p>
        <span class="font-bold">Mov: </span> Movimiento en la tabla respecto
        fecha anterior
      </p>
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
import SvgArrowSmUp from "@/components/SvgArrowSmUp";
import SvgArrowSmDown from "@/components/SvgArrowSmDown";
import SvgMinus from "@/components/SvgMinus";

export default {
  name: "TablaPosiciones",
  components: {
    SvgArrowSmUp,
    SvgArrowSmDown,
    SvgMinus,
  },
  props: {
    pos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      posiciones: this.pos,
    };
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
    },
    fechasJugadas(estadisticas) {
      return estadisticas.filter((fecha) => fecha.resultado !== null).length;
    },
    fechasGanadas(estadisticas) {
      return estadisticas.filter((x) => x.resultado === 1).length;
    },
    fechasEmpatadas(estadisticas) {
      return estadisticas.filter((x) => x.resultado === 0).length;
    },
    fechasPerdidas(estadisticas) {
      return estadisticas.filter((x) => x.resultado === -1).length;
    },
    puntos(triunfos, empates) {
      return triunfos * 3 + empates * 1;
    },
    roundsGanados(estadisticas) {
      const rounds = Object.values(estadisticas).reduce(
        (total, { roundsGanados }) => total + roundsGanados,
        0
      );
      return rounds;
    },
    roundsPerdidos(estadisticas) {
      const rounds = Object.values(estadisticas).reduce(
        (total, { roundsPerdidos }) => total + roundsPerdidos,
        0
      );
      return rounds;
    },
    ratio(roundsGanados, roundsPerdidos) {
      if (roundsPerdidos === 0) return roundsGanados;
      else if (roundsPerdidos === 0 && roundsGanados === 0) return 0;
      const ratio = roundsGanados / roundsPerdidos;
      return ratio;
    },
    movimiento(posicion) {
      const fechasJugadas = this.fechasJugadas(posicion.estadisticas);
      if (fechasJugadas === 0) if (fechasJugadas === 0) return "SvgMinus";
      const ultimaPosicion = posicion.estadisticas.find(
        (fecha) => fecha.fecha === fechasJugadas
      );
      const penultimaPosicion = posicion.estadisticas.find(
        (fecha) => fecha.fecha === fechasJugadas - 1
      );
      if (ultimaPosicion.posicion < penultimaPosicion.posicion)
        return "SvgArrowSmUp";
      else if (ultimaPosicion.posicion === penultimaPosicion.posicion)
        return "SvgMinus";
      else if (ultimaPosicion.posicion > penultimaPosicion.posicion)
        return "SvgArrowSmDown";
    },
  },
  mounted() {
    this.posiciones.sort(this.ordenar(this.posiciones, "pts", "w_l"));
  },
};
</script>
