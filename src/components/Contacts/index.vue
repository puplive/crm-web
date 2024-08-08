<script lang="ts" setup>
  import { ref, defineExpose } from 'vue'

  const isShow = ref(false)
  const setShow = (show: boolean) => {
    isShow.value = show
  }
  defineExpose({
    setShow,
  })
</script>
<template>
  <el-dialog v-model="isShow" width="500" :show-close="false" :center="true">
    <div class="contact-content">
        <p>企微客服</p>
        <img style="width: 176px; margin-top: 5px; margin-bottom: 10px" src="@/assets/images/img-qywx.png" alt="">
        <p>咨询热线</p>
        <p style="font-size: 30px; margin-bottom: 20px; margin-top: 5px">010-86460766-861</p>
        <p>咨询邮箱</p>
        <p style="font-size: 30px; margin-top: 5px">tangyingjie@exposcm.com</p>
    </div>
  </el-dialog>
</template>
<style scoped>
  .contact-content {
    padding: 50px; 
    background: #fff; 
    text-align:center;
    color: #303133;
    font-size: 18px;
    P{
      font-weight: 600;
    }
  }
</style>