<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<template>
  <el-config-provider :locale="zhCn">
  <RouterView />
  </el-config-provider>
</template>

<style>
  html,
  body {
    padding: 0 !important;
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
