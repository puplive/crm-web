<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import api from '@/api/Clues'

  const page = reactive({
    page: 1,
    perPage: 10,
  })
  const total = ref(0)
  const searchForm = ref({})
  const tableData = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])


  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    getList()
  }

  const getList = async () => {
    api.getList({status: 3, ...page, ...searchForm.value}).then((res) => {
      if (res.code === 0) {
        tableData.value = res.data.data
        total.value = res.data.total
      }
    })
  }

  const GetClue = (ids: any) => {
    api.getClues({ id: ids}).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('领取成功')
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const GetClues = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要领取的线索')
      return
    }
    GetClue(ids)
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

  api.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })

  const customField: any = ref([])
  const getCustomField = () => {
  api.getCustomField().then(res => {
    if (res.code === 0) {
      customField.value = res.data
      // res.data.forEach((item: any) => {
      //   form.value.customField.push({
      //     [item.key]: customFieldTypes[item.type].value,
      //   })
      // })
    }
  })
}

getCustomField()
  

  getList()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <!-- <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button>
      <el-button size="small" @click="Import">导入</el-button>
      <el-button size="small" @click="Export">导出</el-button>
      <el-button size="small" @click="Move">转移</el-button> -->
      <el-button size="small" @click="GetClues">领取</el-button>
      <!-- <el-button size="small" @click="MoveShare">移至公海</el-button> -->
      <el-button size="small" @click="Del">删除</el-button>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="companyName" label="企业名称" width="180">
          <template #default="scope"> 
            <el-link :href="'/market/clues/info?type=1&id=' + scope.row.id+'&exhibitionId='+scope.row.exhibitionId+'&authUser='+scope.row.authUser"  type="primary">{{ scope.row.companyName }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="exhibitionName" label="展会名称" width="180" />
        <el-table-column prop="exhibitionContact" label="展会联系人" min-width="120" />
        <el-table-column prop="duties" label="职位" />
        <el-table-column prop="phone" label="手机号" min-width="120" />
        <el-table-column prop="recordStatus" label="跟进状态" min-width="120">
          <!-- 0无1电话邀约2客户拜访3初步方案4停滞 -->
          <template #default="scope">{{ {0: '无', 1: '电话邀约', 2: '客户拜访', 3: '初步方案', 4: '停滞'}[scope.row.recordStatus as number]  }}</template>
        </el-table-column>
        <el-table-column prop="authUser" label="持有人" />
        <template v-for="item in customField" :key="item.key">
          <el-table-column :prop="item.key" :label="item.name" min-width="120">
            <!-- <template #default="scope" v-if="item.type === 5 || item.type === 7">
              {{ scope.row[item.key].join('，') }}
            </template> -->
          </el-table-column>
        </template>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="GetClue([scope.row.id])">
              领取
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" 
        :page-sizes="[10, 20, 50]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div>
  </div>

</template>