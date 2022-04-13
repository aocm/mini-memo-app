import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import Home from '../pages/HomePage.vue'
import About from '../pages/AboutPage.vue'
import Yamabiko from '../pages/YamabikoPage.vue'
import YamabikoResponse from '../components/YamabikoResponse.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/yamabiko',
    name: 'Yamabiko',
    component: Yamabiko,
  },
  {
    path: '/yamabiko-res',
    name: 'YamabikoResponse',
    component: YamabikoResponse,
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
