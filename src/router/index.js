import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue'
import Comunas from '../views/Comunas.';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/comunas',  name: 'Comunas',  component: Comunas}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
