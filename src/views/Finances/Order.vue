<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import ApplyInvoice from './components/ApplyInvoice.vue'
  import api from '@/api/Finances'
  import { booth as boothApi} from '@/api/Order/index'

  const page = reactive({
    page: 1,
    perPage: 10,
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
    api.order.getList({...searchForm.value, ...page}).then((res: any) => {
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

  // api.getSearchField().then((res) => {
  //   if(res.code === 0) {
  //     searchData.value = res.data
  //   }
  // })

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
  

  getList()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div></div>
    <TableSearch :data="searchData" @search="search"/>
    <!-- <div class="s-table-operations"> -->
      <!-- <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button> -->
      <!-- <el-button size="small" @click="Import">导入</el-button> -->
      <!-- <el-button size="small" @click="Export">导出</el-button> -->
      <!-- <el-button size="small" @click="Del">删除</el-button> -->
    <!-- </div> -->
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%"
        show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column prop="orderCode" label="订单编号" width="200" />
        <el-table-column prop="companyName" label="企业名称" min-width="120" />
        <el-table-column prop="hallCode" label="展位号" />
        <el-table-column prop="brand" label="参展品牌" min-width="120" />
        <el-table-column prop="area" label="面积" />
        <el-table-column prop="num" label="展位数" />
        <el-table-column prop="orderPrice" label="订单金额" min-width="120" />
        <el-table-column prop="contractStatus" label="合同状态" min-width="120">
          <template #default="scope">
            {{ ['未签订','已签订','已回执'][scope.row.contractStatus] }}
          </template>
        </el-table-column>
        <el-table-column prop="contractReceipt" label="合同附件" min-width="120">
          <template #default="scope">
            <el-link v-if="scope.row.contractReceipt" :href="scope.row.contractReceipt" type="primary">下载</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="deposit" label="定金" />
        <el-table-column prop="receivedPrice" label="已收" />
        <el-table-column prop="unknownPrice" label="未收款" />
        <el-table-column prop="payStatus" label="付款状态">
          <template #default="scope">
            <!-- 0未付款，1部分付款，2已付款 -->
            {{ ['未付款','部分付款','已付款'][scope.row.payStatus] }}
          </template>
        </el-table-column>
        <el-table-column prop="invoiceStatus" label="发票">
          <template #default="scope">
            {{ ['未申请','待开票','部分开票','已开票'][scope.row.invoiceStatus] }}
          </template>
        </el-table-column>
        <el-table-column prop="clueUser" label="持有人" />
        <el-table-column fixed="right" label="操作" width="250">
          <template #default="scope">
            <el-button link type="primary" @click="$router.push({ name: 'OrderBoothDetail', query: { id: scope.row.id } })">详情</el-button>
            <!-- <el-button link type="primary" @click="applyInvoiceRef.setApply(scope.row)" v-if="scope.row.payStatus !== 0">申请发票</el-button> -->
            <template v-if="scope.row.orderStatus === 1">
              <el-button link type="primary" @click="$router.push({ name: 'FinancesRecording', query: { id: scope.row.id } })">录入到款</el-button>
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
        :page-sizes="[10, 20, 50]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div>
  </div>

  <ApplyInvoice ref="applyInvoiceRef" @callback="getList" />

</template>