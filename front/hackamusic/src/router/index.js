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
    path: '/Topartist',
    name: 'TopArtist',
    component: () => import( '../views/TopArtist.vue')
  },
  {
    path: '/Toptracks',
    name: 'TopTracks',
    component: () => import( '../views/Tracks.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/*',
    name: 'Error',
    component: () => import( '../views/Error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
