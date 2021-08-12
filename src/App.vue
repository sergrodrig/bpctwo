<template>
  <TheNavbar class="sticky top-0 z-50" />
  <div class="min-h-screen">
    <div v-show="showPage">
      <router-view v-slot="{ Component }" @ready="onPageReady">
        <transition name="fade" mode="out-in">
          <component
            :is="Component"
            :key="`${$route.path}${JSON.stringify($route.query)}`"
          />
        </transition>
      </router-view>
    </div>
    <transition name="fade">
      <AppSpinner v-show="!showPage" />
    </transition>
  </div>
  <TheFooter class="sticky top-0 z-50" />
</template>

<script>
import { mapActions } from "vuex";

import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter.vue";
import NProgress from "nprogress";

export default {
  name: "App",
  components: { TheNavbar, TheFooter },
  data() {
    return {
      showPage: false,
    };
  },
  created() {
    NProgress.configure({
      easing: "ease",
      speed: 500,
      showSpinner: false,
    });
    this.$router.beforeEach(() => {
      this.showPage = false;
      NProgress.start();
    });
  },
  methods: {
    ...mapActions(["fetchAllItems"]),
    onPageReady() {
      this.showPage = true;
      NProgress.done();
    },
  },
};
</script>

<style>
/* nprogress */
@import "~nprogress/nprogress.css";
#nprogress .bar {
  background: black !important;
}

/* vue transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
