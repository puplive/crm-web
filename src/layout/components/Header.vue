
<template>
  <!-- <el-menu
    router
    class="el-menu-header"
    mode="horizontal"
    background-color="#23262e"
    text-color="#fff"
    active-text-color="#ffd04b"
    :ellipsis="false"
    @select="handleSelect"
  >
      
      <a href="/" style="min-width: 200px; height: 60px; padding: 10px 0;">
        <img
          style="height: 40px; "
          src="@/assets/logo.svg"
          alt="logo"
        />
      </a>
    <div class="s-flex-grow"></div>
    <el-sub-menu index="1">
      <template #title>
        <img
          style="height: 30px"
          src="@/assets/logo.svg"
          alt="user"
        />
      </template>
      <el-menu-item index="1">公司信息</el-menu-item>
      <el-menu-item index="2">账号信息</el-menu-item>
      <el-menu-item index="3">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu> -->
  <div class="header">
    <div><img src="@/assets/logo.svg" alt=""></div>
    <div class="s-flex-grow"></div>
    <div>
      <el-dropdown trigger="hover" @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="@/assets/logo.svg" alt="" style="height: 30px; margin-right: 10px" />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu style="width: 150px;">
            <el-dropdown-item command="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { userStore } from "@/stores/user";
  const handleCommand = (command: string | number | object) => {
    // ElMessage(`click on item ${command}`)
    if (command === 'out') {
      // 退出登录
      userStore().LOGOUT();
    }
  }

  // const activeIndex = ref('1')
  // const handleSelect = (key: string, keyPath: string[]) => {
  //   // console.log(key, keyPath)
  // }
</script>

<style>
.header{
  /* border-bottom: none !important; */
  height: 60px;
  display: flex;
  align-items: center;
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
  }
}
</style>
