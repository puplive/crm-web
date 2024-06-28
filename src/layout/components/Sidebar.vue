<script setup>
  import { asyncRouterMap } from '@/router/index'
  // console.log(asyncRouterMap);
  const routers = asyncRouterMap;

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
        router="true"
        active-text-color="#ffd04b"
        background-color="#393d49"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item, index) in routers" :key="index">
          <el-sub-menu v-if="item.children" :index="item.path">
            <template #title> 
              <el-icon><Tools /></el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
              <el-menu-item 
                v-for="(child, index) in item.children" 
                :index="child.path" 
                :route="item.path + '/' + child.path"
                :key="index">
                <!-- <el-icon :class="child.meta.icon"></el-icon> -->
                <span>{{ child.meta.title }}</span>
              </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else 
            :index="item.path" 
            :route="item.path">
              <el-icon :class="item.meta.icon"></el-icon>
              <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  <!-- </el-aside> -->
</template>
