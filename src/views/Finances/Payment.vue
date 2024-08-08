<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import ApplyInvoice from './components/ApplyInvoice.vue'
  import api from '@/api/Finances'

  import ExhibitionChange from '@/views/Market/components/ExhibitionChange.vue'
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
    api.payment.getList({exhibitionId: exhibitionInfo.value.id, ...searchForm.value, ...page}).then((res: any) => {
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

  const Del = (ids: any) => {
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      api.payment.del({ id: ids}).then((res: any) => {
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
    ElMessageBox.confirm('确定撤销？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      api.payment.revoke({ id: id}).then((res: any) => {
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

  api.payment.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })

  getList()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div class="" style="margin-bottom: 10px;">
      <ExhibitionChange />
    </div>
    <TableSearch :data="searchData" @search="search" :type="'payment'"/>
    <!-- <div class="s-table-operations">
      <el-button size="small" @click="">合并开票</el-button>
    </div> -->
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <!-- <el-table-column type="selection" width="42" /> -->
        <el-table-column prop="code" label="编号" width="180" />
        <el-table-column prop="companyName" label="企业名称" min-width="120" />
        <el-table-column prop="exhibitionName" label="展会名称" min-width="120" />
        <el-table-column prop="positionCode" label="展位号" />
        <el-table-column prop="payCompany" label="付款公司" min-width="120" />
        <el-table-column prop="payPrice" label="付款金额" min-width="120" />
        <!-- <el-table-column prop="" label="付款方式" min-width="120">
          <template #default="scope">{{ '银行转账' }}</template>
        </el-table-column> -->
        <el-table-column prop="orderPrice" label="订单金额" min-width="120" />
        <el-table-column prop="payType" label="付款类型" min-width="120">
          <template #default="scope">
            {{ {1:'预定金',2:'首款',3:'二次款',4:'尾款',5:'转款'}[scope.row.payType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="receiveAccount" label="收款账户" min-width="120" />
        <el-table-column prop="payTime" label="到款时间" min-width="120" />
        <el-table-column prop="invoiceStatus" label="发票">
          <template #default="scope">
            {{ {0:'未申请',1:'待开票',2:'已开票'}[scope.row.invoiceStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="clueUser" label="持有人" />
        <el-table-column fixed="right" label="操作" width="220">
          <template #default="scope">
            <el-button link type="primary" @click="$router.push({name:'FinancesPaymentDetail',query:{id:scope.row.id}})">详情</el-button>
            <template v-if="scope.row.status === 0">
              <el-button link type="" disabled>已撤销</el-button>
              <el-button link type="danger" @click="Del(scope.row.id)">删除</el-button>
            </template>
            <template v-else>
              <el-button link type="primary" @click="applyInvoiceRef.setApply(scope.row)" v-if="scope.row.invoiceStatus === 0">申请发票</el-button>
              <el-button link type="danger" @click="revoke(scope.row.id)">撤销</el-button>
            </template>
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

  <ApplyInvoice ref="applyInvoiceRef" @callback="getList"/>

</template>