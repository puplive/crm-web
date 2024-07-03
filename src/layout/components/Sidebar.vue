<script lang="ts" setup>
  import { asyncRouterMap } from '@/router/index'
  const routers = asyncRouterMap;
  // console.log(routers)
  const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
  }
  const handleClose =(key, keyPath) =>{
    console.log(key, keyPath);
  }

</script>
<template>
  <!-- <el-aside width="200px"> -->
    <el-scrollbar>
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#393d49"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item, index) in routers" :key="index">
          <template v-if="item.meta.isMenu">
            <el-sub-menu v-if="item.children" :index="item.path">
              <template #title> 
                <!-- <el-icon><Tools /></el-icon> -->
                <span>{{ item.meta.title }}</span>
              </template>
              <template v-for="(child, index) in item.children" :key="index">
                <el-menu-item
                  v-if="child.meta.isMenu"
                  :index="child.path" 
                  :route="child.path"
                  :key="index">
                  <!-- <el-icon :class="child.meta.icon"></el-icon> -->
                  <span>{{ child.meta.title }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
            <el-menu-item v-else 
              :index="item.path" 
              :route="item.path">
                <!-- <el-icon :class="item.meta.icon"></el-icon> -->
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  <!-- </el-aside> -->
</template>
