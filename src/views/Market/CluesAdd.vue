<template>
  <el-tabs v-model="activeName" type="border-card" class="demo-tabs">
    <el-tab-pane label="资料" name="first">

      <el-form ref="formRef" :model="form" label-width="auto">
        <div class="title-bar">
          <label for="">公司信息</label>
          <el-button type="primary" @click="save" size="small">保存</el-button>
          <el-button type="default" @click="handleClick" size="small">取消</el-button>
        </div>
        <el-col :md="12" :lg="8">
            <el-col>
              <el-form-item label="企业名称" prop="companyName">
                <el-input v-model="form.companyName"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="联系人" prop="contactName">
                <el-input v-model="form.contactName"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="联系电话" prop="contactTel">
                <el-input v-model="form.contactTel"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="国家" prop="country">
                <el-select v-model="countryCode">
                  <el-option v-for="item in country" :key="item.code"  :label="item.name" :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="省份" prop="province">
                <el-select v-model="provinceCode">
                  <el-option v-for="item in province" :key="item.code"  :label="item.name" :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="城市" prop="city">
                <el-select v-model="cityCode">
                  <el-option v-for="item in city" :key="item.code"  :label="item.name" :value="item.code"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <!-- <el-col>
              <el-form-item label="地区" prop="address">
                <el-select v-model="form.address"></el-select>
              </el-form-item>
            </el-col> -->
            <el-col>
              <el-form-item label="详细地址" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </el-col>
            <el-form-item label="企业品牌" prop="companyBrand">
              <el-input v-model="form.companyBrand[0]"></el-input>
            </el-form-item>

            <!-- <el-form-item label="自定义字段" prop="customField"></el-form-item> -->
            

              <!-- <el-form-item label="客户类别" prop="address">
                <el-select v-model="form.address"></el-select>
              </el-form-item>

              <el-form-item label="来源细分" prop="address">
                <el-select v-model="form.address"></el-select>
              </el-form-item>

              <el-form-item label="曾用名" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>

              <el-form-item label="主营业务" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>

              <el-form-item label="数据来源" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>

              <el-form-item label="行业分类" prop="address">
                <el-select v-model="form.address"></el-select>
              </el-form-item>

              <el-form-item label="会员" prop="address">
                <el-radio-group v-model="form.address">
                  <el-radio value="1">是</el-radio>
                  <el-radio value="2">否</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="备案" prop="address">
                <el-radio-group v-model="form.address">
                  <el-radio value="1">是</el-radio>
                  <el-radio value="2">否</el-radio>
                </el-radio-group>
              </el-form-item> -->
        </el-col>
      </el-form>
    </el-tab-pane>

  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api/Clues'
const router = useRouter()
const route = useRoute()
const activeName = ref('first')
const form:any = ref({
  companyName: '', // 公司名称
  contactName: '', // 联系人
  contactTel: '', // 联系方式
  country: '', // 中国
  province: '', // 湖北
  city: '', // 武汉
  address: '', // 地址
  companyBrand: [], // 品牌2
  customField: [{}] // 自定义字段数据
})
const country:any = ref([])
const province:any = ref([])
const city:any = ref([])
const countryCode:any = ref('')
const provinceCode:any = ref('')
const cityCode:any = ref('')


const handleClick = () => {
  console.log(form.value)
  router.push('/market/clues/info')
}

const save = () => {
  api.add(form.value).then(res => {
    if (res.code === 0) {
      ElMessage.success('保存成功')
      router.go(-1)
    }else {
      ElMessage.error(res.msg)
    }
  })

}

const getCountry = ()=>{
  api.getCountry().then(res =>{
    if (res.code === 0) {
      country.value = res.data
      countryCode.value = 'CHN'
    }
  })
}

const getProvince = () => {
  api.getProvince({countryCode: countryCode.value}).then(res => {
    if (res.code === 0) {
      province.value = res.data
    }
  })
}

const getCity = () => {
  api.getCity({provinceCode: provinceCode.value}).then(res => {
    if (res.code === 0) {
      city.value = res.data
    }
  })
}

watch(() => countryCode.value, (newVal) => {
  let d = country.value.find((i:any) =>{ return i.code == newVal})
  form.value.country = d? d.name || '': ''
  console.log(d)
  getProvince()
})
watch(() => provinceCode.value, (newVal) => {
  let d = province.value.find((i:any) =>{ return i.code == newVal})
  form.value.province = d? d.name || '': ''
  getCity()
})

watch(() => cityCode.value, (newVal) => {
  let d = city.value.find((i:any) =>{ return i.code == newVal})
  form.value.city = d ? d.name || '': ''
  
})

getCountry()


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