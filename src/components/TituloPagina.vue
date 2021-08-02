<template>
  <div class="flex items-center justify-center h-24 bg-indigo-600">
    <h1 class="font-mono text-3xl text-center text-white">
      {{ texto.toUpperCase() }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "",
    },
  },
};
</script>
