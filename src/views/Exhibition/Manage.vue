<!-- 展会管理 -->
<script setup lang="ts">
import { ref } from 'vue'
import TableSearch from '@/components/TableSearch/index.vue'
import { exhibitionList, setStatus, exhibitionDelete, getSearchField } from "@/api/Exhibition"; 
import { EditPen } from '@element-plus/icons-vue';
// import { isDark } from '~/composables/dark'
// const Edit = ref()  
const searchForm: any = ref({})
const searchData: any = ref([])
  const list: any = ref([])  
  const getList = () => {
    exhibitionList({...searchForm.value}).then(res => {
      if (res.code === 0) {
        list.value = res.data
      }
    })
  }
  getList()
  const search = (d: any) => {
    searchForm.value = d
    // page.page = 1
    // console.log({...page, ...searchForm.value})
    getList()
  }
  getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })

  const onChange = (d: any, status: number) => {
    setStatus({id: d.id, status: status}).then(res => {
      if (res.code === 0) {
        ElMessage.success('修改成功')
        d.status = status
      }else{
        ElMessage.error('修改失败')
        d.status = d.status? 0 : 1
      }
    })
  }

  const onDel = (id: any) => {
    ElMessageBox.confirm('此操作将永久删除该展会, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      exhibitionDelete({id}).then(res => {
        if (res.code === 0) {
          ElMessage.success('删除成功')
          list.value = list.value.filter((item: any) => item.id!== id)
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
    <TableSearch :data="searchData" @search="search"/>
  </div>

  <el-row :gutter="20">
    <el-col :sm="12" :md="8" :lg="5" :xl="4" >
      <RouterLink  class="item add" :to="{path: '/exhibition/add'}">
        <el-icon size="40"><CirclePlus /></el-icon>
        <h3 style="margin-top: 10px;font-size: 16px;
      font-weight: bold;">新建展会</h3>
      </RouterLink >
    </el-col>
    <el-col :sm="12" :md="8" :lg="5" :xl="4" 
      v-for="(item, index) in list" :key="index" style="width: 200px;">
      <div class="item" >
        <div class="title">{{item.exhibitionName}}</div>
        <div class="content">
          <div @click="$router.push({path: '/booth/manage', query: {id: item.id}})">
            <!-- <el-icon size="30"><FolderAdd /></el-icon> -->
            <img src="@/assets/images/xinj1.svg" alt="">
            <p>导入展位信息</p>
          </div>
          <!-- <RouterLink :to="{path: '/booth/reserve'}"> -->
          <div @click="$router.push({path: '/goods/manage', query: {id: item.id, title: item.exhibitionName}})">
            <!-- <el-icon size="30"><ShoppingCartFull /></el-icon> -->
            <img src="@/assets/images/shop-car.svg" alt="">
            <p>设置物料</p>
          </div>
        <!-- </RouterLink> -->
        </div>
        <div class="actions">
          <!-- <el-switch color="#409EFF" v-model="item.status" :active-value="1" :inactive-value="0" active-text="开启" inactive-text="关闭" inline-prompt 
            @change="onChange(item)"/> -->
          <div style="display: flex; align-items: center;">
            <template v-if="item.status === 1">
            <el-button size="small" color="#2f9dff" style="margin: 0; border-radius: 2px 0 0 2px;"><span style=" color:#fff">开启</span></el-button>
            <el-button size="small" color="rgba(249, 250, 251, 1)" style="margin: 0; border-radius: 0 2px 2px 0 ; border-left: 0; " @click="onChange(item, 0)"><span style=" color:rgba(145, 158, 171, 1)">关闭</span></el-button>
            </template>
            <template v-else>
            <el-button size="small" color="rgba(249, 250, 251, 1)" style="margin: 0; border-radius: 2px 0 0 2px;" @click="onChange(item, 1)"><span style=" color:rgba(145, 158, 171, 1)">开启</span></el-button>
            <el-button size="small" color="#2f9dff" style="margin: 0; border-radius: 0 2px 2px 0 ; border-left: 0; "><span style=" color:#fff">关闭</span></el-button>
            </template>
          </div>
          <div style="margin-left: 10px; display: flex; align-items: center;">
            <el-icon size="18" color="#2f9dff" style="margin-left: 20px; cursor: pointer;" :disabled="item.status === 1" @click="$router.push({path: `/exhibition/edit`, query: {id: item.id}})"><EditPen /></el-icon>
            <el-icon size="18" color="#2f9dff" style="margin-left: 20px; cursor: pointer;" @click="onDel(item.id)"><Delete /></el-icon>
            <!-- <el-button color="#409EFF" text :disabled="item.status === 1" @click="$router.push({path: `/exhibition/edit`, query: {id: item.id}})"><el-icon size="18" color="#409EFF"><EditPen /></el-icon></el-button> -->
            <!-- <el-button color="#409EFF" text  @click="onDel(item.id)"><el-icon size="18" color="#409EFF"><Delete /></el-icon></el-button> -->
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<style scoped>
  /* .el-col-lg-5{
    width: 20%;
  } */
  @media only screen and (min-width: 1200px) {
    .el-col-lg-5 {
        max-width: 20%;
    }
  }

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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
        /* &:hover{
          background-color: #e9eaeb
        } */
        img{
          height: 38px;
        }
        p{
          margin: 0;
          font-size: 14px;
          color: #2f9dff;
          margin-top: 10px;
        }
      }
    }
    .actions{
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>