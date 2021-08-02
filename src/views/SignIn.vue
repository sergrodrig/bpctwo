// https://tailwindui.com/components/application-ui/forms/form-layouts

<template>
  <div>
    <!-- titulo pagina -->
    <titulo-pagina texto="Ingresar" />

    <!-- formulario -->
    <div class="min-h-screen bg-white">
      <div class="container max-w-full px-8 py-6 mx-auto lg:py-14 md:max-w-md">
        <form class="space-y-4" @submit.prevent="signIn">
          <!-- Email -->
          <div>
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              id="email-address"
              v-model="form.email"
              type="email"
              name="email-address"
              autocomplete="email"
              class="
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:ring-black focus:border-black
                sm:text-sm
              "
            />
          </div>
          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <input
              id="password"
              v-model="form.password"
              type="password"
              name="password"
              autocomplete="password"
              class="
                w-full
                mt-1
                border-gray-300
                rounded-md
                shadow-sm
                focus:ring-black focus:border-black
                sm:text-sm
              "
            />
            <!-- Link registrarse -->
            <div class="mt-1 text-xs font-medium tracking-wider text-gray-500">
              No tienes cuenta?
              <router-link :to="{ name: 'SignUp' }" class="text-blue-500">
                Registrate aqui.
              </router-link>
            </div>
          </div>
          <!-- Boton iniciar sesion -->
          <div>
            <button
              type="submit"
              class="
                w-full
                px-3
                py-2
                text-white
                bg-black
                focus:ring-black focus:border-black
              "
            >
              Iniciar sesion
            </button>
          </div>
        </form>
        <div class="my-6 border-t-2" />
        <div>
          <div class="space-y-3">
            <p
              class="text-xs tracking-wider text-center text-gray-400 uppercase"
            >
              Tambien puedes ingresar con tus RRSS
            </p>
            <div class="flex space-x-2">
              <button
                class="w-full px-3 py-2 font-bold text-white bg-red-500"
                @click="signInWithGoogle"
              >
                Google
              </button>
              <button
                class="w-full px-3 py-2 font-bold text-white bg-blue-600"
                @click="signInWithGoogle"
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";

import TituloPagina from "@/components/TituloPagina";

export default {
  name: "SignIn",
  components: {
    TituloPagina,
  },
  mixins: [asyncDataStatus],
  emits: ["ready"],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  async created() {
    this.asyncDataStatus_fetch();
  },
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("signInWithEmailAndPassword", {
          ...this.form,
        });
        this.$router.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
    async signInWithGoogle() {
      await this.$store.dispatch("signInWithGoogle");
      this.$router.push("/");
    },
  },
};
</script>
