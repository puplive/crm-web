<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, nextTick, watch } from 'vue'
  // import { genFileId } from 'element-plus'
  import TableSearch from '@/components/TableSearch/index.vue'
  import GoodsOrderDetail from './components/GoodsOrderDetail.vue'
  import { useRouter, useRoute } from 'vue-router'
  import { goods as goodsApi, booth as boothApi  } from '@/api/Order/index'
  import { uploadFile } from '@/api/common'
  import { download } from '@/api/Contract'
  import { zipFiles } from '@/utils/fileZip'
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

  
  const router = useRouter()
  const route = useRoute()
  const Loading = ref(false)

  const page = reactive({
    page: 1,
    perPage: 20,
  })
  const total = ref(0)
  const searchForm = ref({})
  const id: any = route.query.id
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])
  // const formRef: any = ref(null)

  const uploadContract = reactive({
    show: false,
    file: '',
    type: 1,
    orderId: 0,
  })

  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    getList()
  }


  // let exhibitorOptions: any = ref([])
  // exhibitorList().then((res: any) => {
  //   if (res.code === 0) {
  //     exhibitorOptions.value = res.data
  //   }
  // })

  const getList = () => {
    goodsApi.getList({exhibitionId: exhibitionInfo.value.id, ...page, ...searchForm.value}).then((res: any) => {
      if (res.code === 0) {
        tableData.value = res.data.data
        total.value = res.data.total
      }else {
        tableData.value = [{}]
      }
    })
  }
  

  const handleEdit = async (row: any) => {
    
    
  }

  // const deleteSelected = ()=> {
  //   let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
  //   if (ids.length === 0) {
  //     ElMessage.warning('请选择需要删除的数据')
  //     return
  //   }
  //   handleDelete(ids)
  // }
  const revoke = (id: any) => {
    ElMessageBox.confirm('是否确认要撤销订单?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      goodsApi.revoke({ id }).then((res) => {
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

  const del = (id: any) => {
    ElMessageBox.confirm('是否确认要删除订单?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      goodsApi.del({ id }).then((res) => {
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
    
  const handleDownload = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要下载的数据')
      return
    }
    
    download({ orderId: ids}).then((res) => {
      if(res.code === 0) {
        // ElMessage.success('成功')
        if(res.data.length === 0){
          ElMessage.warning('无数据')
          return
        }
        zipFiles(res.data)
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  const handleExport = () => {
    goodsApi.export({ exhibitionId: id }).then((res: any) => {
      if(res.code === 0) {
        window.open(res.data.url, '_self')
        ElMessage.success('导出成功')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }


  const uploadRef:any = ref(null)
  let fileList: any = ref([])
  const handleExceed = (files: any) => {
    // uploadRef.value!.clearFiles()
    let fileObj = files[0]
    fileList.value = [{
      name: fileObj.name,
      size: fileObj.size,
      uid: fileObj.uid,
      status: 'ready',
      percentage: 0,
      raw: fileObj
    }]
    // fileObj.uid = genFileId()
    // uploadRef.value!.handleStart(fileObj)
  }

  const beforeUpload = (file: any) => {
    const isLt2M = file.size / 1024 / 1024 < 3
    if (!isLt2M) {
      ElMessage.error('文件大小不能超过 3MB!')
    }
    return isLt2M
  }

  // const uploadFile = (file: any) => {
  //   const formData = new FormData()
  //   formData.append('file', file)
  //   formData.append('exhibitionId', id)
  //   // boothImport(formData).then((res: any) => {
  //   //   if(res.code === 0) {
  //   //     ElMessage.success('导入成功')
  //   //     getData()
  //   //   }else {
  //   //     ElMessage.error(res.msg)
  //   //   }
  //   // })
  // }
  const setContract = (id: any) => {
    uploadContract.show = true
    uploadContract.type = 1
    uploadContract.orderId = id
    uploadContract.file = ''
    fileList.value = []
  }
  const subContract = () => {
    if (uploadContract.type === 1 && fileList.value.length === 0) {
      ElMessage.warning('请选择合同文件')
      return
    }
    Loading.value = true
    let formData = new FormData()
    formData.append('upload', fileList.value[0].raw)
    uploadFile(formData).then(res => {
      if (res.code === 0) {
        boothApi.receipt({ 
          orderId: uploadContract.orderId, 
          type: uploadContract.type,
          url: res.data.url
        }).then((res: any) => {
          if (res.code === 0) {
            ElMessage.success('上传成功')
            uploadContract.show = false
            getList()
          } else {
            ElMessage.error(res.msg)
          }
          Loading.value = false
        }).catch(() => {
          Loading.value = false
        })
      } else {
        ElMessage.error(res.msg)
        Loading.value = false
      }
    }).catch(() => {
      Loading.value = false
    })
  }

  const Recording = (id: any) => {
    
  }

  const detailRef: any = ref(null)
  const goodsDetail = (id: any) => {
    detailRef.value.getDetail(id)
  }

  goodsApi.getSearchField().then((res: any) => {
    if (res.code === 0) {
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
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button size="small" @click="handleDownload">批量下载合同</el-button>
      <el-button size="small" @click="handleExport">导出</el-button>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" fixed="left" />
        <!-- <el-table-column prop="id" label="ID" width="50" /> -->
        <el-table-column prop="orderCode" label="订单编号" min-width="120" />
        <el-table-column prop="companyName" label="企业名称" min-width="120" />
        <el-table-column prop="exhibitionName" label="展会名称" min-width="120" />
        <el-table-column prop="hallCode" label="展馆号" />
        <el-table-column prop="positionCode" label="展位号" />
        <el-table-column prop="orderPrice" label="订单金额" min-width="120" />
        <el-table-column prop="orderType" label="下单方式" min-width="120">
          <template #default="scope">
            {{ { 1: '代下单', 2: '展商下单' }[scope.row.orderType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payStatus" label="付款状态" min-width="120">
          <template #default="scope">
            {{ { 0: '未付款', 1: '部分付款', 2: '已付款' }[scope.row.payStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="receivedPrice" label="到款金额" min-width="120" />
        <el-table-column prop="contractStatus" label="合同状态" min-width="120">
          <template #default="scope">
            {{ { 0:'未签订',1:'已签订',2:'已回执(电子)',3:'已回执(纸质)' }[scope.row.contractStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="invoiceStatus" label="发票状态" min-width="120">
          <template #default="scope">
            {{ { 0:'未申请',1:'待开票',2:'部分开票',3:'已开票' }[scope.row.invoiceStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="clueUser" label="所属人" />
        <el-table-column prop="authUser" label="下单人" />
        <el-table-column fixed="right" label="操作" width="250">
          <template #default="scope">
            <el-button link type="primary" @click="goodsDetail(scope.row.id)">详情</el-button>
            <template v-if="scope.row.orderStatus !== 0">
              <template v-if="scope.row.contractStatus === 0">
                <el-button link type="primary" @click="$router.push({ name: 'ContractTemplates', query: { id: scope.row.id, type: 2 } })">签订合同</el-button>
                <el-button link type="primary" @click="setContract(scope.row.id)">上传合同</el-button>
              </template>
              <template v-else>
                <el-button link type="primary" @click="$router.push({ name: 'ContractTemplates', query: { id: scope.row.id, type: 2 } })">更新合同</el-button>
                <el-button link type="primary" @click="setContract(scope.row.id)">上传合同</el-button>
              </template>
              <!-- <el-button link type="primary" @click="Recording(scope.row.id)">录入到款</el-button> -->
              <el-button link type="primary" @click="revoke(scope.row.id)">撤销</el-button>
            </template>
            <template v-else>
              <el-button link type="" disabled>已撤销</el-button>
              <el-button link type="danger"  @click="del(scope.row.id)">删除</el-button>
            </template>
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

  <el-dialog v-model="uploadContract.show" title="上传合同" width="400" draggable>
    <el-radio-group v-model="uploadContract.type">
      <el-radio :value="1">电子合同</el-radio>
      <el-radio :value="2">纸质合同</el-radio>
    </el-radio-group>
    <el-upload
      ref="uploadRef"
      :auto-upload="false"
      :limit="1"
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      v-model:file-list="fileList"
      style="margin-top: 10px">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <template #footer>
      <el-button type="primary" @click="subContract" :loading="Loading">确定</el-button>
      <el-button @click="uploadContract.show = false">取消</el-button>
    </template>
  </el-dialog>

  <GoodsOrderDetail ref="detailRef" />
  

</template>