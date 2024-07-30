<template>
  <div class="recording">
    <div class="top">
      <span style="margin-right: 20px;">订单到款记录</span>
      <el-button @click="$router.back">返回</el-button>
    </div>
    <div class="p2">
      <el-button link type="primary" @click="$router.push({name: 'ContractDetail', query: {orderId: d.orderId}})">查看合同</el-button>
      <span>订单编号：{{ d.orderCode }}</span>
      <span>展位号：{{ d.positionCode }}</span>
      <span>面积：{{ d.positionArea }}平方米</span>
      <span>展位数：{{ d.positionNum }}个</span>
      <span>订单金额：{{ d.orderPrice }}元</span>
    </div>
    <div>
      <div class="title">收款记录</div>
      <div class="table">
        <el-table :data="[d]" border table-layout="fixed" show-overflow-tooltip header-row-class-name="s-table-header">
          <el-table-column prop="code" label="录款编号" min-width="120"></el-table-column>
          <el-table-column prop="payCompany" label="付款公司" min-width="120"></el-table-column>
          <el-table-column prop="payType" label="到款类型" min-width="120">
            <template #default="scope">{{ {1:'预定金',2:'首款',3:'二次款',4:'尾款',5:'转款'}[scope.row.payType as number] }}</template>
          </el-table-column>
          <el-table-column prop="payPrice" label="到款金额" min-width="120"></el-table-column>
          <el-table-column prop="payType" label="付款方式" min-width="120">
            <template #default="scope">{{ {1:'全款',2:'分期'}[scope.row.payType as number] }}</template>
          </el-table-column>
          <el-table-column prop="payTime" label="到款时间" min-width="120"></el-table-column>
          <el-table-column prop="receiveAccount" label="收款账户" min-width="120"></el-table-column>
          <el-table-column prop="payImg" label="付款凭证" min-width="120">
            <template #default="scope">
              <el-image 
                v-if="scope.row.payImg"
                style="width: 30px; height: 30px"
                :src="scope.row.payImg"
                :preview-src-list="[scope.row.payImg]"
                fit="contain"
                preview-teleported="true"
                loading="lazy"
              />
            </template>
          </el-table-column>
          <el-table-column prop="receiveImg" label="到款凭证" min-width="120">
            <template #default="scope">
              <el-image
                v-if="scope.row.receiveImg"
                style="width: 30px; height: 30px"
                :src="scope.row.receiveImg"
                :preview-src-list="[scope.row.receiveImg]"
                fit="contain"
                preview-teleported="true"
                loading="lazy"
              />
            </template>
          </el-table-column>
          <el-table-column prop="invoiceStatus" label="发票状态" min-width="120">
            <template #default="scope">{{ {0:'未申请',1:'待开票',2:'部分开票',3:'已开票'}[scope.row.invoiceStatus as number] }}</template>
          </el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary" @click="() => { 
                let d={...scope.row, account: scope.row.receiveAccount }; 
                editPaymentRef.setEdit(d)
               }">编辑</el-button>
              <el-button link type="danger" @click="del1(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="title">发票详情</div>
      <div class="table">
        <el-table :data="d.invoice" border table-layout="fixed" show-overflow-tooltip header-row-class-name="s-table-header">
          <el-table-column prop="code" label="编号"></el-table-column>
          <el-table-column prop="invoiceTitle" label="发票抬头" min-width="120"></el-table-column>
          <el-table-column prop="socialCode" label="社会信用代码" min-width="120"></el-table-column>
          <el-table-column prop="invoicePrice" label="开票金额" min-width="120"></el-table-column>
          <el-table-column prop="invoiceType" label="发票类型" min-width="120">
            <template #default="scope">{{ {1:'电子专票',2:'电子普票'}[scope.row.invoiceType as number] }}</template>
          </el-table-column>
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="email" label="发送邮箱" min-width="120"></el-table-column>
          <el-table-column prop="invoiceStatus" label="开票状态" min-width="120">
            <template #default="scope">{{ {0:'未申请',1:'待开票',2:'已开票'}[scope.row.invoiceStatus as number] }}</template>
          </el-table-column>
          <el-table-column prop="invoiceCode" label="发票号"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <!-- <UpInvoice :id="scope.row.id" @callback="getBoothDetail"></UpInvoice> -->
              <el-button link type="primary" @click="editInvoiceRef.setEdit(scope.row)">编辑</el-button>
              <el-button link type="danger" @click="del2(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>

  <EditInvoice ref="editInvoiceRef" @callback="getData"></EditInvoice>
  <EditPayment ref="editPaymentRef" @callback="getData" />
</template>

<script setup lang="ts">
import { invoice } from '@/api/Finances';
import { ref, reactive } from 'vue'
import { uploadFile } from '@/api/common'
// import { payment } from '@/api/Finances'
import { useRouter, useRoute } from 'vue-router';
import api from '@/api/Finances'
import EditInvoice from './components/EditInvoice.vue'
import EditPayment from '@/views/Finances/components/EditPayment.vue'

const router = useRouter()
const route = useRoute()

const id: any = ref(Number(route.query.id))

const d:any = ref({
  invoice: [],
})

const getData = () => {
  api.payment.getDetail({id: id.value}).then(res => {
    if(res.code === 0){
      d.value = res.data
    }
  })
}

const del1 = (id: any) => {
  ElMessageBox.confirm('确定删除？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'

  }).then(() => {
    api.payment.del({id: id}).then(res => {
      if(res.code === 0){
        ElMessage.success('删除成功')
        router.back()
      }else{
        ElMessage.error(res.msg)
      }
    })
  }).catch(() => {
    return
  })
}

const del2 = (id: any) => {
  ElMessageBox.confirm('确定删除？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    api.invoice.del({ id: id}).then((res: any) => {
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
const editInvoiceRef: any = ref(null)
const editPaymentRef: any = ref(null)

getData()

// const getBoothDetail = (id: any) => {
//   api.invoice.getDetail({id: id}).then(res => {
//     if(res.code === 0){
//       console.log(res.data)
//     }else{
//       ElMessage.error(res.msg)
//     }
//   })
// }

//   const addDetail = () => {
//     formData.push({
//       orderId: orderId,
//       invoice: {}
//     })
//   }

//   const beforeUpload: any = (rawFile: any) => {
//   // if (rawFile.type !== 'image/jpeg') {
//   //   ElMessage.error('Avatar picture must be JPG format!')
//   //   // return false
//   // } else 
//   if (rawFile.size / 1024 / 1024 > 3) {
//     ElMessage.error('文件大小不能超过 3MB!')
//     return false
//   }
//   return true
// }

// const uploadImg = (fileObj: any) => {
//   let formData = new FormData()
//   formData.append('upload', fileObj.file)
//   return new Promise((resolve, reject) => {
//     uploadFile(formData).then(res => {
//       if(res.code === 0){
//         resolve(res.data)
//       }else{
//         reject(res)
//       }
//     })
//   })
// }

// const submitForm = (i: any) => {
//   // console.log(formData[i])
//   payment.add(formData[i]).then(res => {
//     if(res.code === 0){
//       ElMessage.success('保存成功')
//       formData[i].isSub = true
//       // router.back()
//     }else{
//       ElMessage.error(res.msg)
//     }
//   })
// }
</script>
<style scoped>
.recording{
  .top{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .p2{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span{
      margin-left: 25px;
      font-size: 14px;
    }
  }
  .title {
    /* height: 30px; */
    display: flex;
    align-items: center;
    margin: 10px 0;
    &::before {
      content: "";
      display: block;
      height: 20px;
      width: 2px;
      background-color: rgb(230, 162, 60);
      margin-right: 10px;
    }
  }
  .info {
    padding-left: 12px;
    margin-bottom: 10px;
    span{
      margin-right: 15px;
      font-size: 14px;
    }
  }
  .table {
    margin-bottom: 20px;
  }
}
</style>