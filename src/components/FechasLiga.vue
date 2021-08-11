<template>
  <div class="border-4 border-black divide-y-4 divide-black">
    <h1 class="text-center text-white bg-black">Fecha 1</h1>
    <!-- duelo 1 -->
    <router-link
      class="grid grid-cols-12 text-center divide-x-2 divide-black"
      :to="{
        name: 'ResultadosDetalle',
        params: { resultadoId: 'd5af3c30-f6ca-11eb-8dbb-ebfd269450dd' },
      }"
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
      :to="{
        name: 'ResultadosDetalle',
        params: { resultadoId: 'd67a7b70-f6ca-11eb-8dbb-ebfd269450dd' },
      }"
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
      :to="{
        name: 'ResultadosDetalle',
        params: { resultadoId: 'd6a29ce0-f6ca-11eb-8dbb-ebfd269450dd' },
      }"
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
      :to="{
        name: 'ResultadosDetalle',
        params: { resultadoId: 'd70ecc30-f6ca-11eb-8dbb-ebfd269450dd' },
      }"
    >
      <div class="col-span-4">Frozthounds</div>
      <div>0</div>
      <div class="col-span-2">vs</div>
      <div>0</div>
      <div class="col-span-4">Black Berets</div>
    </router-link>
  </div>
</template>
