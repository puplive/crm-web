<!-- 展会管理 -->
<script setup>
import { ref } from 'vue'
import TableSearch from '@/components/TableSearch/index.vue'
import { exhibitionList, setStatus, exhibitionDelete } from "@/api/Exhibition"; 
// const Edit = ref()  
  const list = ref([])  
  exhibitionList().then(res => {
    if (res.code === 0) {
      list.value = res.data
    }
  })

  const onChange = (d) => {
    setStatus({id: d.id, status: d.status}).then(res => {
      if (res.code === 0) {
        ElMessage.success('修改成功')
      }else{
        ElMessage.error('修改失败')
        d.status = d.status? 0 : 1
      }
    })
  }

  const onDel = (id) => {
    ElMessageBox.confirm('此操作将永久删除该展会, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      exhibitionDelete({id}).then(res => {
        if (res.code === 0) {
          ElMessage.success('删除成功')
          list.value = list.value.filter(item => item.id!== id)
        }else{
          ElMessage.error('删除失败')
        }
      })
    }).catch(() => {
      // console.log('取消删除')
    })
  }

</script>
<template>
  <div>
    <TableSearch :data="[]"/>
  </div>

  <el-row :gutter="20">
    <el-col :xs="12" :sm="8" :md="6" >
      <RouterLink  class="item add" :to="{path: '/exhibition/add'}">
        <el-icon size="40"><CirclePlus /></el-icon>
        <h3 style="margin-top: 10px;">新建展会</h3>
      </RouterLink >
    </el-col>
    <el-col :xs="12" :sm="8" :md="6" 
      v-for="(item, index) in list" :key="index">
      <div class="item" >
        <div class="title">{{item.exhibitionName}}</div>
        <div class="content">
          <div @click="$router.push({path: `/booth/manage`, query: {id: item.id}})">
            <el-icon size="30"><FolderAdd /></el-icon>
            <p>导入展位信息</p>
          </div>
          <div @click="$router.push({path: `/goods`, query: {id: item.id, title: item.exhibitionName}})">
            <el-icon size="30"><ShoppingCartFull /></el-icon>
            <p>设置物料</p>
          </div>
        </div>
        <div class="actions">
          <el-switch v-model="item.status" :active-value="1" :inactive-value="0" active-text="开启" inactive-text="关闭" inline-prompt 
            @change="onChange(item)"/>
          <!-- <el-button-group>
            <el-button size="small" type="primary">开启</el-button>
            <el-button size="small" type="info" plain>关闭</el-button>
          </el-button-group> -->
          <el-button-group style="margin-left: 10px;">
            <el-button size="small" type="primary" text @click="$router.push({path: `/exhibition/edit`, query: {id: item.id}})"><el-icon><Edit /></el-icon></el-button>
            <el-button size="small" type="danger" text @click="onDel(item.id)"><el-icon><Delete /></el-icon></el-button>
          </el-button-group>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<style scoped>

  .item{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 200px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    margin-bottom: 20px;
    
    border: 1px solid rgba(235, 235, 235, 1);
    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    &.add{
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #333;
    }
    .title{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content{
      display: flex;
      flex: 1;
      >div{
        cursor: pointer;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f9fafb;
        &:first-child{
          margin-right: 10px;
        }
        &:hover{
          background-color: #e9eaeb
        }
        p{
          margin: 0;
          font-size: 14px;
          color: #333;
          margin-top: 10px;
        }
      }
    }
    .actions{
      margin-top: 10px;
    }
  }
</style>