<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { booth as boothApi  } from '@/api/Order/index'

const route = useRoute()
const id = ref(route.query.id)

const d:any = ref({
  brand: [],
  payment: [],
  invoice: [],
})
// const list2 = ref([{}])
// const list3 = ref([{}])

const getBoothDetail = () => {
  boothApi.getDetail({ id: id.value }).then(res => {
    if (res.code === 0) {
      d.value = res.data
      
    }else {
      ElMessage.error(res.msg)
    }
  
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
          getBoothDetail()
        }else {
          ElMessage.error(res.msg)
        }
        
      })
    }).catch(() => {
    })
  }

  // onMounted(() => {
    getBoothDetail()
  // })

</script>
<template>
  <div>
    <div>详情</div>

    <div>
      <div class="title">展位订单</div>
      <div class="info">
        <span>订单编号：{{ d.orderCode }}</span>
        <span>企业名称：{{ d.exhibitorName }}</span>
        <span>参展品牌：{{ d.brand.join(',') }}</span>
        <span>订单状态：{{ d.orderStatus }}</span>
        <span>订单生成时间：{{ d.orderTime }}</span>
        <span>下单人：{{ d.authUser }}</span>
        <span>对应销售：{{ d.clueUser }}</span>
      </div>
      <div class="table">
        <el-table :data="[d]" border table-layout="fixed" header-row-class-name="s-table-header">
          <el-table-column prop="exhibitionName" label="项目名称" min-width="120"></el-table-column>
          <el-table-column prop="hallCode" label="展馆号"></el-table-column>
          <el-table-column prop="positionCode" label="展位号"></el-table-column>
          <el-table-column prop="area" label="面积"></el-table-column>
          <el-table-column prop="length" label="展位尺寸" min-width="120">
            <template #default="scope">{{ scope.row.length }} X {{ scope.row.width }}</template>
          </el-table-column>
          <el-table-column prop="num" label="展位数量" min-width="120"></el-table-column>
          <el-table-column prop="product" label="产品名称" min-width="120"></el-table-column>
          <el-table-column prop="unitPrice" label="单价"></el-table-column>
          <el-table-column prop="orderPrice" label="订单金额" min-width="120"></el-table-column>
          <el-table-column prop="contractStatus" label="合同状态" min-width="120">
            <template #default="scope">{{ ['未签约', '已签约', '已回执'][scope.row.contractStatus] }}</template>
          </el-table-column>
          <el-table-column prop="payStatus" label="付款状态" min-width="120">
            <template #default="scope">{{ ['未付款', '部分付款', '已付款'][scope.row.payStatus] }}</template>
          </el-table-column>
          <el-table-column prop="receivedPrice" label="到款金额" min-width="120"></el-table-column>
          <el-table-column prop="notReceivedPrice" label="未到金额" min-width="120"></el-table-column>
          <el-table-column prop="invoiceStatus" label="发票状态" min-width="120">
            <template #default="scope">{{ ['未申请', '待开票', '部分开票', '已开票'][scope.row.invoiceStatus] }}</template>
          </el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <!-- <el-button link type="primary">订单详情</el-button> -->
              <el-button link type="primary" v-if="d.orderStatus === 1" @click="revoke(d.id)">撤销</el-button>
              <el-button link type="" v-else-if="d.orderStatus === 0" disabled>已撤销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="title">到款详情</div>
      <div class="table">
        <el-table :data="d.payment" border table-layout="fixed" header-row-class-name="s-table-header">
          <el-table-column prop="code" label="录款编号" min-width="120"></el-table-column>
          <el-table-column prop="payCompany" label="付款公司" min-width="120"></el-table-column>
          <el-table-column prop="payType" label="到款类型" min-width="120">
            <template #default="scope">{{ {1:'预定金',2:'首款',3:'二次款',4:'尾款',5:'转款'}[scope.row.payType as number] }}</template>
          </el-table-column>
          <el-table-column prop="payPrice" label="到款金额" min-width="120"></el-table-column>
          <!-- <el-table-column prop="payType" label="付款方式" min-width="120">
            <template #default="scope">{{ '银行转账' }}</template>
          </el-table-column> -->
          <el-table-column prop="payTime" label="到款时间" min-width="120"></el-table-column>
          <el-table-column prop="receiveAccount" label="收款账户" min-width="120"></el-table-column>
          <el-table-column prop="payImg" label="付款凭证">
            <template #default="scope">
              <el-image 
                v-if="scope.row.payImg"
                style="width: 30px; height: 30px"
                :src="scope.row.payImg"
                :preview-src-list="[scope.row.payImg]"
                fit="cover"
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
                fit="cover"
              />
            </template>
          </el-table-column>
          <el-table-column prop="invoiceStatus" label="发票状态" min-width="120">
            <template #default="scope">{{ {0:'未申请',1:'待开票',2:'已开票'}[scope.row.invoiceStatus as number] }}</template>
          </el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary">编辑</el-button>
              <el-button link type="primary">申请发票</el-button>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="title">发票详情</div>
      <div class="table">
        <el-table :data="d.invoice" border table-layout="fixed" header-row-class-name="s-table-header">
          <el-table-column prop="code" label="编号"></el-table-column>
          <el-table-column prop="title" label="发票抬头" min-width="120"></el-table-column>
          <el-table-column prop="socialCode" label="社会信用代码" min-width="120"></el-table-column>
          <el-table-column prop="price" label="开票金额" min-width="120"></el-table-column>
          <el-table-column prop="invoiceType" label="发票类型" min-width="120">
            <template #default="scope">{{ {1:'电子专票',2:'电子普票'}[scope.row.invoiceType as number] }}</template>
          </el-table-column>
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="email" label="发送邮箱" min-width="120"></el-table-column>
          <el-table-column prop="invoiceStatus" label="开票状态" min-width="120">
            <template #default="scope">{{ {1:'待开票',2:'已开票'}[scope.row.invoiceStatus as number] }}</template>
          </el-table-column>
          <el-table-column prop="invoiceCode" label="发票号"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary">上传发票</el-button>
              <el-button link type="primary">编辑</el-button>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>
<style scoped>
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
</style>