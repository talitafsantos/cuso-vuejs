import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BolsistasVue from '@/views/Bolsista/Bolsistas.vue'
import DetalhesBolsistasVue from '@/views/Bolsista/DetalhesBolsistas.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar-bolsistas',
      name: 'lista',
      component: BolsistasVue,
      children: [
        {
          path: '/listar-bolsistas/:id',
          name: 'detalhes',
          component: DetalhesBolsistasVue,
        },
      ]
    },
    // { path: '/listar-bolsistas', name: 'lista', component: BolsistasVue },
    // { path: '/listar-bolsistas/:id', name: 'detalhes', component: DetalhesBolsistasVue },
  
  ]
})

export default router
