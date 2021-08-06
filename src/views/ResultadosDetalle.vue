<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="resultados detalle" />

    <!-- detalle duelo -->
    <p class="whitespace-pre">{{ resultados }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TituloPagina from "@/components/TituloPagina";
import asyncDataStatus from "@/mixins/asyncDataStatus";

const dataJson = require("../data.json");

export default {
  data() {
    return {
      dataJson,
    };
  },
  components: {
    TituloPagina,
  },
  props: {
    resultadoId: {
      type: Number,
      required: true,
    },
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  async created() {
    await this.fetchAllItems("resultados");
    this.asyncDataStatus_fetch();
  },
  computed: {
    // resultados() {
    //   return this.$store.state.resultados;
    // },
    param() {
      return this.$route.options.params;
    },
    resultados() {
      return this.dataJson.find((id) => {
        id.id == this.param;
      });
    },
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
  },
};
</script>
