<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { booth as boothApi  } from '@/api/Order/index'
import { ElMessage } from 'element-plus';

const route = useRoute()
const id = ref(route.query.id)

const list1: any = ref([{}])
const list2 = ref([{}])
const list3 = ref([{}])

const getBoothDetail = async () => {
  boothApi.getDetail({ id: id.value }).then(res => {
    if (res.code === 0) {
      list1.value = res.data.orderList
      list2.value = res.data.paymentList
      list3.value = res.data.invoiceList
    }else {
      ElMessage.error(res.msg)
    }
  
  })
  
}

</script>
<template>
  <div>
    <div>详情</div>

    <div>
      <div class="title">展位订单</div>
      <div class="info">
        <span>订单编号：{{ list1[0].orderCode }}</span>
        <span>企业名称：{{ list1[0].exhibitorName }}</span>
        <span>参展品牌：{{ list1[0].brand }}</span>
        <span>订单状态：{{ list1[0].orderStatus }}</span>
        <span>订单生成时间：{{ list1[0].orderTime }}</span>
        <span>下单人：{{ list1[0].authUser }}</span>
        <span>对应销售：{{ list1[0].clueUser }}</span>
      </div>
      <div class="table">
        <el-table :data="list1" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
          <el-table-column prop="exhibitionName" label="项目名称"></el-table-column>
          <el-table-column prop="hallCode" label="展馆号"></el-table-column>
          <el-table-column prop="positionCode" label="展位号"></el-table-column>
          <el-table-column prop="area" label="面积"></el-table-column>
          <el-table-column prop="length" label="展位尺寸">
            <template #default="scope">{{ scope.row.length }} X {{ scope.row.width }}</template>
          </el-table-column>
          <el-table-column prop="num" label="展位数量"></el-table-column>
          <el-table-column prop="product" label="产品名称"></el-table-column>
          <el-table-column prop="unitPrice" label="单价"></el-table-column>
          <el-table-column prop="orderPrice" label="订单金额"></el-table-column>
          <el-table-column prop="contractStatus" label="合同状态">
            <template #default="scope">{{ ['未签约', '已签约', '已回执'][scope.row.contractStatus] }}</template>
          </el-table-column>
          <el-table-column prop="payStatus" label="付款方式">
            <template #default="scope">{{ ['未付款', '部分付款', '已付款'][scope.row.payStatus] }}</template>
          </el-table-column>
          <el-table-column prop="receivedPrice" label="到款金额"></el-table-column>
          <el-table-column prop="notReceivedPrice" label="未到金额"></el-table-column>
          <el-table-column prop="invoiceStatus" label="发票状态">
            <template #default="scope">{{ ['未申请', '待开票', '部分开票', '已开票'][scope.row.invoiceStatus] }}</template>
          </el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary">订单详情</el-button>
              <el-button link type="primary">撤销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="title">到款详情</div>
      <div class="table">
        <el-table :data="list2" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
          <el-table-column prop="name" label="录款编号"></el-table-column>
          <el-table-column prop="num" label="付款公司"></el-table-column>
          <el-table-column prop="price" label="到款类型"></el-table-column>
          <el-table-column prop="total" label="到款金额"></el-table-column>
          <el-table-column prop="total" label="付款方式"></el-table-column>
          <el-table-column prop="total" label="到款时间"></el-table-column>
          <el-table-column prop="total" label="收款账户"></el-table-column>
          <el-table-column prop="total" label="付款凭证"></el-table-column>
          <el-table-column prop="total" label="到款凭证"></el-table-column>
          <el-table-column prop="total" label="发票状态"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary">编辑</el-button>
              <el-button link type="primary">申请发票</el-button>
              <el-button link type="primary">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="title">发票详情</div>
      <div class="table">
        <el-table :data="list3" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
          <el-table-column prop="name" label="录款编号"></el-table-column>
          <el-table-column prop="num" label="发票抬头"></el-table-column>
          <el-table-column prop="price" label="社会信用代码"></el-table-column>
          <el-table-column prop="total" label="开票金额"></el-table-column>
          <el-table-column prop="total" label="发票类型"></el-table-column>
          <el-table-column prop="total" label="联系人"></el-table-column>
          <el-table-column prop="total" label="发送邮箱"></el-table-column>
          <el-table-column prop="total" label="开票状态"></el-table-column>
          <el-table-column prop="total" label="发票号"></el-table-column>
          <el-table-column prop="remark" label="备注"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button link type="primary">上传发票</el-button>
              <el-button link type="primary">编辑</el-button>
              <el-button link type="primary">删除</el-button>
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