import { createApp } from "vue"
import App from "@/App.vue"

import "@/styles/main.sass"

import router from "@/router"
import vuetify from "@/plugins/vuetify.js"
import piana from "@/plugins/piana.js"

import { DatePicker, Modal, Divider } from "ant-design-vue"
import { CloseSvg, TextResize, MagicWand, AdjustmentsHorizontal, IntersectSvg, ScissorsSvg } from "vue-pancake-icons"

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(piana)

//antdesign
app.use(DatePicker)
app.use(Modal)
app.use(Divider)

// vue pancake icon
app.use(CloseSvg)
app.use(TextResize)
app.use(MagicWand)
app.use(AdjustmentsHorizontal)
app.use(IntersectSvg)
app.use(ScissorsSvg)

app.mount("#app")


