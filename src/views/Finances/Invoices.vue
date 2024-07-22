<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  // import ApplyInvoice from './components/ApplyInvoice.vue'
  import api from '@/api/Finances'
  import { uploadFile } from '@/api/common'

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
    api.invoice.getList({...searchForm.value, ...page}).then((res: any) => {
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
    // let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    // if (ids.length === 0) {
    //   ElMessage.warning('请选择需要删除的线索')
    //   return
    // }
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      // api.del({ id: ids}).then((res: any) => {
      //   if(res.code === 0) {
      //     ElMessage.success('删除成功')
      //     getList()
      //   }else {
      //     ElMessage.error(res.msg)
      //   }
      // })
    }).catch(() => {
    })
  }

  const edit: any = reactive({
    show: false,
    form: {
      id: '',
      title: '', // 发票抬头
      socialCode: '', // 社会信用代码,
      contact: '', // 联系人,
      phone: '', // 手机号,
      email: '', // 邮箱,
      type: '', // 1,
      status: '', // 1,
      invoiceCode: '', // 发票号,
      img: '', // 发票附件,
    },
  })

  const editSub = () => {
    api.invoice.edit(edit.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('申请成功')
        edit.show = false
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const setEdit = (row: any) => {
    edit.show = true
    edit.form.id = row.id
    edit.form.title = row.title
    edit.form.socialCode = row.socialCode
    edit.form.contact = row.contact
    edit.form.phone = row.phone
    edit.form.email = row.email
    // edit.form.type = row.type
    // edit.form.status = row.status
    // edit.form.invoiceCode = row.invoiceCode
    // edit.form.img = row.img
  }

  const beforeUpload: any = (rawFile: any) => {
  // if (rawFile.type !== 'image/jpeg') {
  //   ElMessage.error('Avatar picture must be JPG format!')
  //   // return false
  // } else 
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('最大 2MB!')
    return false
  }
  return true
}

const uploadImg = (fileObj: any) => {
  let formData = new FormData()
  formData.append('upload', fileObj.file)
  return new Promise((resolve, reject) => {
    uploadFile(formData).then((res: any) => {
      if(res.code === 0){
        resolve(res.data)
      }else{
        reject(res)
      }
    })
  })
}

const uploadInvoice = (d: any)=> {
  api.invoice.uploadInvoice(d).then((res: any) => {
    if(res.code === 0) {
      ElMessage.success('上传成功')
      getList()
    }else {
      ElMessage.error(res.msg)
    }
  })

}

// const openInvoice = () => {
//   ElMessageBox.confirm('确定开票？', '提示', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     type: 'warning'
//   }).then(() => {
//     api.invoice.openInvoice({ id: tableRef.value.getSelectionRows()[0].id}).then((res: any) => {
//       if(res.code === 0) {
//         ElMessage.success('开票成功')
//         getList()
//       }else {
//         ElMessage.error(res.msg)
//       }
//     })
//   }).catch(() => {
//   })
// }

const openInvoice: any = reactive({
    show: false,
    form: {
      id: '',
      cose: '',
      type: 1,
    },
  })

  const openInvoiceSub = () => {
    api.invoice.openInvoice(openInvoice.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('成功')
        openInvoice.show = false
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const openInvoiceSet = (row: any) => {
    openInvoice.show = true
    openInvoice.form.id = row.id
    openInvoice.form.code = ''
    openInvoice.form.type = 1
  }

  api.invoice.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })
  

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
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column prop="orderCode" label="订单编号" width="180" />
        <el-table-column prop="companyName" label="企业名称" />
        <el-table-column prop="hallCode" label="展馆号" />
        <el-table-column prop="positionCode" label="展位号" />
        <el-table-column prop="positionType" label="展位类型">
          <template #default="scope">
            {{ {1:'标准',2:'特装'}[scope.row.positionType as number] }}
          </template>
        </el-table-column>
        <!-- <el-table-column prop="brand" label="参展品牌" /> -->
        <el-table-column prop="positionArea" label="面积" />
        <el-table-column prop="positionUnitPrice" label="展位单价" />
        <el-table-column prop="orderPrice" label="订单金额" />
        <el-table-column prop="payType" label="付款方式">
          <template #default="scope">
            {{ {1:'全款',2:'分期'}[scope.row.payType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payStatus" label="付款状态">
          <template #default="scope">
            {{ {0:'未付款',1:'部分付款',2:'已付款'}[scope.row.payStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="orderStatus" label="订单状态">
          <template #default="scope">
            {{ {0:'已撤销',1:'已完成'}[scope.row.orderStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="orderType" label="订单类型">
          <template #default="scope">
            {{ {1:'代下单',2:'展商下单'}[scope.row.orderType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payCode" label="录款编号" />
        <el-table-column prop="invoiceType" label="发票类型">
          <template #default="scope">
            {{ {1:'电子专票',2:'电子普票'}[scope.row.invoiceType as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="invoiceTitle" label="发票抬头" />
        <el-table-column prop="socialCode" label="社会信用代码" />
        <el-table-column prop="contact" label="联系人" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="invoicePrice" label="开票金额" />
        <el-table-column prop="invoiceStatus" label="开票状态">
          <template #default="scope">
            {{ {0:'待开票',1:'已开票'}[scope.row.invoiceStatus as number] }}
          </template>
        </el-table-column>
        <el-table-column prop="payImg" label="付款凭证">
          <template #default="scope">
            <el-link :href="scope.row.payImg" target="_blank">{{ scope.row.payImg }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="receiveImg" label="到款凭证">
          <template #default="scope">
            <el-link :href="scope.row.receiveImg" target="_blank">{{ scope.row.receiveImg }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="invoiceImg" label="发票附件">
          <template #default="scope">
            <el-link :href="scope.row.invoiceImg" target="_blank">{{ scope.row.invoiceImg }}</el-link>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template #default="scope">
            <!-- <el-button link type="primary" size="small" @click="$router.push('/market/clues/edit/' + scope.row.id)">详情</el-button> -->
            <el-button link type="primary" size="small" @click="openInvoiceSet(scope.row)">开票</el-button>
            <!-- <el-button link type="primary" size="small" @click="up([scope.row.id])">上传发票</el-button> -->
            <el-upload
              :show-file-list="false"
              :on-success="(response:any, file:any, fileList:any) => { uploadInvoice({ id: scope.row.id, url: response.url }) }"
              :before-upload="beforeUpload"
              :http-request="uploadImg"
            >
              <el-button link type="primary" size="small">上传发票</el-button>
            </el-upload>
            <el-button link type="primary" size="small" @click="setEdit(scope.row)">编辑</el-button>
            <el-button link type="primary" size="small" @click="Del([scope.row.id])">删除</el-button>
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

  <el-dialog v-model="edit.show" title="编辑发票" width="500" draggable>
    <el-form ref="willFormRef" :model="edit.form" label-width="auto">
      <el-form-item label="发票抬头" >
        <el-input v-model="edit.form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="社会信用代码" >
        <el-input v-model="edit.form.socialCode" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系人" >
        <el-input v-model="edit.form.contact" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号" >
        <el-input v-model="edit.form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" >
        <el-input v-model="edit.form.email" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="edit.show = false">取消</el-button>
        <el-button type="primary" @click="editSub">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="openInvoice.show" title="转为意向客户" width="500" draggable>
    <el-form ref="willFormRef" :model="edit.form" label-width="auto">
      <el-form-item label="发票类型" >
        <el-radio-group v-model="openInvoice.form.type">
          <el-radio :value="1">电子专票</el-radio>
          <el-radio :value="2">电子普票</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="发票号" >
        <el-input v-model="openInvoice.form.code" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="edit.show = false">取消</el-button>
        <el-button type="primary" @click="openInvoiceSub">确定</el-button>
      </div>
    </template>
  </el-dialog>

</template>