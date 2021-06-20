import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/class-binding',
    name: 'About',
    component: () => import('../views/ClassBinding.vue'),
  },
  {
    path: '/event-bus',
    name: 'EventBus',
    component: () => import('../views/EventBus.vue'),
  },
  {
    path: '/watchers',
    name: 'Watchers',
    component: () => import('../views/Watchers.vue'),
  },
  {
    path: '/$set',
    name: 'VueSet',
    component: () => import('../views/VueSet.vue'),
  },
  {
    path: '/v-model',
    name: 'VModel',
    component: () => import('../views/VModel.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
