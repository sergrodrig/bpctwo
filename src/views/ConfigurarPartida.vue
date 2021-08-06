<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Configuracion Partida" />

    <section class="text-gray-600 body-font">
      <div
        class="container max-w-xs py-16 pt-24 mx-auto space-y-16  xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl md:pt-32"
      >
        <div class="flex flex-col justify-center space-y-12">
          <h2 class="text-lg">
            1. Seleccionar <span class="font-bold">PARTIDA PRIVADA</span>.
          </h2>
          <img src="/images/configuracion_0_1.png" />

          <h2 class="text-lg">
            2. Seleccionar <span class="font-bold">CUSTOM GAME</span>.
          </h2>
          <img src="/images/configuracion_0_2.png" />

          <h2 class="text-lg">
            3. Seleccionar el <span class="font-bold">mapa</span> y el
            <span class="font-bold">modo</span> CALL OF DUTY LEAGUE.
            <br />
            <span class="text-sm font-bold text-red-400"
              >* Luego de seleccionar el modo se pueden cambiar las
              reglas.</span
            >
          </h2>
          <img src="/images/configuracion_0_3.png" />

          <h2 class="text-lg">
            4. Seleccionar el modo
            <span class="font-bold"> CALL OF DUTY LEAGUE </span>
            para activar las reglas y luego CDL
            <span class="font-bold"> Search and Destroy. </span>
          </h2>
          <img src="/images/configuracion_1.png" />

          <h2 class="text-lg">
            5. Por defecto vienen bloqueadas las reglas especificas. Se deben
            desbloquear abajo donde dice
            <span class="font-bold">Unlock Rules</span>
          </h2>
          <h2 class="text-lg">
            6. Configurar las partidas a 6 win, cambio cada 3 rondas, y la
            primera ronda de practica.
            <span class="font-bold">Unlock Rules</span>
          </h2>
          <img src="/images/configuracion_2.png" />

          <h2 class="text-lg">7. Configurar los tiempos como en la imagen.</h2>
          <img src="/images/configuracion_3.png" />

          <h2 class="text-lg">8. Deshabilitar la killcam.</h2>
          <img src="/images/configuracion_4.png" />

          <h2 class="text-lg">9. Deshabilitar los killstreak.</h2>
          <img src="/images/configuracion_5.png" />

          <h2 class="p-3 text-lg font-bold text-white bg-red-500">
            Se sugiere guardar esta configuracion para poder utilizarla
            nuevamente en las siguientes partidas
          </h2>
          <img src="/images/configuracion_6.png" />
        </div>
      </div>
    </section>
  </div>
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
