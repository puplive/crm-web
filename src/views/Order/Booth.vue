<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue'
  // import { genFileId } from 'element-plus'
  import TableSearch from '@/components/TableSearch/index.vue'
  import { useRouter, useRoute } from 'vue-router'
  import { booth as boothApi, getExhibitionInfo } from '@/api/Order/index'
  import { uploadFile } from '@/api/common'

  
  const router = useRouter()
  const route = useRoute()

  const page = reactive({
    page: 1,
    perPage: 10,
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
    boothApi.getList({...page, ...searchForm.value}).then((res: any) => {
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
    
  const handleImport = () => {
    // boothImport().then(() => {
    //   getData()
    // })
  }

  const handleExport = () => {
    // boothExport({ exhibitionId: id }).then((res: any) => {
    //   if(res.code === 0) {
    //     window.open(res.data.url, '_self')
    //     ElMessage.success('导出成功')
    //   }else {
    //     ElMessage.error(res.msg)
    //   }
    // })
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
    if (fileList.value.length === 0) {
      ElMessage.warning('请选择合同文件')
      return
    }
    let formData = new FormData()
    formData.append('upload', fileList.value[0].raw)
    uploadFile(formData).then(res => {
      if (res.code === 0) {
        uploadContract.show = false

      } else {
        ElMessage.error(res.msg)
      }
    })
  }

  const Recording = (id: any) => {
    
  }

  boothApi.getSearchField().then((res: any) => {
    if (res.code === 0) {
      searchData.value = res.data
    }
  })
  getExhibitionInfo({clueId: id, exhibitionId: id}).then((res: any) => {
    if (res.code === 0) {
      searchData.value = res.data
    }
  })

  getList()
  
</script>
<template>
  <div>
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button size="small" @click="handleExport">批量下载合同</el-button>
      <el-button size="small" @click="handleExport">导出</el-button>
    </div>
    <el-table ref="tableRef" :data="tableData" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
      <el-table-column type="selection" width="50" />
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column prop="hallCode" label="展馆号" />
      <el-table-column prop="positionCode" label="展位号" />
      <el-table-column prop="standardPrice" label="标摊/元" />
      <el-table-column prop="specialPrice" label="特装/元" />
      <el-table-column prop="specialUnit" label="特装/㎡/个" />
      <el-table-column prop="length" label="长" />
      <el-table-column prop="width" label="宽" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column prop="exhibitor" label="参展商" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column fixed="right" label="操作" width="300">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="$router.push({ name: 'OrderBoothDetail', query: { id: scope.row.id } })">详情</el-button>
          <el-button link type="primary" size="small" @click="$router.push({ name: 'ContractTemplates', query: { id: scope.row.id } })">签订合同</el-button>
          <el-button link type="primary" size="small" @click="setContract(scope.row.id)">上传合同</el-button>
          <el-button link type="primary" size="small" @click="Recording(scope.row.id)">录入到款</el-button>
          <el-button link type="primary" size="small" @click="revoke(scope.row.id)">撤销</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" 
        :page-sizes="[10, 20, 50]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div>
  </div>

  <el-dialog v-model="uploadContract.show" title="上传合同" width="400">
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
      <el-button type="primary" @click="subContract">确定</el-button>
      <el-button @click="uploadContract.show = false">取消</el-button>
    </template>
  </el-dialog>
</template>