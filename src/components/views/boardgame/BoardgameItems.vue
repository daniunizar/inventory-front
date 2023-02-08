<template>
<div class="flex flex-col min-h-screen">
  <Header></Header>
  <main class="container mx-auto">
    <h2 class="text-2xl font-medium mb-2">Juegos de Mesa</h2>
    <table class="table">
        <tr>
          <td>Nombre</td>
          <td>Editorial</td>
          <td>Mínimo de jugadores</td>
          <td>Máximo de jugadores</td>
        </tr>
        <tr>
          <th>Arkham Horror</th>
          <th>Flying Games</th>
          <th>1</th>
          <th>8</th>
        </tr>
    </table>
    <button @click="goto('home')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Volver</button>
  </main>
  <Footer></Footer>
</div>

</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import Header from '../../partials/Header.vue';
import Footer from '../../partials/Footer.vue';

export default {
  components: { Header, Footer },
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  methods:{
    goto(code) {
      switch (code) {
        case 'home':
          this.$router.push({ name: 'home' });
          break;      
        default:
          break;
      }
    }
  },
}
</script>

