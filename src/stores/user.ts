import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

export const userStore = defineStore('user',{
  persist: true,
  state: () => ({
    Authorization: '',
    menu: [],
    // userData: {
    //   name: '',
    //   email: ''
    // }
  }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    setToken(token: string) {
      this.Authorization = token
    },
    logout() {
      this.Authorization = ''
      console.log(useRouter)
      useRouter().push('/login')
    },
    setMenu(data: any) {
      this.menu = data
    },
    setUserData(data: any) {
      // this.userData = data
    }
  },
})