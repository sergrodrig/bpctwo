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
        class="grid grid-cols-12 px-2 py-2 text-sm text-white bg-black border-t border-gray-600  md:grid-cols-9"
      >
        <!-- <div class="col-span-2 text-center">Mov</div> -->
        <div class="col-span-2 text-center md:col-span-1">Pos.</div>
        <div class="col-span-8 md:col-span-3">Clan</div>
        <div class="text-center">J</div>
        <div class="hidden text-center md:block">G</div>
        <div class="hidden text-center md:block">E</div>
        <div class="hidden text-center md:block">P</div>
        <div class="text-center">Pts</div>
      </div>
      <div
        v-for="(equipo, index) in equiposOrdenados"
        :key="equipo"
        class="grid grid-cols-12 px-2 py-2 md:grid-cols-9"
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
      <p><span class="font-bold">Pts: </span> Puntos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaPosiciones",
  data() {
    return {
      equipos: [
        {
          fechasJugadas: "5",
          fechasGanadas: "5",
          fechasEmpatadas: "0",
          fechasPerdidas: "0",
          puntos: "15",
          name: "Black Berets",
        },
        {
          fechasJugadas: "5",
          fechasGanadas: "4",
          fechasEmpatadas: "0",
          fechasPerdidas: "1",
          puntos: "12",
          name: "Frotzhound",
        },
        {
          fechasJugadas: "5",
          fechasGanadas: "3",
          fechasEmpatadas: "1",
          fechasPerdidas: "1",
          puntos: "10",
          name: "The chupaHoyos",
        },
        {
          fechasJugadas: "5",
          fechasGanadas: "3",
          fechasEmpatadas: "0",
          fechasPerdidas: "2",
          puntos: "9",
          name: "Los del Gulag",
        },
        {
          fechasJugadas: "5",
          fechasGanadas: "1",
          fechasEmpatadas: "1",
          fechasPerdidas: "3",
          puntos: "4",
          name: "Disaster Groove",
        },
        {
          fechasJugadas: "4",
          fechasGanadas: "1",
          fechasEmpatadas: "1",
          fechasPerdidas: "2",
          puntos: "4",
          name: "Zicariato de la Perra",
        },
        {
          fechasJugadas: "5",
          fechasGanadas: "1",
          fechasEmpatadas: "1",
          fechasPerdidas: "3",
          puntos: "4",
          name: "Wutang lag",
        },
        {
          fechasJugadas: "6",
          fechasGanadas: "0",
          fechasEmpatadas: "0",
          fechasPerdidas: "6",
          puntos: "0",
          name: "Mancoster United Reloaded",
        },
      ],
    };
  },
  computed: {
    equiposOrdenados() {
      return this.ordenar(this.equipos);
    },
  },
  methods: {
    ordenar(arr) {
      arr.sort((a, b) => b.puntos - a.puntos);
      return arr;
    },
  },
};
</script>
