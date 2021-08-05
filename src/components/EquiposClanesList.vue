<template>
  <div class="space-y-4">
    <EquiposClanesCard
      v-for="clan in clanes"
      :key="clan.id"
      :soldados="getSoldadosForClan(clan)"
      :clan="clan.name"
      :clanLider="clan.captain"
      :clanId="clan.initials"
      :clanEscudo="clan.escudo"
    />
  </div>
</template>

<script>
import EquiposClanesCard from "@/components/EquiposClanesCard";

export default {
  components: {
    EquiposClanesCard,
  },
  props: {
    clanes: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getSoldadosForClan(clan) {
      return this.$store.state.soldados.filter(
        (soldado) => soldado.clan === clan.id
      );
    },
  },
};
</script>

<style></style>
