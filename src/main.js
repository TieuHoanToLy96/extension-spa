import { createApp } from "vue"
import App from "@/App.vue"

import "@/styles/main.sass"

import router from "@/router"
import vuetify from "@/plugins/vuetify.js"
import piana from "@/plugins/piana.js"

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(piana)
app.mount("#app")
