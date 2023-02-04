<template>
  <div class="bg-gray-900 min-h-screen">
    <header class="bg-gray-800 p-6 text-white text-center">Header</header>
    <main class="flex items-center justify-center">
      <form class="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
        <input v-model="email" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="email" placeholder="Email" />
        <input v-model="password" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="password" placeholder="Password" />
        <button @click.prevent="login" class="block my-4 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Login</button>
      </form>
      <div class="mt-4 text-center">
        <a class="text-gray-600 hover:text-gray-800" href="#">Register</a>
        <a class="text-gray-600 hover:text-gray-800 ml-4" href="#">Forgot password?</a>
      </div>
    </main>
    <footer class="bg-gray-800 p-6 text-white text-center">Footer</footer>
  </div>
</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import AuthService from "@/services/AuthService.js";

export default {
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  data(){
    return {
      email: "",
      password: "",
    }
  },
  props: {
    token: {
      type: String,
      default: null,
    },
  },
  methods:{
    async login() {
        // Start LOGIN
        try {
          const credentials = {
            email: this.email,
            password: this.password
          };

          await AuthService.login(credentials).then(loginResponse => {
            // Get user and token info from login response
            // const user = loginResponse.user;
            const token = loginResponse.token;
            // Update a new state
            this.sessionStore.login(token);
            // Redirect
            this.$router.push({name: 'home'});
          });
        }
        catch (error) {
          console.log(error);
          console.log("ERROR al hacer login");
        }
      },
  }
}
</script>

