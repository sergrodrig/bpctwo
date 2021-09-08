<template>
  <div class="bg-yellow-300">
    <div
      class="flex flex-col items-center justify-center max-w-xl min-h-screen p-4 mx-auto space-y-8 font-mono text-center "
    >
      <img src="/images/mantencion2.webp" alt="gif" class="w-full" />
      <div class="space-y-4">
        <p class="px-2 py-1 text-3xl font-bold text-white bg-black">
          Estamos en mantención hijos de la luli!!
        </p>
        <p class="text-2xl">Vuelvan mas tarde.</p>
      </div>
      <span class="text-center text-8xl">🤷🏾‍♂️</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["ready"],
  async created() {
    this.$emit("ready");
  },
};
</script>
