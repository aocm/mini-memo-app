import App from '@/App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  router.beforeEach((to, from) => {
    const isServer = import.meta.env.SSR
    if(!isServer) {window.document.title = to.meta.title || 'Apps'}
  })
  app.use(ElementPlus)
  app.use(router)
  return { app, router }
}
