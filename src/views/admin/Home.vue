<script>
import useMainStore from "@/store/main.js"
import { PlugConnected } from "vue-pancake-icons"

export default {
  name: "Home",
  components: {
    PlugConnected
  },
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  methods: {
    increament() {
      this.mainStore.incrementCounter()
    }
  }
}
</script>

<template>
  <v-btn variant="tonal" @click="increament">
    <PlugConnected /> Button {{ mainStore.counter}}
  </v-btn>

  <img class="w-full"
    src="https://statics.pancake.vn/web-media/fb/19/0a/85/ff89227869459fd35b84b5f3537c7718a8a9d1308d686aa246b7d2ec.png" />
</template>