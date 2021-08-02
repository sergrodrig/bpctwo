// https://tailwindui.com/components/application-ui/forms/form-layouts

<template>
  <div class="min-h-screen bg-white">
    <div class="container max-w-full p-4 mx-auto sm:max-w-lg">
      <form class="space-y-4" @submit.prevent="register">
        <h1 class="text-xl font-bold">Registrarse</h1>
        <!-- Nick -->
        <div>
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >Nick</label
          >
          <input
            id="first-name"
            v-model="form.nick"
            type="text"
            name="first-name"
            autocomplete="given-name"
            class="
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>
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
            type="text"
            name="email-address"
            autocomplete="email"
            class="
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>
        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
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
              focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>
        <!-- avatar -->
        <div>
          <label for="avatar" class="block text-sm font-medium text-gray-700"
            >Avatar</label
          >
          <input
            id="avatar"
            v-model="form.avatar"
            type="text"
            name="avatar"
            autocomplete="text"
            class="
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
            "
          />
        </div>
        <!-- Boton registrarse -->
        <div>
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              px-4
              py-2
              text-sm
              font-medium
              text-white
              bg-indigo-600
              border border-transparent
              rounded-md
              shadow-sm
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Save
          </button>
        </div>
      </form>
      <div>
        <button
          class="px-3 py-2 mt-4 text-white bg-red-500 rounded-lg shadow-xl"
          @click="registerWithGoogle"
        >
          Registrarse con Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import asyncDataStatus from "@/mixins/asyncDataStatus";

export default {
  name: "SignUp",
  mixins: [asyncDataStatus],
  data() {
    return {
      form: {
        nick: "",
        email: "",
        password: "",
        avatar: "",
      },
    };
  },
  async created() {
    this.asyncDataStatus_fetch();
  },
  methods: {
    async register() {
      await this.$store.dispatch("registerUserWithEmailAndPassword", this.form);
      this.$router.push("/");
    },
    async registerWithGoogle() {
      await this.$store.dispatch("signInWithGoogle");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* * {
    border: 1px solid red;
} */
</style>
