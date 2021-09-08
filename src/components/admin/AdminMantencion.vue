<template>
  <div class="flex items-center justify-center space-x-4">
    <p>Modo mantencion</p>
    <input type="checkbox" class="p-2 rounded shadow" v-model="mantencion" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["mantencion"]),
  },
  methods: {
    ...mapMutations(["admin/cambiarModoMantencion"]),
    toggleModoMantencion() {
      console.log("metodo toggleModoMantencion");
      this["admin/cambiarModoMantencion"]();
    },
  },
};
</script>
