<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: { TheNavbar, TheFooter },
};
</script>
