<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref } from 'vue'
  import { getDetail } from '@/api/Exhibitor'
  import { useRouter, useRoute } from 'vue-router'



  const router = useRouter()
  const route = useRoute()

  const data: any = ref({
    exhibition: [],
  })
  
  const getList = async () => {
    getDetail({id: route.query.id}).then((res: any) => {
      if (res.code === 0) {
        data.value = res.data
        // roleId.value = res.data[0].id
        // getData()
      }
    })
  }

  getList()
  
</script>
<template>
  <div class="org-main">
    <div class="l">
      <el-form>
        <div class="title">账户信息</div>
        <el-form-item label="用户名">{{ data.account }}</el-form-item>
        <el-form-item label="注册人">{{ data.userName }}</el-form-item>
        <el-form-item label="手机号">{{ data.phone }}</el-form-item>
        <el-form-item label="注册邮箱">{{ data.email }}</el-form-item>
        <!-- <el-form-item label="密码">{{ data. }}</el-form-item> -->
        <!-- <div class="title" style="margin-top: 10px;">关联企业</div> -->
        <!-- <el-form-item label="">{{ data. }}</el-form-item> -->
      </el-form>
    </div>
    <div class="r">
      <div class="title">参展历史</div>
      <div class="s-flex-auto" style="min-height: 0;">
        <el-table 
          ref="tableRef" 
          :data="data.exhibition" 
          border 
          table-layout="fixed" 
          height="100%"
          header-row-class-name="s-table-header">
          <el-table-column prop="exhibitionName" label="展会名称" />
          <el-table-column prop="city" label="城市" />
          <el-table-column prop="hallName" label="展馆"/>
          <el-table-column prop="startTime" label="开展时间" />
          <!-- <el-table-column prop="address" label="参展企业" /> -->
        </el-table>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .org-main {
    display: flex;
    height: 100%;
      .title{
         font-size: 16px;
         margin-bottom: 10px;
         font-weight: bold
      }
      .l{
        width: 300px;
        /* border: 1px solid var(--el-border-color-lighter); */
        margin-right: 20px;
        .el-form-item{
          margin-left: 10px;
          margin-bottom: 0;
        }

      }
      .r{
        flex: 1;
        min-width: 0;
      }
  }
</style>