<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<div class="flex flex-col min-h-screen">
  <header class="bg-gray-800 p-4">
    <h1 class="text-white text-2xl font-medium">Inventory</h1>
  </header>
  <main class="flex-1 p-4">
    <h2 class="text-2xl font-medium mb-2">Escoge tu inventario</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="@/assets/images/books.jpg" alt="Image books" class="w-full">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Libros</div>
      <p class="text-gray-700 text-base">
        Registra, ordena y comparte tu biblioteca personal.
      </p>
      <button @click="goto('book_items')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Acceder</button>
    </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="@/assets/images/board_games.jpg" alt="Image boardgames" class="w-full">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Juegos de Mesa</div>
      <p class="text-gray-700 text-base">
        Clasifica tus juegos de mesa con etiquetas e incluye valoraciones y comentarios.
      </p>
      <button @click="goto('boardgame_items')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Acceder</button>
    </div>
  </div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img src="@/assets/images/recipes.jpg" alt="Image recipes" class="w-full">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Recetas de Cocina</div>
      <p class="text-gray-700 text-base">
        Mantén ordenadas todas tus recetas de cocina y realiza búsquedas por ingredientes.
      </p>
      <button @click="goto('recipe_items')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Acceder</button>
    </div>
  </div>
</div>
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
      console.log("click");
      console.log(code);
      switch (code) {
        case 'book_items':
          this.$router.push({ name: 'book.items' });
          break;
        case 'boardgame_items':
          this.$router.push({ name: 'boardgame.items' });
          break;
        case 'recipe_items':
          this.$router.push({ name: 'recipe.items' });
          break;        
        default:
          break;
      }
    }
  },
}
</script>

