import { defineStore } from "pinia"

export default defineStore("main", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCounter() {
      this.counter = this.counter * 2
    }
  },
  actions: {
    reset() {
      this.counter = 0
    },
    incrementCounter() {
      this.counter = this.counter + 2
    }
  },
})