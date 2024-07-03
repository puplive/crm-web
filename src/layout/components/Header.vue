
<template>
  <el-menu
    router
    class="el-menu-header"
    mode="horizontal"
    background-color="#23262e"
    text-color="#fff"
    active-text-color="#ffd04b"
    :ellipsis="false"
    @select="handleSelect"
  >
    <!-- <el-menu-item index="0"> -->
      
      <a href="/" style="width: 200px; height: 40px">
        <img
          style="width: 200px; height: 40px"
          src=""
          alt="logo"
        />
      </a>
    <!-- </el-menu-item> -->
    <el-menu-item index="0">首页</el-menu-item>
    <el-menu-item index="1">客户管理</el-menu-item>
    <div class="s-flex-grow"></div>
    <el-sub-menu index="2">
      <template #title>
        <img
          style="width: 16px"
          src=""
          alt="user"
        />
      </template>
      <el-menu-item index="2-1">公司信息</el-menu-item>
      <el-menu-item index="2-2">账号信息</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style>
.el-menu-header{
  border-bottom: none !important;
}
</style>
