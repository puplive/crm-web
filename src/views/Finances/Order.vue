<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import ApplyInvoice from './components/ApplyInvoice.vue'
  import ExhibitionChange from '@/views/Market/components/ExhibitionChange.vue'
  import api from '@/api/Finances'
  import { booth as boothApi} from '@/api/Order/index'
  import { userStore } from "@/stores/user";

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
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])
  const applyInvoiceRef: any = ref(null)

  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    getList()
  }

  const getList = async () => {
    api.order.getList({...searchForm.value, ...page, exhibitionId: exhibitionInfo.value.id}).then((res: any) => {
      if (res.code === 0) {
        tableData.value = res.data.data
        total.value = res.data.total
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

      api.del({ id: ids}).then((res: any) => {
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

  const revoke = (id: any) => {
    ElMessageBox.confirm('是否确认要撤销订单?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      boothApi.revoke({ id }).then((res) => {
        if(res.code === 0) {
          ElMessage.success('撤销成功')
          getList()
        }else {
          ElMessage.error(res.msg)
        }
        
      })
    }).catch(() => {
    })
  }
  
  api.order.getSearchField().then((res: any) => {
    if (res.code === 0) {
      searchData.value = res.data
    }
  })

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
  getColumns()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div style="margin-bottom: 10px;">
      <ExhibitionChange />
    </div>
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <!-- <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button> -->
      <!-- <el-button size="small" @click="Import">导入</el-button> -->
      <!-- <el-button size="small" @click="Export">导出</el-button> -->
      <!-- <el-button size="small" @click="Del">删除</el-button> -->
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
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%"
        show-overflow-tooltip
        header-row-class-name="s-table-header">
        <!-- <el-table-column type="selection" width="42" /> -->
        <el-table-column v-if="columns_is_selected('订单编号')" prop="orderCode" label="订单编号" width="200" />
        <el-table-column v-if="columns_is_selected('企业名称')" prop="companyName" label="企业名称" min-width="120" />
        <el-table-column v-if="columns_is_selected('展会名称')" prop="exhibitionName" label="展会名称" min-width="120" />
        <el-table-column v-if="columns_is_selected('展位号')" prop="positionCode" label="展位号" />
        <el-table-column v-if="columns_is_selected('参展品牌')" prop="brand" label="参展品牌" min-width="120" />
        <el-table-column v-if="columns_is_selected('面积')" prop="area" label="面积" />
        <el-table-column v-if="columns_is_selected('展位数')" prop="num" label="展位数" />
        <el-table-column v-if="columns_is_selected('订单金额')" prop="orderPrice" label="订单金额" min-width="120" />
        <el-table-column v-if="columns_is_selected('合同状态')" prop="contractStatus" label="合同状态" min-width="120">
          <template #default="scope">
            {{ ['未签订','已签订','已回执(电子)','已回执(纸质)'][scope.row.contractStatus] }}
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('合同附件')" prop="contractReceipt" label="合同附件" min-width="120">
          <template #default="scope">
            <el-link v-if="scope.row.contractReceipt" :href="scope.row.contractReceipt" type="primary">下载</el-link>
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('定金')" prop="deposit" label="定金" />
        <el-table-column v-if="columns_is_selected('已收')" prop="receivedPrice" label="已收" />
        <el-table-column v-if="columns_is_selected('未收款')" prop="unknownPrice" label="未收款" />
        <el-table-column v-if="columns_is_selected('付款状态')" prop="payStatus" label="付款状态">
          <template #default="scope">
            <!-- 0未付款，1部分付款，2已付款 -->
            {{ ['未付款','部分付款','已付款'][scope.row.payStatus] }}
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('发票')" prop="invoiceStatus" label="发票">
          <template #default="scope">
            {{ ['未申请','待开票','部分开票','已开票'][scope.row.invoiceStatus] }}
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('持有人')" prop="clueUser" label="持有人" />
        <el-table-column v-if="columns_is_selected('操作')" fixed="right" label="操作" width="250">
          <template #default="scope">
            <el-button link type="primary" @click="$router.push({ name: 'FinancesOrderDetail', query: { id: scope.row.id } })">详情</el-button>
            <!-- <el-button link type="primary" @click="applyInvoiceRef.setApply(scope.row)" v-if="scope.row.payStatus !== 0">申请发票</el-button> -->
            <template v-if="scope.row.orderStatus === 1">
              <el-button :disabled="scope.row.contractStatus === 0" link :type="scope.row.contractStatus===0?'':'primary'" @click="$router.push({ name: 'FinancesRecording', query: { id: scope.row.id } })">录入到款</el-button>
              <el-button link type="danger" @click="revoke(scope.row.id)">撤销</el-button>
            </template>
            <el-button link disabled v-else>已撤销</el-button>
            <!-- <el-button link type="primary" @click="">下推</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" 
        :page-sizes="[10, 20, 50, 100]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div>
  </div>

  <ApplyInvoice ref="applyInvoiceRef" @callback="getList" />

</template>