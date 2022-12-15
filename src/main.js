import { createApp } from 'vue'
import VuePancakeIcons from 'vue-pancake-icons'
import App from '@/App.vue'
import router from "@/router"
import vuetify from "@/styles/vuetify"

import "@/styles/index.css"

const app = createApp(App)
app.use(router)
app.use(VuePancakeIcons)
app.use(vuetify)
app.mount('#app')
