import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import About from '@/pages/AboutPage.vue'
import { metas } from '@/metas/index.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {...metas['/']}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {...metas['/about']}
  },
]

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
}
