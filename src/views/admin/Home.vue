<script>
import useMainStore from "@/store/main.js"
import ModalEditImage from "@/views/edit_image/ModalEditImage.vue"
export default {
  name: "Home",
  components: {
    ModalEditImage
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
  <ModalEditImage />
</template>