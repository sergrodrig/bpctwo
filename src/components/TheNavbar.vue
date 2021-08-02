<template>
  <!-- Header -->
  <div class="w-full bg-yellow-300" @click.stop="isOpen = !isOpen">
    <header
      class="
        container
        px-8
        mx-auto
        md:flex md:justify-between md:items-center md:px-0 md:py-0
      "
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div>
          <router-link :to="{ name: 'Home' }" @click.stop="isOpen = null">
            <logo-bpc />
          </router-link>
        </div>
        <!-- Hamburgesa -->
        <button class="md:hidden" @click.stop="isOpen = !isOpen">
          <icono-hamburgesa-abierta v-if="isOpen" />
          <icono-hamburgesa-cerrada v-else />
        </button>
      </div>
      <!-- Menu -->
      <nav
        class="
          pb-4
          -ml-4
          space-y-3
          md:pb-0 md:my-0 md:flex md:space-y-0 md:space-x-4
        "
        :class="isOpen ? 'block' : 'hidden'"
      >
        <router-link
          :to="{ name: 'Liga' }"
          class="
            block
            px-3
            py-2
            font-sans
            text-lg
            font-bold
            text-white
            bg-black
            border border-yellow-400
            rounded
            shadow-inner
            outline-none
            hover:text-white hover:bg-indigo-600
            focus:bg-indigo-700 focus:text-white
            md:ml-2
            hover:shadow-xl
          "
          :class="currentRoute === 'Liga' ? 'bg-indigo-600' : 'bg-black'"
          @click.stop="isOpen = !isOpen"
        >
          Liga 🏆
        </router-link>
        <router-link
          :to="{ name: 'Equipos' }"
          class="
            block
            px-3
            py-2
            font-sans
            text-lg
            font-bold
            text-white
            border border-yellow-400
            rounded
            shadow-inner
            outline-none
            hover:text-white hover:bg-indigo-600
            focus:bg-indigo-700 focus:text-white
            md:ml-2
            hover:shadow-xl
          "
          :class="currentRoute === 'Equipos' ? 'bg-indigo-600' : 'bg-black'"
          @click.stop="isOpen = !isOpen"
        >
          Equipos 👮🏽‍♂️🥷🏻🍪👨🏻‍✈️
        </router-link>
        <router-link
          :to="{ name: 'Mapas' }"
          class="
            block
            px-3
            py-2
            font-sans
            text-lg
            font-bold
            text-white
            bg-black
            border border-yellow-400
            rounded
            shadow-inner
            outline-none
            hover:text-white hover:bg-indigo-600
            focus:bg-indigo-700 focus:text-white
            md:ml-2
            hover:shadow-xl
          "
          :class="currentRoute === 'Mapas' ? 'bg-indigo-600' : 'bg-black'"
          @click.stop="isOpen = !isOpen"
        >
          Mapas 🗺
        </router-link>
        <router-link
          :to="{ name: 'Resultados' }"
          class="
            block
            px-3
            py-2
            font-sans
            text-lg
            font-bold
            text-white
            bg-black
            border border-yellow-400
            rounded
            shadow-inner
            outline-none
            hover:text-white hover:bg-indigo-600
            focus:bg-indigo-700 focus:text-white
            md:ml-2
            hover:shadow-xl
          "
          :class="currentRoute === 'Resultados' ? 'bg-indigo-600' : 'bg-black'"
          @click.stop="isOpen = !isOpen"
        >
          Resultados 🥇🥈🥉
        </router-link>

        <!-- avatar -->
        <NavbarAvatar />
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import LogoBpc from "@/components/LogoBpc";
import NavbarAvatar from "@/components/NavbarAvatar";
import IconoHamburgesaAbierta from "@/components/IconoHamburgesaAbierta";
import IconoHamburgesaCerrada from "@/components/IconoHamburgesaCerrada";

export default {
  name: "TheNavbar",
  components: {
    IconoHamburgesaAbierta,
    IconoHamburgesaCerrada,
    LogoBpc,
    NavbarAvatar,
  },
  data() {
    return {
      isOpen: null,
      userDropdownOpen: false,
    };
  },
  computed: {
    ...mapGetters(["authUser"]),
    currentRoute() {
      return this.$router.currentRoute.value.name;
    },
  },
};
</script>
