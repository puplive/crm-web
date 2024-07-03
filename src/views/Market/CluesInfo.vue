<template>
  <div class="clues-info">
    <div class="clues-info-header">
      <div class="clues-info-header-left">
        <div>会展供应链</div>
        <div>
          <span>所属展商：会展供应链</span>
          <span>新展商： 是  否 </span>
          <span>客户经理：特许展测试</span>
        </div>
      </div>
      <div class="clues-info-header-right">
        <el-button type="primary" size="small">退展</el-button>
        <el-button type="primary" size="small">转他人</el-button>
      </div>
    </div>
    <div class="clues-info-content">
      <div class="clues-info-left">
        <el-tabs v-model="activeName" type="border-card" class="demo-tabs" style="height: 100%;">
          <el-tab-pane label="资料" :name="1">

            <el-form ref="form" :model="form" label-width="auto">
              <div class="title-bar">
                <label for="">公司信息</label>
                <el-button type="default" @click="handleClick" size="small">编辑</el-button>
                <el-button type="default" @click="handleClick" size="small">删除</el-button>
              </div>

              <el-form-item label="企业名称" prop="customerName">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="英文名称" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <!-- <el-form-item label="国家" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="省份" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="城市" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item> -->

              <el-form-item label="地区" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="详细地址" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="企业网址" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="企业备注" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="企业品牌" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="通讯地址" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="客户类别" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="来源细分" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="曾用名" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="主营业务" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="数据来源" prop="customerType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="行业分类" prop="industryType">
                <span>{{ form.customerName }}</span>
              </el-form-item>

              <el-form-item label="会员" prop="industryType">
                <el-radio-group v-model="form.resource">
                  <el-radio value="1">是</el-radio>
                  <el-radio value="2">否</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="备案" prop="industryType">
                <el-radio-group v-model="form.resource">
                  <el-radio value="1">是</el-radio>
                  <el-radio value="2">否</el-radio>
                </el-radio-group>
              </el-form-item>

            </el-form>
          </el-tab-pane>

          <el-tab-pane label="订单" :name="2">
            <div><el-button type="primary" size="mini">签订合同</el-button></div>
            <p style="padding: 10px 0;">展位订单</p>
            <el-table :data="orderData" border>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>

            <p style="padding: 10px 0; margin-top: 10px;">物料订单</p>
            <el-table :data="orderData" border>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="合同" :name="3">
            <el-table :data="orderData" border>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="clues-info-right">
        
        <FollowUp></FollowUp>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import FollowUp from './components/FollowUp.vue'

const activeName = ref(1)
const form = reactive({
  customerName: '打法阿斯顿安抚',
  customerType: '',
  industryType: '',
  resource: ''
})

const orderData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>
<style scoped>
.clues-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  .clues-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px 20px; */
    margin-bottom: 15px;
  }
 .clues-info-content {
    height: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    /* padding: 20px; */
    .clues-info-left{
      flex: 1;
    }
    .clues-info-right{
      width: 400px;
      margin-left: 15px;
      /* padding: 15px; */

      
    }
  }
}
.title-bar {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  >label {
    margin-right: 30px;
    font-weight: bold;
  }
}
.el-form-item{
  margin-bottom: 0;
}
</style>