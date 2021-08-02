<template>
  <div>
    <div v-if="authUser" class="flex items-center space-x-2">
      <router-link :to="{ name: 'Perfil' }">
        <img
          class="object-cover w-12 h-12 rounded-full"
          :src="authUser.avatar"
        />
      </router-link>
      <a @click.prevent="$store.dispatch('signOut')">
        <svg-log-out />
      </a>
    </div>
    <div v-else>
      <router-link
        :to="{ name: 'SignIn' }"
        class="
          flex
          px-3
          py-3
          space-x-2
          font-sans
          text-lg
          font-bold
          text-white
          bg-black
          border border-yellow-400
          rounded-full
          shadow-inner
          outline-none
          lg:space-x-0
          hover:text-white hover:bg-indigo-600
          focus:bg-indigo-700 focus:text-white
          hover:shadow-xl
        "
      >
        <svg-user />
        <span class="md:hidden">Ingresar</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SvgLogOut from "@/components/SvgLogOut";
import SvgUser from "@/components/SvgUser";

export default {
  name: "NavbarAvatar",
  components: {
    SvgLogOut,
    SvgUser,
  },
  computed: {
    ...mapGetters(["authUser"]),
  },
};
</script>
