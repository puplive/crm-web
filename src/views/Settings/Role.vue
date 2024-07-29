<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import { role, getMenuAll } from '@/api/user'

  // const page = reactive({
  //   page: 1,
  //   perPage: 10,
  // })
  // const total = ref(0)
  // const searchForm = ref({})
  const list: any = ref([])
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const roleId: any = ref('')

  const checkList = ref([])

  const getList = async () => {
    role.getList().then((res: any) => {
      if (res.code === 0) {
        list.value = res.data
        roleId.value = res.data[0].id
        // getData()
      }
    })
  }

  const getData = async () => {
    role.getData({roleId: roleId.value}).then((res: any) => {
      if (res.code === 0) {
        checkList.value = res.data
        // checkList
      }
    })
  }
  getMenuAll().then((res: any) => {
    if (res.code === 0) {
      tableData.value = res.data
    }
  })


  const add = () => {
    role.add({ roleId: roleId.value, menuId: checkList.value }).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('成功')
        // getList()
      }else {
        ElMessage.error(res.msg)
        getData()
      }
    }).catch(() => {
      getData()
      // ElMessage.error('请求失败')
    })
  }


  watch(roleId, () => {
    getData()
  })
  // watch(checkList, () => {
  //   console.log(checkList.value)
  //   role.add({ roleId: roleId.value, menuId: checkList.value }).then((res: any) => {
  //     if(res.code === 0) {
  //       ElMessage.success('修改成功')
  //     }else {
  //       ElMessage.error(res.msg)
  //     }
  //   })
  // })


  getList()
  
</script>
<template>
  <div class="role-main" style="height: 100%;">
    <div class="l">
      <div class="item" v-for="(item) in list" :class="{active: item.id == roleId}" @click="roleId = item.id">
        <div>{{ item.name }}</div>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    <div class="r">
      <el-checkbox-group v-model="checkList" @change="() => { add(); }">
      <el-table 
        ref="tableRef" 
        :data="tableData" 
        border 
        table-layout="fixed" 
        height="100%"
        header-row-class-name="s-table-header">
        <el-table-column prop="" label="一级模块" min-width="150">
          <template #default="scope">
            <el-checkbox :label="scope.row.meta.title" :value="scope.row.id" v-model="scope.row.id" />
          </template>
        </el-table-column>
        <el-table-column label="二级模块" min-width="400">
          <template #default="scope">
            <template v-for="item in scope.row.child" :key="item.id">
              <el-checkbox :label="item.meta.title" :value="item.id" v-model="item.id" />
            </template>
          </template>
        </el-table-column>
      </el-table>
      </el-checkbox-group>
    </div>
  </div>
</template>
<style scoped>
  .role-main {
    display: flex;
    .l{
      width: 300px;
      border: 1px solid var(--el-border-color-lighter);
      margin-right: 20px;
      .item{
        border-bottom: 1px solid var(--el-border-color-lighter);
        padding: 15px 20px;
        cursor: pointer;
        &.active{

          color: var(--el-color-primary);
        }
        p{
          /* margin-top: 10px; */
          color: var(--el-text-color-secondary);
          font-size: 14px;
        }
      }
    }
    .r{
      flex: 1;
      min-width: 0;
    }
  }
</style>