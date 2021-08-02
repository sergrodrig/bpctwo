<template>
  <div class="space-y-4">
    <EquiposFaccionesCard
      v-for="faccion in facciones"
      :key="faccion.id"
      :soldados="getSoldadosForFaccion(faccion)"
      :faccion="faccion.name"
      :faccion-escudo="faccion.escudo"
      :faccion-lider="faccion.lider"
      :faccion-id="faccion.id"
    />
  </div>
</template>

<script>
import EquiposFaccionesCard from "@/components/EquiposFaccionesCard";

export default {
  components: {
    EquiposFaccionesCard,
  },
  props: {
    facciones: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getSoldadosForFaccion(faccion) {
      return this.$store.state.soldados.filter(
        (soldado) => soldado.faccion === faccion.id
      );
    },
  },
};
</script>

<style></style>
