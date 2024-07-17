// import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
// import { useRouter, useRoute } from 'vue-router'

export const userStore = defineStore('user',{
  persist: true,
  state: () => ({
    TOKEN: '',
    USER_INFO: {},
    MENU: [],
  }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    SET_TOKEN(token: string) {
      this.TOKEN = token
    },
    LOGOUT() {
      this.TOKEN = ''
      this.MENU = []
      location.href = '/login'
    },
    SET_MENU(data: any) {
      this.MENU = data
    },
    SET_USER_INFO(data: any) {
      this.USER_INFO = data
    }
  },
})