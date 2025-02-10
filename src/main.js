import { createApp } from 'vue'
import pinia from '@/stores/index'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import router from './router'
import routerGuard from '@/accessControl/index'

routerGuard.setup()
const app = createApp(App)
app.use(router)
app.use(ArcoVue)
app.use(pinia)
app.mount('#app')
