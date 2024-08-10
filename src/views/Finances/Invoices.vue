<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import UpInvoice from './components/UpInvoice.vue'
  import Invoicing from './components/Invoicing.vue'
  import EditInvoice from './components/EditInvoice.vue'
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
    perPage: 20,
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
    api.invoice.getList({exhibitionId: exhibitionInfo.value.id, ...searchForm.value, ...page}).then((res: any) => {
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

      api.invoice.del({ id: ids}).then((res: any) => {
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

  api.invoice.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })
  
  const invoicingRef: any = ref(null)
  const editInvoiceRef: any = ref(null)
  getList()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div class="" style="margin-bottom: 10px;">
      <ExhibitionChange />
    </div>
    <TableSearch :data="searchData" @search="search" :type="'invoice'"/>
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
        <!-- <el-table-column type="selection" width="42" /> -->
        <el-table-column prop="orderCode" label="订单编号" width="180" />
        <el-table-column prop="companyName" label="企业名称" min-width="120" />
        <el-table-column prop="exhibitionName" label="展会名称" min-width="120" />
        <el-table-column prop="hallCode" label="展馆号" />
        <el-table-column prop="positionCode" label="展位号" />
        <el-table-column prop="positionType" label="展位类型" min-width="120">
          <template #default="scope">
            {{ {1:'标准',2:'特装'}[scope.row.positionType as number] }}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="brand" label="参展品牌" /> -->
        <el-table-column prop="positionArea" label="面积" />
        <el-table-column prop="positionUnitPrice" label="展位单价" min-width="120" />
        <el-table-column prop="orderPrice" label="订单金额" min-width="120" />
        <el-table-column prop="payType" label="付款方式" min-width="120">
          <template #default="scope">
            {{ {1:'全款',2:'分期'}[scope.row.payType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payStatus" label="付款状态" min-width="120">
          <template #default="scope">
            {{ {0:'未付款',1:'部分付款',2:'已付款'}[scope.row.payStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="orderStatus" label="订单状态" min-width="120">
          <template #default="scope">
            {{ {0:'已撤销',1:'已完成'}[scope.row.orderStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="orderType" label="订单类型" min-width="120">
          <template #default="scope">
            {{ {1:'代下单',2:'展商下单'}[scope.row.orderType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payCode" label="录款编号" min-width="120" />
        <el-table-column prop="invoiceType" label="发票类型" min-width="120">
          <template #default="scope">
            {{ {1:'电子专票',2:'电子普票'}[scope.row.invoiceType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="invoiceTitle" label="发票抬头" min-width="120" />
        <el-table-column prop="socialCode" label="社会信用代码" min-width="120" />
        <el-table-column prop="contact" label="联系人" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="invoicePrice" label="开票金额" min-width="120" />
        <el-table-column prop="invoiceStatus" label="开票状态" min-width="120">
          <template #default="scope">
            {{ {1:'待开票',2:'已开票'}[scope.row.invoiceStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payImg" label="付款凭证" min-width="120">
          <template #default="scope">
            <el-image 
              style="width: 30px; height: 30px; margin-right: 5px;"
              :src="scope.row.payImg" 
              fit="contain" 
              :preview-src-list="[scope.row.payImg]" 
              :preview-teleported="true"
              loading="lazy" />
          </template>
        </el-table-column>
        <el-table-column prop="receiveImg" label="到款凭证" min-width="120">
          <template #default="scope">
            <el-image 
              style="width: 30px; height: 30px; margin-right: 5px;"
              :src="scope.row.receiveImg" 
              fit="contain" 
              :preview-src-list="[scope.row.receiveImg]" 
              :preview-teleported="true"
              loading="lazy" />
          </template>
        </el-table-column>
        <el-table-column prop="invoiceImg" label="发票附件" min-width="120">
          <template #default="scope">
            <el-link v-if="scope.row.invoiceImg" :href="scope.row.invoiceImg" type="primary">下载</el-link>
            <!-- <el-image
              style="width: 30px; height: 30px; margin-right: 5px;" 
              :src="scope.row.invoiceImg" 
              fit="contain" 
              :preview-src-list="[scope.row.invoiceImg]" 
              :preview-teleported="true"
              loading="lazy" /> -->
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template #default="scope">
            <!-- <div style="display: flex; align-items: center;"> -->
            <template v-if="scope.row.orderStatus !== 0">
            <el-button :disabled="scope.row.status===0" link :type="scope.row.status===0?'':'primary'" v-if="scope.row.invoiceStatus === 1" @click="()=>invoicingRef.openInvoiceSet(scope.row)">开票</el-button>
            <el-button :disabled="scope.row.status===0" link :type="scope.row.status===0?'':'primary'">
              <span v-if="scope.row.status === 0">上传发票</span>
              <UpInvoice v-else :id="scope.row.id" @callback="getList" />
            </el-button>
            <el-button :disabled="scope.row.status===0" link :type="scope.row.status===0?'':'primary'" @click="editInvoiceRef.setEdit(scope.row)">编辑</el-button>
            </template>
            <el-button link type="danger" @click="Del([scope.row.id])">删除</el-button>
          <!-- </div> -->
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

  <EditInvoice ref="editInvoiceRef" @callback="getList" />
  <Invoicing ref="invoicingRef" @callback="getList" />

</template>