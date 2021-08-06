<template>
  <div class="border-4 border-black divide-y-4 divide-black">
    <h1 class="text-center text-white bg-black">Fecha 1</h1>
    <!-- duelo 1 -->
    <router-link
      class="grid grid-cols-12 text-center divide-x-2 divide-black"
      :to="{ name: 'ResultadosDetalle', params: { resultadoId: '1' } }"
    >
      <div class="col-span-4">Wu-Tang Lag</div>
      <div>0</div>
      <div class="col-span-2">vs</div>
      <div>0</div>
      <div class="col-span-4">Disaster Groove</div>
    </router-link>
    <!-- duelo 2 -->
    <router-link
      class="grid grid-cols-12 text-center divide-x-2 divide-black"
      :to="{ name: 'ResultadosDetalle', params: { resultadoId: '2' } }"
    >
      <div class="col-span-4">The Chupa Hoyos</div>
      <div>0</div>
      <div class="col-span-2">vs</div>
      <div>0</div>
      <div class="col-span-4">Mancoster Reloaded</div>
    </router-link>
    <!-- duelo 3 -->
    <router-link
      class="grid grid-cols-12 text-center divide-x-2 divide-black"
      :to="{ name: 'ResultadosDetalle', params: { resultadoId: '3' } }"
    >
      <div class="col-span-4">Zicariato de la perra</div>
      <div>0</div>
      <div class="col-span-2">vs</div>
      <div>0</div>
      <div class="col-span-4">Los del Gulag</div>
    </router-link>
    <!-- duelo 4 -->
    <router-link
      class="grid grid-cols-12 text-center divide-x-2 divide-black"
      :to="{ name: 'ResultadosDetalle', params: { resultadoId: '4' } }"
    >
      <div class="col-span-4">Frozthounds</div>
      <div>0</div>
      <div class="col-span-2">vs</div>
      <div>0</div>
      <div class="col-span-4">Black Berets</div>
    </router-link>
  </div>
</template>
