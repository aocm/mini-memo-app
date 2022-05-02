import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import MemoBaseLayout from '@/pages/memo/BaseLayout.vue'
import TopPage from '@/pages/memo/TopPage.vue'
import MemoView from '@/pages/memo/MemoViewPage.vue'
import { metas } from '@/metas/index.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {...metas['/']}
  },
  {
    path: '/memo',
    name: 'MemoBaseLayout',
    component: MemoBaseLayout,
    children: [
      {
        path: '/memo',
        name: 'TopPage',
        component: TopPage,
        meta: {...metas['/']}
      },
      {
        path: '/memo/view',
        name: 'MemoView',
        component: MemoView,
        meta: {...metas['/']}
      },
      {
        path: '/memo/new',
        name: 'MemoView',
        component: MemoView, // todo
        meta: {...metas['/']}
      },
    ]
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
