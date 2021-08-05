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
        <div class="text-center">Mov</div>
        <div class="text-center">Pos</div>
        <div class="col-span-2">Clan</div>
        <div class="text-center">J</div>
        <div class="text-center">G</div>
        <div class="text-center">E</div>
        <div class="text-center">P</div>
        <div class="text-center">R+</div>
        <div class="text-center">R-</div>
        <div class="text-center">W/L</div>
        <div class="text-center">Pts</div>
      </div>
      <div
        v-for="(posicion, index) in posiciones"
        :key="posicion"
        class="grid grid-cols-12 px-2 py-2"
      >
        <div class="flex justify-center">
          <component class="w-6" :is="movimiento(posicion)"></component>
        </div>
        <div class="text-center">{{ index + 1 }}</div>
        <div class="col-span-2">{{ posicion.clan }}</div>
        <div class="text-center">
          {{ fechasJugadas(posicion.estadisticas) }}
        </div>
        <div class="text-center">
          {{ fechasGanadas(posicion.estadisticas) }}
        </div>
        <div class="text-center">
          {{ fechasEmpatadas(posicion.estadisticas) }}
        </div>
        <div class="text-center">
          {{ fechasPerdidas(posicion.estadisticas) }}
        </div>
        <div class="text-center">
          {{ roundsGanados(posicion.estadisticas) }}
        </div>
        <div class="text-center">
          {{ roundsPerdidos(posicion.estadisticas) }}
        </div>
        <div class="text-center">
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
        <span class="font-bold">Mov:</span>Movimiento en la tabla respecto fecha
        anterior
      </p>
      <p><span class="font-bold">J:</span>Posicion en la tabla</p>
      <p><span class="font-bold">J:</span>Fechas Jugadas</p>
      <p><span class="font-bold">G:</span>Fechas Ganadas</p>
      <p><span class="font-bold">E:</span>Fechas Empatadas</p>
      <p><span class="font-bold">P:</span>Fechas Perdidas</p>
      <p><span class="font-bold">W/L:</span>Ratio Rounds Ganados/Perdidos</p>
      <p><span class="font-bold">Pts:</span>Puntos</p>
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
  data() {
    return {
      posiciones: [
        {
          //   evo: 1,
          //   pos: 3,
          clan: "Los del Gulag",
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: 1,
              posicion: 2,
              roundsGanados: 36,
              roundsPerdidos: 9,
            },
            {
              fecha: 2,
              resultado: 1,
              posicion: 1,
              roundsGanados: 32,
              roundsPerdidos: 10,
            },
            {
              fecha: 3,
              resultado: -1,
              posicion: 3,
              roundsGanados: 12,
              roundsPerdidos: 28,
            },
            {
              fecha: 4,
              resultado: 0,
              posicion: 4,
              roundsGanados: 8,
              roundsPerdidos: 8,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: 1,
          //   pos: 8,
          clan: "Mancoster reloaded",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: 0,
          //   pos: 2,
          clan: "Disaster groove",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: -1,
          //   pos: 1,
          clan: "The Chupahoyos",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: 1,
          //   pos: 5,
          clan: "Zicariato de la perra",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: -1,
          //   pos: 4,
          clan: "Frozthound",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: 1,
          //   pos: 6,
          clan: "Wu-Tang Lag",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
        {
          //   evo: 1,
          //   pos: 7,
          clan: "xxxxxxx",
          j: 14,
          g: "99",
          e: "99",
          p: "99",
          rnd: "999",
          w_l: "99.99",
          pts: "99",
          estadisticas: [
            {
              fecha: 1,
              resultado: 0,
              posicion: 4,
              roundsGanados: 22,
              roundsPerdidos: null,
            },
            {
              fecha: 2,
              resultado: 1,
              posicion: 4,
              roundsGanados: 36,
              roundsPerdidos: null,
            },
            {
              fecha: 3,
              resultado: -1,
              posicion: 4,
              roundsGanados: 7,
              roundsPerdidos: null,
            },
            {
              fecha: 4,
              resultado: -1,
              posicion: 4,
              roundsGanados: 5,
              roundsPerdidos: null,
            },
            {
              fecha: 5,
              resultado: 1,
              posicion: 4,
              roundsGanados: 36,
              roundsPerdidos: null,
            },
            {
              fecha: 6,
              resultado: 0,
              posicion: 4,
              roundsGanados: 21,
              roundsPerdidos: null,
            },
            {
              fecha: 7,
              resultado: 0,
              posicion: 4,
              roundsGanados: 23,
              roundsPerdidos: null,
            },
            {
              fecha: 8,
              resultado: 1,
              posicion: 5,
              roundsGanados: 30,
              roundsPerdidos: null,
            },
            {
              fecha: 9,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 10,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 11,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 12,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 13,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
            {
              fecha: 14,
              resultado: null,
              posicion: 0,
              roundsGanados: null,
              roundsPerdidos: null,
            },
          ],
        },
      ],
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
      console.log("");
      console.log("");
      console.log(`[posicion.clan]: ${posicion.clan}`);

      const fechasJugadas = this.fechasJugadas(posicion.estadisticas);
      console.log(`[fechasJugadas]: ${fechasJugadas}`);

      if (fechasJugadas === 0) console.log("devuelve: no ha jugado");
      if (fechasJugadas === 0) return "SvgMinus";

      const ultimaPosicion = posicion.estadisticas.find(
        (fecha) => fecha.fecha === fechasJugadas
      );
      console.log(`[ultimaPosicion]: ${ultimaPosicion}`);

      const penultimaPosicion = posicion.estadisticas.find(
        (fecha) => fecha.fecha === fechasJugadas - 1
      );
      console.log(`[penultimaPosicion]: ${penultimaPosicion}`);

      if (ultimaPosicion.posicion < penultimaPosicion.posicion) {
        console.log("SvgArrowSmUp");
        return "SvgArrowSmUp";
      } else if (ultimaPosicion.posicion === penultimaPosicion.posicion) {
        console.log("SvgMinus");
        return "SvgMinus";
      } else if (ultimaPosicion.posicion > penultimaPosicion.posicion) {
        console.log("SvgArrowSmDown");
        return "SvgArrowSmDown";
      }
    },
  },
  mounted() {
    this.posiciones.sort(this.ordenar(this.posiciones, "pts", "w_l"));
  },
};
</script>
