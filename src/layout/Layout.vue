<template>
    <el-container class="common-layout">
      <el-header>
        <vHeader/>
      </el-header>
      
      <el-container>
        <el-aside width="200px">
          <vSidebar/>
        </el-aside>
        
        <el-main class="main-container">
          <!-- <el-scrollbar> -->
          <router-view></router-view>
          <!-- </el-scrollbar> -->
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup>
  import vHeader from './components/Header.vue'
  import vSidebar from './components/Sidebar.vue'
  // export default {
  //   name: 'Layout',
    
  // }
</script>
<style>
  .common-layout {
    height: 100%;
    .el-header {
      /* height: 60px; */
      /* line-height: 60px; */
      background-color: #23262e;
      /* padding: 0 20px; */
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }
   .el-aside {
      background-color: #393d49;
    }
   /* .el-main {
      background-color: #fff; 
      min-height: 100%;
   } */
   .main-container{
    height: calc(100vh - 60px);
    box-sizing: border-box;
   }
  }

</style>