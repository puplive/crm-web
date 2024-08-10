<!-- 销售线索列表 -->
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import TableSearch from '@/components/TableSearch/index.vue'
import ExhibitionChange from '@/views/Market/components/ExhibitionChange.vue'
import Move from './components/Move.vue'
import api from '@/api/Clues'
import { isOrder } from '@/api/Exhibition'

import { userStore } from "@/stores/user";
import { useRouter } from 'vue-router'

const router = useRouter()
const _store = userStore()
const exhibitionInfo: any = ref(_store.EXHIBITION_INFO)
watch(() => _store.EXHIBITION_INFO,(val:any, oldVal)=>{
  if(val.id!== oldVal.id){
    exhibitionInfo.value = val
    getList()
  }
}, {deep: true})

const page = reactive({
  page: 1,
  perPage: 20,
})
const total = ref(0)
const searchForm = ref({})
const tableData = ref([])
const tableRef: any = ref(null)
const searchData = ref([])


const search = (d: any) => {
  searchForm.value = d
  page.page = 1
  // console.log({...page, ...searchForm.value})
  getList()
}

const getList = async () => {
  api.getList({ status: 2, exhibitionId: exhibitionInfo.value.id, ...page, ...searchForm.value }).then((res) => {
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
      ElMessage.error('请选择需要合并的线索，必须选择两个')
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
    ElMessage.error('请选择需要删除的线索')
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
    ElMessage.error('请选择需要转移的线索')
    return
  }
  moveRef.value.setMove(ids)

}

const MoveShare = () => {
  let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
  if (ids.length === 0) {
    ElMessage.error('请选择需要移至公海的线索')
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
    api.clueExport({status:2}).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('导出成功')
        window.open(res.data.url, '_self')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

api.getSearchField().then((res) => {
  if (res.code === 0) {
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
      getColumns()
    }
  })
}
const setBooth = (row: any) => {
  isOrder({exhibitionId: row.exhibitionId}).then(res => {
    if(res.code === 0 ){
      router.push({ name: 'HallLayout', query: { clueId: row.id, exhibitionId: row.exhibitionId, exhibitorId: row.exhibitorId } })
    }else{
      ElMessage.error(res.msg)
    }
  })
}

const setGoods = (row: any) => {
  isOrder({exhibitionId: row.exhibitionId}).then(res => {
    if(res.code === 0 ){
      router.push({ name: 'GoodsReserve', query: { clueId: row.id, exhibitionId: row.exhibitionId, exhibitorId: row.exhibitorId, hallCode: row.hallCode, positionCode: row.positionCode } })
    }else{
      ElMessage.error(res.msg)
    }
  })
}

getCustomField()

getList()

const columns_selected: any = ref([])
  const columns: any = ref([])
  const getColumns = () => {
    setTimeout(() => {
      let _l: string[] = []
      tableRef.value.columns.forEach((item: any) => {
        if(item.label){
          _l.push(item.label)
        }
      })
      columns.value = _l.join(',').split(',')
      columns_selected.value = _l.join(',').split(',')
    }, 0)
  }

  const columns_is_selected = (label: string)=>{
    if(columns_selected.value.length === 0 && columns.value.length === 0){
      return true
    }else{
      return columns_selected.value.includes(label)
    }
  }


</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div class="" style="margin-bottom: 10px;">
      <ExhibitionChange />
    </div>
    <TableSearch :data="searchData" @search="search" />
    <div class="s-table-operations">
      <el-button @click="changeUser">转移</el-button>
      <el-button @click="MoveShare">移至公海</el-button>
      <el-button @click="merge.set">合并</el-button>
      <el-button @click="Export">导出</el-button>
      <el-button @click="Del">删除</el-button>
      <el-button @click="$router.push({ name: 'CluesAdd',  query: { status: 2 } })">新建线索</el-button>
      <el-button @click="$router.push({ name: 'CluesImport',  query: { status: 2 } })">导入线索</el-button>
      <!-- <el-button @click="$router.push('/market/clues/add')">新建线索</el-button> -->
      <!-- <el-button @click="Import">导入线索</el-button> -->
      <el-popover
        placement="bottom-end"
        trigger="click"
      >
        <template #reference>
          <el-button size="" link>
            <img style="width: 17px;" src="@/assets/svg/sx.svg" alt="">
          </el-button>
        </template>
        <template #default>
          <el-checkbox-group v-model="columns_selected">
              <ul>
                  <li class="s-checkbox_item" v-for="i in columns" :key="i"><el-checkbox :label="i" :value="i">{{i}}</el-checkbox></li>
              </ul>
          </el-checkbox-group>
        </template>
      </el-popover>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" height="100%"
        :cell-style="{minWidth: '120px'}"
        show-overflow-tooltip
        header-row-class-name="s-table-header">
        <!-- 序号 企业名称 展会名称 展位号 展位类型 展位面积 展位合同 物料合同 是否退展 会展联系人 职位 手机号 曾用名 通讯地圳 主营业务 持有人 -->
        <el-table-column type="selection" width="42" fixed="left"/>
        <el-table-column v-if="columns_is_selected('序号')" type="index" label="序号" width="60"/>
        <el-table-column v-if="columns_is_selected('企业名称')" prop="companyName" label="企业名称" width="180">
          <template #default="scope"> 
            <el-link :href="'/market/clues/info?type=2&id=' + scope.row.id+'&exhibitionId='+scope.row.exhibitionId+'&authUser='+scope.row.authUser"  type="primary">{{ scope.row.companyName }}</el-link>
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('展会名称')" prop="exhibitionName" label="展会名称" width="180" />
        <el-table-column v-if="columns_is_selected('展位号')" prop="positionCode" label="展位号" />
        <el-table-column v-if="columns_is_selected('展位类型')" prop="positionType" label="展位类型" min-width="120">
          <template #default="scope">{{ {1:'标准',2:'特装'}[scope.row.positionType as number] }}</template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('展位面积')" prop="positionArea" label="展位面积" min-width="120" />
        <el-table-column v-if="columns_is_selected('展位合同')" prop="contractPosition" label="展位合同" min-width="120">
          <!-- 0未签订，1已签订，2已回执 -->
          <template #default="scope">{{ {0:'未签订',1:'已签订',2:'已回执'}[scope.row.contractPosition as number] }}</template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('物料合同')" prop="contractMaterial" label="物料合同" min-width="120">
          <!-- 0未签订，1已签订，2已回执 -->
          <template #default="scope">{{ {0:'未签订',1:'已签订',2:'已回执'}[scope.row.contractMaterial as number] }}</template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('是否退展')" prop="isExit" label="是否退展" min-width="120">
          <!-- 0否，1是 -->
          <template #default="scope">{{ {0:'否',1:'是'}[scope.row.isExit as number] }}</template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('展会联系人')" prop="exhibitionContact" label="展会联系人" min-width="120" />
        <el-table-column v-if="columns_is_selected('职位')" prop="duties" label="职位"  min-width="120"/>
        <el-table-column v-if="columns_is_selected('手机号')" prop="phone" label="手机号" min-width="120" />
        <!-- <el-table-column prop="" label="曾用名"  min-width="120"/> -->
        <template v-for="item in customField" :key="item.key">
          <el-table-column :prop="item.key" :label="item.name" min-width="120" v-if="item.name == '通讯地址' || item.name == '主营业务' && columns_is_selected(item.name)">
          </el-table-column>
        </template>
        <el-table-column v-if="columns_is_selected('持有人')" prop="authUser" label="持有人" />
        
        <el-table-column v-if="columns_is_selected('操作')" fixed="right" label="操作" width="220">
          <template #default="scope">
            <!-- <el-button link type="primary" @click="$router.push({name: 'BoothReserve', query: {clueId: scope.row.id, exhibitionId: scope.row.exhibitionId, exhibitorId: scope.row.exhibitorId, hallCode: scope.row.hallCode}})"> -->
            <el-button 
              link type="primary" 
              @click="setBooth(scope.row)">
              {{scope.row.orderPositionStatus?'新增':''}}展位预定
            </el-button>
            <el-button
              link type="primary" 
              @click="setGoods(scope.row)">
              {{scope.row.orderMaterialStatus?'新增':''}}物料预定
            </el-button>
            <!-- <el-button link type="primary" @click="willSet(scope.row)">
              移除意向
            </el-button> -->

          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50, 100]" :total="total"
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
      <el-table-column prop="companyName" label="公司名称" min-width="120"/>
      <el-table-column prop="exhibitionName" label="展会姓名" min-width="120"/>
      <!-- <el-table-column prop="recordTime" label="创建时间"/> -->
      <el-table-column prop="authUser" label="线索所有人"  min-width="120"/>
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