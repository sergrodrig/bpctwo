<template>
  <div>
    <ul class="flex flex-wrap divide-y-2 divide-white">
      <li
        v-for="encuentro in encuentros"
        :key="encuentro.id"
        class="flex flex-col w-full"
      >
        <button
          @click="setEncuentroSeleccionado(encuentro.numero)"
          class="flex grid flex-col items-center justify-between grid-cols-3 p-2 space-x-4 text-black "
          :class="encuentro.fecha % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'"
        >
          <div class="flex flex-col text-left sm:flex-row sm:space-x-2">
            <span> Fecha {{ encuentro.fecha }} </span>
            <span> [ #{{ encuentro.numero }} ]</span>
          </div>
          <span class="grid grid-cols-1 col-span-2 sm:grid-cols-3">
            <span>{{ nombreEquipo(encuentro.local) }}</span>
            <span>vs</span>
            <span>{{ nombreEquipo(encuentro.visita) }}</span>
          </span>
        </button>

        <!-- encuentro expanded: resultados -->
        <AdminEncuentrosForm
          v-if="encuentroSeleccionado === encuentro.numero"
          :encuentroSeleccionado="encuentroSeleccionado"
          :encuentroFirebaseId="detalleResultado.id"
          :partidas="detalleResultado.partidas || []"
          @cancelar="encuentroSeleccionado = 0"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

import AdminEncuentrosForm from "@/components/admin/AdminEncuentrosForm";

export default {
  components: { AdminEncuentrosForm },
  data() {
    return {
      encuentroSeleccionado: 0,
    };
  },
  computed: {
    ...mapState(["encuentros", "equipos", "resultados"]),
    detalleResultado() {
      const resultado = this.resultados.find(
        (r) => r.encuentro == this.encuentroSeleccionado
      );
      return resultado;
    },
  },
  methods: {
    nombreEquipo(id) {
      const e = this.equipos.find((e) => e.id === id);
      if (e) return e.name;
      return undefined;
    },
    setEncuentroSeleccionado(numero) {
      if (this.encuentroSeleccionado === numero) this.encuentroSeleccionado = 0;
      else if (this.encuentroSeleccionado !== numero)
        this.encuentroSeleccionado = numero;
      else if (this.encuentroSeleccionado === 0)
        this.encuentroSeleccionado = numero;
    },
  },
};
</script>
