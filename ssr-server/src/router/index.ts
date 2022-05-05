import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import MemoBaseLayout from '@/layouts/MemoLayout.vue'
import MemoList from '@/pages/memo/MemoList.vue'
import MemoView from '@/pages/memo/MemoViewPage.vue'
import MemoCreate from '@/pages/memo/MemoCreate.vue'
import { metas } from '@/metas/index.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {...metas['/']}// eslint-disable-line
  },
  {
    path: '/memo',
    name: 'MemoBaseLayout',
    component: MemoBaseLayout,
    children: [
      {
        path: '/memo',
        name: 'MemoList',
        component: MemoList,
        meta: {...metas['/memo']}// eslint-disable-line
      },
      {
        path: '/memo/view',
        name: 'MemoView',
        component: MemoView,
        meta: {...metas['/memo/view']}// eslint-disable-line
      },
      {
        path: '/memo/new',
        name: 'MemoNew',
        component: MemoCreate,
        meta: {...metas['/memo/new']}// eslint-disable-line
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
