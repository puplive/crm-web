<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  // import TableSearch from '@/components/TableSearch/index.vue'
  import api from '@/api/Contract'

  const page = reactive({
    page: 1,
    perPage: 10,
  })
  const total = ref(0)
  const searchForm = ref({})
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])


  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    getList()
  }

  const getList = async () => {
    api.getList().then((res) => {
      if (res.code === 0) {
        tableData.value = res.data
        // total.value = res.data.total
      }
    })
  }


  const Export = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要导出的数据')
      return
    }
    // api.getClues({ id: ids}).then((res: any) => {
    //   if(res.code === 0) {
    //     ElMessage.success('领取成功')
    //     getList()
    //   }else {
    //     ElMessage.error(res.msg)
    //   }
    // })
  }

  const Del = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要删除的线索')
      return
    }
    ElMessageBox.confirm('确定删除所选线索？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      api.del({ id: ids}).then((res) => {
        if(res.code === 0) {
          ElMessage.success('删除成功')
          getList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {
    })
  }

  // api.getSearchField().then((res) => {
  //   if(res.code === 0) {
  //     searchData.value = res.data
  //   }
  // })
  

  getList()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <!-- <div></div> -->
    <!-- <TableSearch :data="searchData" @search="search"/> -->
    <!-- <div class="s-table-operations"> -->
      <!-- <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button> -->
      <!-- <el-button size="small" @click="Import">导入</el-button> -->
      <!-- <el-button size="small" @click="Export">导出</el-button> -->
      <!-- <el-button size="small" @click="Del">删除</el-button> -->
    <!-- </div> -->
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column prop="name" label="标题" width="180" />
        <el-table-column prop="" label="类型" />
        <el-table-column prop="" label="编号" />
        <el-table-column prop="" label="开始日期" />
        <el-table-column prop="" label="结束日期" />
        <el-table-column prop="" label="签约日期" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <!-- <el-button link type="primary" size="small" @click="$router.push('/market/clues/edit/' + scope.row.id)">编辑</el-button>
            <el-button link type="primary" size="small" @click="Del([scope.row.id])">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" 
        :page-sizes="[10, 20, 50]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div> -->
  </div>

</template>