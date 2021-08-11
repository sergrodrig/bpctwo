<template>
  <div class="space-y-4">
    <EquipoCard
      v-for="equipo in equipos"
      :key="equipo.id"
      :soldados="obtenerSoldadosDelEquipo(equipo)"
      :equipo="equipo.name"
      :equipoLider="equipo.captain"
      :equipoId="equipo.initials"
      :equipoEscudo="equipo.escudo"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import EquipoCard from "@/components/EquipoCard";

export default {
  components: {
    EquipoCard,
  },
  props: {
    equipos: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    ...mapState(["soldados"]),
  },
  methods: {
    obtenerSoldadosDelEquipo(equipo) {
      return this.soldados.filter((s) => s.equipo === equipo.id);
    },
  },
};
</script>
