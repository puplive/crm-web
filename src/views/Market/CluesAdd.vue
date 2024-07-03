<template>
  <el-tabs v-model="activeName" type="border-card" class="demo-tabs">
    <el-tab-pane label="资料" name="first">

      <el-form ref="form" :model="form" label-width="auto">
        <div class="title-bar">
          <label for="">公司信息</label>
          <el-button type="primary" @click="handleClick" size="small">保存</el-button>
          <el-button type="default" @click="handleClick" size="small">取消</el-button>
        </div>
        <el-col :md="18" :lg="12">
          <el-row gutter="15">
            <el-col :md="12">
              <el-form-item label="企业名称" prop="customerName">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="英文名称" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="国家" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="省份" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="城市" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="地区" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="详细地址" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :md="12">
              <el-form-item label="企业网址" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>
            </el-col>

            <el-col :md="12">
              <el-form-item label="企业备注" prop="customerType">
                <el-input v-model="form.customerName" type="textarea"></el-input>
              </el-form-item>

              <el-form-item label="企业品牌" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>

              <el-form-item label="通讯地址" prop="customerType">
                <el-input v-model="form.customerName" type="textarea"></el-input>
              </el-form-item>

              <el-form-item label="客户类别" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>

              <el-form-item label="来源细分" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
              </el-form-item>

              <el-form-item label="曾用名" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>

              <el-form-item label="主营业务" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>

              <el-form-item label="数据来源" prop="customerType">
                <el-input v-model="form.customerName"></el-input>
              </el-form-item>

              <el-form-item label="行业分类" prop="industryType">
                <el-select v-model="form.industryType"></el-select>
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
            </el-col>
          </el-row>
        </el-col>
      </el-form>
    </el-tab-pane>

  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const activeName = ref('first')
const form = ref({
  customerName: '',
  customerType: '',
  industryType: '',
  resource: ''
})
const handleClick = () => {
  console.log(form.value)
  router.push('/market/clues/info')
}


</script>
<style scoped>
  .title-bar {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    > label {
      margin-right: 30px;
      font-weight: bold;
    }
  }
</style>