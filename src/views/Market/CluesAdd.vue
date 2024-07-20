<template>
  <div class="" style="margin-bottom: 20px;">
    <span>新建销售线索</span>
  </div>
  <div style="width: 500px;">
    <el-form ref="formRef" :model="form" label-width="auto">
      <el-form-item label="企业名称" prop="companyName" :rules="rules.required">
        <el-input v-model="form.companyName"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contactName" :rules="rules.required">
        <el-input v-model="form.contactName"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="contactTel" :rules="rules.phone">
        <el-input v-model="form.contactTel"/>
      </el-form-item>
      <el-form-item label="国家" prop="country" :rules="rules.select">
        <el-select v-model="countryCode">
          <el-option v-for="item in country" :key="item.code" :label="item.name" :value="item.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="省份" prop="province" :rules="rules.select">
        <el-select v-model="provinceCode">
          <el-option v-for="item in province" :key="item.code" :label="item.name" :value="item.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city" :rules="rules.select">
        <el-select v-model="cityCode">
          <el-option v-for="item in city" :key="item.code" :label="item.name" :value="item.code"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="详细地址" prop="address" :rules="rules.required">
        <el-input type="textarea" v-model="form.address" />
      </el-form-item>
      <el-form-item 
        v-for="(item, index) in form.companyBrand" :key="index"
        :label="index === 0 ? '品牌': ' '" 
        :prop="`companyBrand[${index}]`" :rules="rules.required">
        <!-- <div v-for="(item, index) in form.companyBrand" :key="index"
          :style="`width: 100%; ${index === 0 ? '' : 'margin-top: 5px;'}`"> -->
          <el-input v-model="form.companyBrand[index]">
            <template #append>
              <el-button v-if="index === 0" @click="form.companyBrand.push('')" icon="Plus" />
              <el-button v-else @click="form.companyBrand.splice(index, 1)" icon="Minus" />
            </template>
          </el-input>
        <!-- </div> -->
      </el-form-item>

      <template v-for="(item, index ) in customField" :key="item.key">
        <el-form-item :label="item.name" :prop="`customField[${index}][${item.key}]`" :rules="item.isRequired ? customFieldTypes[item.type].rules : []">
          <el-input v-if="item.type === 1" v-model.trim="form.customField[index][item.key]" />
          <el-input v-else-if="item.type === 2" v-model.trim="form.customField[index][item.key]" type="textarea" />
          <el-select v-else-if="item.type === 3" v-model="form.customField[index][item.key]">
            <el-option v-for="option in item.data || []" :key="option.id" :label="option.name" :value="option.id"></el-option>
          </el-select>
          <el-radio-group v-else-if="item.type === 4" v-model="form.customField[index][item.key]">
            <el-radio v-for="option in item.data || []" :key="option.id" :value="option.id">{{ option.name }}</el-radio>
          </el-radio-group>
          <el-checkbox-group v-else-if="item.type === 5" v-model="form.customField[index][item.key]">
            <el-checkbox v-for="option in item.data || []" :key="option.id" :value="option.id" name="type">
              {{ option.name }}
            </el-checkbox>
          </el-checkbox-group>
          <el-cascader 
            v-else-if="item.type === 6" 
            clearable 
            style="width: 100%;"
            v-model="form.customField[index][item.key]"
            :options="item.data" 
            :props="{ value: 'id', label: 'name', children: 'child', checkStrictly: true, }" />
          <el-cascader 
            v-else-if="item.type === 7"  
            clearable 
            style="width: 100%;"
            v-model="form.customField[index][item.key]"
            :options="item.data"
            :props="{ value: 'id', label: 'name', children: 'child', checkStrictly: true, multiple: true, }" />
        </el-form-item>
      </template>

      <div style="margin-top: 20px; text-align: right;">
        <el-button type="primary" @click="save" size="small">保存</el-button>
        <el-button type="default" @click="$router.go(-1)" size="small">取消</el-button>
      </div>
    </el-form>
  </div>

</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/api/Clues'
import { customFieldTypes } from "@/api/Custom";
import rules from "@/utils/rules";
const router = useRouter()
const route = useRoute()
// const activeName = ref('first')
const formRef: any = ref(null)
const form: any = ref({
  companyName: '', // 公司名称
  contactName: '', // 联系人
  contactTel: '', // 联系方式
  country: '', // 中国
  province: '', // 湖北
  city: '', // 武汉
  address: '', // 地址
  companyBrand: [''], // 品牌2
  customField: [] // 自定义字段数据
})
const country: any = ref([])
const province: any = ref([])
const city: any = ref([])
const countryCode: any = ref('')
const provinceCode: any = ref('')
const cityCode: any = ref('')
const customField: any = ref([])

const save = () => {
  console.log(form.value)
  formRef.value.validate((valid: any) => {
    if (!valid) {
      return
    }
    api.add(form.value).then(res => {
      if (res.code === 0) {
        ElMessage.success('保存成功')
        router.go(-1)
      } else {
        ElMessage.error(res.msg)
      }
    })

  })
}

const getCountry = () => {
  api.getCountry().then(res => {
    if (res.code === 0) {
      country.value = res.data
      countryCode.value = 'CHN'
    }
  })
}

const getProvince = () => {
  api.getProvince({ countryCode: countryCode.value }).then(res => {
    if (res.code === 0) {
      province.value = res.data
    }
  })
}

const getCity = () => {
  api.getCity({ provinceCode: provinceCode.value }).then(res => {
    if (res.code === 0) {
      city.value = res.data
    }
  })
}

watch(() => countryCode.value, (newVal) => {
  let d = country.value.find((i: any) => { return i.code == newVal })
  form.value.country = d ? d.name || '' : ''
  // console.log(d)
  getProvince()
})
watch(() => provinceCode.value, (newVal) => {
  let d = province.value.find((i: any) => { return i.code == newVal })
  form.value.province = d ? d.name || '' : ''
  getCity()
})

watch(() => cityCode.value, (newVal) => {
  let d = city.value.find((i: any) => { return i.code == newVal })
  form.value.city = d ? d.name || '' : ''

})

const getCustomField = () => {
  api.getCustomField().then(res => {
    if (res.code === 0) {
      customField.value = res.data

      res.data.forEach((item: any) => {
        form.value.customField.push({
          [item.key]: customFieldTypes[item.type].value,
        })
      })
      // form.value.customField[4]['custom11'] = [["1"], ["1", "1-2"], ["1", "1-2", "1-2-1"], ["1", "1-1", "1-1-2"]]
      // console.log(form.value.customField)
      // form.value.customField = res.data
    }
  })
}



getCountry()
getCustomField()
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  >label {
    margin-right: 30px;
    font-weight: bold;
  }
}
</style>