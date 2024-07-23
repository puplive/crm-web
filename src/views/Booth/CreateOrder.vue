<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { booth as boothApi } from '@/api/Order';
import { ElMessage } from 'element-plus';

const router = useRouter();
const route: any = useRoute();

const companyName = route.query.companyName;
const data: any = ref({});
data.value = JSON.parse(route.query.data);
// console.log(data.value);
const unit:any = {1:'%', 2:'￥'}
const format = (d: any) => {
  let _t: any = []

  d.forEach((item: any) => {
    let i = JSON.parse(item)
    _t.push(i.price + unit[i.unit])
      
  })
  return _t.join('，')
}

const setFinalPrice = computed(()=>{
  return (i: any) => {
    let p = i.finalPrice

    if(i.isOffset === 1){
      p = p - i.deposit
    }
    if(i.payType === 2){
      p = p * i.ratio / 100
    }
    
    return Number(p.toFixed(2))
  }
})

const handleSubmit = () => {
  let _d: any = JSON.parse(JSON.stringify(data.value)),
    _add = _d.add.map((item: any) => {
      return JSON.parse(item)
    }),
    _discount = _d.discount.map((item: any) => {
      return JSON.parse(item)
    })
  _d.add = _add
  _d.discount = _discount
  boothApi.create(_d).then((res: any) => {
    if (res.code === 0) {
      ElMessage.success('提交成功');
      router.push({ name: 'Will' });
    } else {
      ElMessage.error(res.msg);
    }

  })
}
const handleBack = () => {
  router.go(-1);
}


</script>
<template>
  <div class="create-order">
    <div class="p1">{{ route.query.exhibitionName }}</div>

    <div class="p2">展位清单</div>


    <div v-for="(item, index) in data.position" :key="index" class="item">
      <el-table :data="[item]" border>
        <el-table-column prop="name" label="企业名称">
          <template #default="scoped">{{ companyName }}</template>
        </el-table-column>
        <el-table-column prop="companyBrand" label="参展品牌"></el-table-column>
        <el-table-column prop="hallCode" label="展馆号"></el-table-column>
        <el-table-column prop="positionCode" label="展位号"></el-table-column>
        <el-table-column prop="product" label="产品名称"></el-table-column> 
        <el-table-column prop="unitPrice" label="单价"></el-table-column> 
        <el-table-column prop="area" label="面积"></el-table-column> 
        <el-table-column prop="discount" label="折扣">
          <template #default="scoped">
              {{ format(data.discount) }}
          </template>
        </el-table-column> 
        <el-table-column prop="add" label="加收">
          <template #default="scoped">
              {{ format(data.add) }}
          </template>
        </el-table-column> 
      </el-table>
      <div class="p3">
        <span>订单原价：{{ item.costPrice }}</span>
        <span>最终金额：{{ item.finalPrice }}</span>
        <span>待支付金额：{{ setFinalPrice(item) }}</span>
        <span>优惠金额：{{ item.discountPrice }}</span>
        <span>加收金额：{{ item.addPrice }}</span>
      </div>
      <div class="p4">
        <!-- <el-checkbox v-model="item.deposit" label="预定金" /> -->
        <span>预定金</span>
        <el-input v-model="item.deposit" placeholder="请输入金额" style="width: 120px; margin: 0 10px 0 10px;"></el-input>
        <span>元</span>

        <span style="margin: 0 10px 0 40px;">是否冲抵展位费</span>
        <el-radio-group v-model="item.isOffset">
          <el-radio :value="1">是</el-radio>
          <el-radio :value="2">否</el-radio>
        </el-radio-group>

        <el-radio-group v-model="item.payType" style="margin: 0 10px 0 40px;">
          <el-radio :value="1">全款</el-radio>
          <el-radio :value="2">分期</el-radio>
        </el-radio-group>
        <el-input v-model="item.ratio" placeholder="分期比例" style="width: 120px;"></el-input>
        <span style="margin-left: 10px">%</span>
      </div>
    </div>

    <div style="text-align: center; padding: 20px;">
      <el-button type="primary" @click="handleSubmit">提交订单</el-button>

      <el-button type="" @click="handleBack">返回</el-button>
    </div>
  </div>
</template>
<style scoped>
  .create-order {
    .p1 {
       font-size: 18px;
       margin-bottom: 10px;
    }
    .p2 {
       font-size: 14px;
       margin-bottom: 10px;
    }
    .item {
       margin-bottom: 20px;
    }
    .p3 {
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: 40px;
       padding: 0 12px;
       /* margin-bottom: 20px; */
       border: 1px solid var(--el-border-color-lighter);
       border-top: none;
    }
    .p4 {
       display: flex;
       justify-content: flex-end;
       align-items: center;
       height: 40px;
       padding: 0 12px;
       border: 1px solid var(--el-border-color-lighter);
       border-top: none;
       .el-radio{
        margin-right: 15px;
       }
    }
  }
</style>