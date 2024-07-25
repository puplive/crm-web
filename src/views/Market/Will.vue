<!-- 销售线索列表 -->
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import TableSearch from '@/components/TableSearch/index.vue'
import Move from './components/Move.vue'
import api from '@/api/Clues'
import { exhibitionList } from '@/api/Exhibition'
// import { getSponsorUser } from '@/api/user'


const zh_name = ref('全部')
const exhibitionId = ref('')

const page = reactive({
  page: 1,
  perPage: 10,
})
const total = ref(0)
const searchForm = ref({})
const tableData = ref([])
const tableRef: any = ref(null)
const searchData = ref([])
const exhibitionData: any = ref([])


const search = (d: any) => {
  searchForm.value = d
  page.page = 1
  // console.log({...page, ...searchForm.value})
  getList()
}

const getList = async () => {
  api.getList({ status: 2, exhibitionId: exhibitionId.value, ...page, ...searchForm.value }).then((res) => {
    if (res.code === 0) {
      tableData.value = res.data.data
      total.value = res.data.total
    }
  })
}

const merge: any = reactive({
  show: false,
  data: [],
  masterId: '',
  mergeId: '',
  ref: null,
  set: () => {
    let d = tableRef.value.getSelectionRows()
    if (d.length !== 2) {
      ElMessage.warning('请选择需要合并的线索，必须选择两个')
      return
    }
    merge.show = true
    merge.data = d
    merge.masterId = d[0].id
    merge.mergeId = d[1].id
  },
  sub: () => {
    api.merge({ 
      masterId: merge.masterId, 
      mergeId: merge.mergeId 
    }).then((res) => {
      if (res.code === 0) {
        ElMessage.success('合并成功')
        merge.show = false
        getList()
      } else {
        ElMessage.error(res.msg)
      }
    })
  }
})

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

    api.del({ id: ids }).then((res) => {
      if (res.code === 0) {
        ElMessage.success('删除成功')
        getList()
      } else {
        ElMessage.error(res.msg)
      }
    })
  }).catch(() => {
  })
}

const moveRef: any = ref(null)
const changeUser = () => {
  let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
  if (ids.length === 0) {
    ElMessage.warning('请选择需要转移的线索')
    return
  }
  moveRef.value.setMove(ids)

}

const MoveShare = () => {
  let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
  if (ids.length === 0) {
    ElMessage.warning('请选择需要移至公海的线索')
    return
  }
  api.changePublic({ id: ids }).then((res) => {
    if (res.code === 0) {
      ElMessage.success('移至公海成功')
      getList()
    } else {
      ElMessage.error(res.msg)
    }
  })
}

const Import = () => {
  console.log('import')
}

const Export = () => {
  console.log('export')
}

api.getSearchField().then((res) => {
  if (res.code === 0) {
    searchData.value = res.data
  }
})
exhibitionList().then((res) => {
  if (res.code === 0) {
    exhibitionData.value = [{ exhibitionName: '全部', id: '' }, ...res.data]
  }
})

const handleCommand = (command: any) => {
  // console.log(command)
  zh_name.value = command.exhibitionName
  exhibitionId.value = command.id
  getList()
}

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
    <div class="" style="margin-bottom: 10px;">
      <el-dropdown @command="handleCommand" style="outline: none;">
        <span class="el-dropdown-link">
          {{ zh_name }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, i) in exhibitionData" :key="i" :command="item">{{ item.exhibitionName
              }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <TableSearch :data="searchData" @search="search" />
    <div class="s-table-operations">
      <el-button size="small" @click="changeUser">转移</el-button>
      <el-button size="small" @click="MoveShare">移至公海</el-button>
      <el-button size="small" @click="merge.set">合并</el-button>
      <el-button size="small" @click="Export">导出</el-button>
      <el-button size="small" @click="Del">删除</el-button>
      <el-button size="small" @click="$router.push('/market/clues/add')">新建线索</el-button>
      <el-button size="small" @click="Import">导入线索</el-button>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" height="100%"
        show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column prop="companyName" label="公司名称" width="180">
          <template #default="scope"> 
            <el-link :href="'/market/clues/info?type=2&id=' + scope.row.id+'&exhibitionId='+scope.row.exhibitionId+'&authUser='+scope.row.authUser"  type="primary">{{ scope.row.companyName }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="exhibitionContact" label="联系方式" width="180" />
        <el-table-column prop="duties" label="职务" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="recordTime" label="记录时间" width="180" />
        <el-table-column prop="recordText" label="记录内容" />
        <el-table-column prop="authUser" label="授权人" />
        <template v-for="item in customField" :key="item.key">
          <el-table-column :prop="item.key" :label="item.name">
            <!-- <template #default="scope" v-if="item.type === 5 || item.type === 7">
              {{ scope.row[item.key].join('，') }}
            </template> -->
          </el-table-column>
        </template>
        <el-table-column fixed="right" label="操作" width="200">
          <template #default="scope">
            <!-- <el-button link type="primary" size="small" @click="$router.push({name: 'BoothReserve', query: {clueId: scope.row.id, exhibitionId: scope.row.exhibitionId, exhibitorId: scope.row.exhibitorId, hallCode: scope.row.hallCode}})"> -->
            <el-button 
              link type="primary" size="small"
              @click="$router.push({ name: 'HallLayout', query: { clueId: scope.row.id, exhibitionId: scope.row.exhibitionId, exhibitorId: scope.row.exhibitorId } })">
              {{scope.row.orderPositionStatus?'新增':''}}展位预定
            </el-button>
            <el-button
              link type="primary" size="small"
              @click="$router.push({ name: 'GoodsReserve', query: { clueId: scope.row.id, exhibitionId: scope.row.exhibitionId, exhibitorId: scope.row.exhibitorId, hallCode: scope.row.hallCode, positionCode: scope.row.positionCode } })">
              {{scope.row.orderMaterialStatus?'新增':''}}物料预定
            </el-button>
            <!-- <el-button link type="primary" size="small" @click="willSet(scope.row)">
              移除意向
            </el-button> -->

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50]" :total="total"
        v-model:current-page="page.page" v-model:page-size="page.perPage" @change="getList" />
    </div>
  </div>


  <el-dialog v-model="merge.show" title="合并销售线索" width="500" draggable>
    <div style="font-size: 15px;margin-bottom: 2px; color: #444;">请在下列线索中选择主线索，合并后：</div>
    <p>1. 被合并线索下的动态迁移到主线索下</p>
    <p>2. 合并后的线索以主线索为主，并保留两条线索的所有记录</p>
    <el-table :data="merge.data" border show-overflow-tooltip
        header-row-class-name="s-table-header"
        @current-change="(val: any)=>{ let old = merge.masterId;  merge.masterId = val.id; merge.mergeId = old; }">
      <el-table-column label="主线索" width="70">
        <template #default="scope">
          <el-radio :value="scope.row.id" v-model="merge.masterId"></el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="companyName" label="公司名称"/>
      <el-table-column prop="exhibitionName" label="展会姓名"/>
      <!-- <el-table-column prop="recordTime" label="创建时间"/> -->
      <el-table-column prop="authUser" label="线索所有人" />
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="merge.show = false">取消</el-button>
        <el-button type="primary" @click="merge.sub">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <Move ref="moveRef" @callback="getList"></Move>

</template>

<style scoped>
.example-showcase .el-dropdown+.el-dropdown {
  margin-left: 15px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>