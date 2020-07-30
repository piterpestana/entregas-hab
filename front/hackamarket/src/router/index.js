import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },

  {
    path: '/add-clients',
    name: 'AddClients',

    component: () => import('../views/AddClients.vue')
  },

  {
    path: '/see-clients',
    name: 'SeeClients',

    component: () => import('../views/SeeClients.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import( '../views/SeeProducts.vue')
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import( '../views/Error.vue')
  },

  
]

const router = new VueRouter({
  routes
})

export default router
