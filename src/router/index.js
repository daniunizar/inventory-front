import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../components/views/no-auth/LoginView.vue'
import RegisterView from '../components/views/no-auth/RegisterView.vue';
import BookItems from '../components/views/book/bookItems.vue';
import BoardgameItems from '../components/views/boardgame/BoardgameItems.vue';
import RecipeItems from '../components/views/recipe/RecipeItems.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/book/items',
      name: 'book.items',
      component: BookItems
    },
    {
      path: '/boardgame.items',
      name: 'boardgame.items',
      component: BoardgameItems
    },
    {
      path: '/recipe.items',
      name: 'recipe.items',
      component: RecipeItems
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
