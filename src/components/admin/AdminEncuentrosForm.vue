<template>
  <div class="p-4 space-y-2">
    <div class="grid grid-cols-3 space-x-2" v-for="n in 6" :key="n">
      <!-- mapa select -->
      <select v-model="resultadosMapas[`${n - 1}`].mapa">
        <option :value="mapa.id" v-for="mapa in mapas" :key="mapa.id">
          {{ mapa.name }}
        </option>
        <option value="" selected="selected">( Walkover )</option>
      </select>

      <!-- puntajes -->
      <input
        type="text"
        placeholder="resultado local"
        v-model="resultadosMapas[`${n - 1}`].local"
      />
      <input
        type="text"
        placeholder="resultado visita"
        v-model="resultadosMapas[`${n - 1}`].visita"
      />
    </div>

    <!-- botones -->
    <div class="space-x-2">
      <button
        @click.stop="cancelarEdicion"
        class="px-3 py-2 text-white bg-red-500 hover:bg-red-600"
      >
        Cancelar
      </button>
      <button
        @click.stop="save"
        class="px-3 py-2 text-white bg-green-500 hover:bg-green-600"
      >
        Guardar resultados
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    encuentroSeleccionado: {
      type: Number,
    },
    partidas: {
      type: Array,
      default: () => [],
    },
    encuentroFirebaseId: {
      type: String,
    },
  },
  data() {
    return {
      resultadosMapas: [
        {
          mapa: this.partidas[0]?.mapa || "",
          local: this.partidas[0]?.local || 0,
          visita: this.partidas[0]?.visita || 0,
        },
        {
          mapa: this.partidas[1]?.mapa || "",
          local: this.partidas[1]?.local.local || 0,
          visita: this.partidas[1]?.local || 0,
        },
        {
          mapa: this.partidas[2]?.mapa || "",
          local: this.partidas[2]?.local || 0,
          visita: this.partidas[2]?.local || 0,
        },
        {
          mapa: this.partidas[3]?.mapa || "",
          local: this.partidas[3]?.local || 0,
          visita: this.partidas[3]?.local || 0,
        },
        {
          mapa: this.partidas[4]?.mapa || "",
          local: this.partidas[4]?.local || 0,
          visita: this.partidas[4]?.local || 0,
        },
        {
          mapa: this.partidas[5]?.mapa || "",
          local: this.partidas[5]?.local || 0,
          visita: this.partidas[5]?.local || 0,
        },
      ],
    };
  },
  computed: {
    ...mapState(["mapas", "encuentros", "resultados"]),
  },
  methods: {
    ...mapActions([
      "admin/actualizarResultado",
      "admin/actualizarResultadoPrueba",
    ]),
    async save() {
      console.log("AdminEncuentrosForm -> save");
      await this["admin/actualizarResultadoPrueba"]({
        resource: "resultados",
        id: this.encuentroFirebaseId,
        newData: this.resultadosMapas,
      });
    },
    async save2() {
      await this["admin/actualizarResultado"]({
        resource: "resultados",
        id: this.encuentroSeleccionado,
        newData: this.resultadosMapas,
      });
    },
    cancelarEdicion() {
      this.$emit("cancelar");
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      Object.values(this.resultadosMapas).forEach((res) => {
        res.mapa = "";
        res.local = 0;
        res.visita = 0;
      });
    },
  },
};
</script>
