<template>
<div class="flex flex-col min-h-screen">
  <header class="bg-gray-800 p-4">
    <h1 class="text-white text-2xl font-medium">Inventory</h1>
  </header>
  <main class="flex-1 p-4">
    <h2 class="text-2xl font-medium mb-2">En construcción</h2>
    <button @click="goto('home')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Volver</button>
  </main>
  <footer class="bg-gray-800 p-4 text-white text-center">
    Un proyecto de Stukita
  </footer>
</div>

</template>

<script>
import { useSessionStore } from "@/stores/session-store";

export default {
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  methods:{
    goto(code) {
      console.log("Has clicado");
      try{
        switch (code) {
          case 'home':
            this.$router.push({ name: 'home' });
            break;      
          default:
            break;
        }
      }catch(error){
        console.log(error);
      }
    }
  },
}
</script>

