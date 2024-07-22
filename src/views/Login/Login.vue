<template>
  <div class="login-main">
    <vHeader></vHeader>
    <div class="login-container">
      <div class="login-box">
        <p class="p1">欢迎登录</p>
        <p class="p2">会展云-招展系统</p>
        <div class="login-form">
          <el-form :model="data" size="large" style="max-width: 600px">
            <el-form-item>
              <el-input v-model="data.account" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="data.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
            <div class="login-footer">
              <el-button link type="primary" @click="router.push('/register')">注册账号</el-button>
              <el-link type="primary" href="/handbooks.pdf" target="_blank">操作手册</el-link>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>
<script lang="ts" setup>
  import vHeader from './components/Header.vue'
  import vFooter from './components/Footer.vue'
  import { loginApi } from "@/api/user";
  import { reactive } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { userStore } from '@/stores/user'
  const store = userStore()

  const router = useRouter()

  const data = reactive({ 
    account: '', 
    password: '' 
  })

  const login = () => {
    loginApi(data).then(res => {
      if (res.code === 0) {
        ElMessage.success('登录成功')
        store.SET_TOKEN(res.data.token)
        // store.SET_MENU()
        router.push('/')
      } else {
        ElMessage.error(res.msg)
      }
    })
  }

</script>

<style scoped>
.login-container{
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 200px;
  background: url('http://chinafeed.exposaas.com/uploads/web/20221009/f94b570e37f6a9ce27b0b7963ff0a419.jpg') no-repeat center center;
  background-size: cover;
}
.login-box {
  .p1{
    text-align: center;
    color: #fff;
  }
  .p2{
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    /* margin-top: 20px; */
    margin-bottom: 20px;
  }
  .login-form{
    width: 400px;
    /* margin: 0 auto; */
    padding: 30px;
    background-color: #fff; 
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .login-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
}
@media (min-width: 1024px) {
  
}
</style>
