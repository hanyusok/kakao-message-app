import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OauthView from '../views/OauthView.vue'
import PrivateView from '../views/PrivateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oauth',
      name: 'oauth',
      // redirect: '/private',
      component: OauthView
    },{
      path: '/private',
      name: 'private',
      component: PrivateView
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
