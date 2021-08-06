<template>
  <section class="text-gray-600 body-font">
    <!-- titulo pagina -->
    <titulo-pagina texto="Liga BPC: Bases" />

    <!-- contenido -->
    <div
      class="max-w-5xl px-4 py-8 mx-auto space-y-4  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <!-- formato -->
      <div class="w-full bg-white border-4 border-black hover:shadow-xl">
        <h1
          class="p-2 font-mono text-xl font-medium text-center text-gray-200 bg-black  sm:text-2xl"
        >
          Formato
        </h1>
        <div class="p-8">
          <ol class="space-y-2 leading-relaxed list-disc list-inside">
            <li>
              Los equipos participantes jugaran en un sistema todos contra
              todos, en dos ruedas, con partidas de ida y vuelta.
            </li>
            <li>
              Las fechas seran los dias
              <span class="font-medium text-indigo-700"
                >Jueves a las 22:00 hrs.</span
              >
              a menos que se coordine un cambio consensuado entre los equipos.
            </li>
            <li>
              La fecha consta de
              <span class="font-medium text-indigo-700">6 partidas (mapas)</span
              >.
            </li>
            <li>
              En la partida, el ataque y defensa va rotando cada 3 puntos. La
              partida la gana el equipo que llega a
              <span class="font-medium text-indigo-700">6 rounds ganados</span>
              como ha sido hasta ahora.
            </li>
            <li>
              En cada fecha,
              <span class="font-medium text-indigo-700"
                >el equipo que este de local elige los 6 mapas a jugar</span
              >. Deben confirmarlos con antelacion.
            </li>
            <li>
              <span class="font-medium text-indigo-700">
                Se deben jugar los 6 mapas
              </span>
              . Si ambos equipos deciden terminar antes, debido a que uno ya
              gano 4-0 por ejemplo, igual se le dan el resto de mapas como
              ganados al ganador de la fecha quedando como 6-0.
            </li>
            <li>
              El
              <span class="font-medium text-indigo-700"
                >primer duelo en un mapa sera de prueba</span
              >
              para que se alcancen a conectar todos y puedan probar las armas.
            </li>
            <li>
              El
              <span class="font-medium text-indigo-700"
                >ganador de la fecha se lleva 3 puntos en la tabla</span
              >
              y el <span class="font-medium text-indigo-700">perdedor 0</span>.
              En caso de
              <span class="font-medium text-indigo-700"
                >empate 1 punto para cada equipo</span
              >.
            </li>
            <li>
              Al final de las 6 fechas el equipo con mas puntos gana la liga y
              queda como campeon hasta la proxima edicion.
            </li>
          </ol>
        </div>
      </div>

      <!-- reglas -->
      <div class="w-full border-4 border-black hover:shadow-xl">
        <h1
          class="p-2 font-mono text-xl font-medium text-center text-gray-200 bg-black  sm:text-2xl"
        >
          Reglas
        </h1>
        <div class="p-8">
          <ol class="space-y-2 text-base leading-relaxed list-disc list-inside">
            <li>
              Las armas a utilizar seran limitadas solamente por las reglas de
              COD League. En el armamento/loadout se indican las armas que son
              incompatibles con un signo de exclamacion. *
            </li>
            <li>
              Se permitira 1 sniper por equipo. Se descontara 1 punto al equipo
              si es que se demuestra.
            </li>
            <li>No se permite el arma CX-9.</li>
            <li>
              Si a un equipo se le cae un jugador la partida debe continuar, a
              menos que los equipos lleguen a un acuerdo de esperarlo o
              reinicar.
            </li>
            <li>
              Cada equipo tendra un lider que representa al equipo para las
              votaciones, acuerdos, etc...
            </li>
            <li>
              Los equipos deben enviar una captura de pantalla o una foto del
              resultado de cada mapa para estadisticas de la pagina.
            </li>
            <li>
              Los equipos son de 5 jugadores. Si un equipo tiene menos
              jugadores, puede jugar igualmente contra el equipo completo del
              rival, o si quieren pueden buscar un refuerzo, pero se le
              descuenta un punto si el refuerzo no es del equipo registrado
              inicialmente.
            </li>
          </ol>
          <div class="mt-12 text-xs font-bold uppercase">
            <p class="text-xl font-bold text-red-500">IMPORTANTE</p>
            <p>
              Si eres host, debes configurar la partida de acuerdo a esta
              <router-link
                :to="{ name: 'ConfigurarPartida' }"
                class="font-bold text-blue-500 underline"
              >
                guia </router-link
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- proximas fechas -->
      <div class="w-full border-4 border-black hover:shadow-xl">
        <h1
          class="p-2 font-mono text-xl font-medium text-center text-gray-200 bg-black  sm:text-2xl"
        >
          Calendario
        </h1>
        <div class="p-8">
          <ol>
            <h2 class="mb-4 font-medium text-gray-900 sm:text-lg text-md">
              PRIMERA RUEDA (IDA)
            </h2>
            <ul>
              <span class="font-semibold">Fecha #1: </span
              >Jueves 5 Agosto 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #2: </span
              >Jueves 12 Agosto 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #3: </span
              >Jueves 19 Agosto 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #4: </span
              >Jueves 26 Agosto 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #5: </span
              >Jueves 2 Septiembre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #6: </span
              >Jueves 9 Septiembre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #7: </span
              >Jueves 16 Septiembre 22:00
            </ul>
            <h2 class="mt-4 mb-4 font-medium text-gray-900 sm:text-lg text-md">
              SEGUNDA RUEDA (VUELTA)
            </h2>
            <ul>
              <span class="font-semibold">Fecha #8: </span
              >Jueves 23 Septiembre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #9: </span
              >Jueves 30 Septiembre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #10: </span
              >Jueves 7 Octubre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #11: </span
              >Jueves 14 Octubre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #12: </span
              >Jueves 21 Octubre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #13: </span
              >Jueves 28 Octubre 22:00
            </ul>
            <ul>
              <span class="font-semibold">Fecha #14: </span
              >Jueves 4 Noviembre 22:00
            </ul>
          </ol>
          <p class="mt-4 text-sm italic">
            Las fechas pueden estar sujetas a cambios de dia u hora.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TituloPagina from "@/components/TituloPagina";

export default {
  name: "Liga",
  components: {
    TituloPagina,
  },
  emits: ["ready"],
  created() {
    this.$emit("ready");
  },
};
</script>
