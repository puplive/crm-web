import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user',{
  persist: true,
  state: () => ({
    isLogin: false,
    userData: {
      name: '',
      email: ''
    }
  }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    setLogin(b: boolean) {
      this.isLogin = b
    },
  },
})