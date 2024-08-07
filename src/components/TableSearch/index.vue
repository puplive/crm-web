<script setup lang="ts">
import { reactive, ref, computed, onMounted, watch } from 'vue'
import type { FormInstance } from 'element-plus'
import {types, invoiceTypes, paymentTypes} from '@/api/types'
import {sponsorAccount} from '@/api/user/index'

const refForm = ref<FormInstance>()
interface DataItem {
  text: string;
  field: string;
  type: string;
  options?: { label: string; value: string }[];
}
const props = defineProps<{
  data: DataItem[],
  type?: string
}>()


const list: any = ref([])

watch(() => props.data, (val) => {
  list.value.push( val[0])
  if(val.some((item) => item.field === 'authUser')){
    sponsorAccount.getAccount().then((res) => {
      if(res.code === 0){
        types['authUser'].options = res.data.map((item: any) => {
          return { label: item.name, value: item.name }
        })
      }
    })
  }
})

const add = () => {
  for (let index = 0; index < props.data.length; index++) {
    const element = props.data[index];
    if(!hasField(element.field)){
      list.value.push(element)

      return
    }
  }
  
}

const setList = (index: number, field: string) => {
  list.value[index] = props.data.find((item) => item.field === field)
}

const hasField = (field: string) => {
  return list.value.some((item: any) => item.field === field)
}

const emit = defineEmits(['search'])

const formData:any = reactive({})

// props.data.forEach((item: any) => {
//   formData[item.field] = ''
// })

const options = computed(() => {
  return (field: string)=>{

      if(field === 'payType'){
        if(props.type === 'invoice'){
          return invoiceTypes[field].options
        }
      }else if(field === 'invoiceStatus'){
        if(props.type === 'invoice'){
          return invoiceTypes[field].options
        }else if(props.type === 'payment'){
          return paymentTypes[field].options
        }
      }
      // else if(field === 'authUser'){
      //   return 
      // }
      return types[field].options
    
  }
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('search', formData)
}
const _search = () =>{
  emit('search', formData)
}
onMounted(() => {
  // console.log('props.data', props.data)
  // if(props.data.length > 0){
  //   list.value.push(props.data[0])
  // }
})
</script>
<template>
  <div>
    <el-form ref="refForm"  :inline="true" :model="formData" class="table-search-form" label-width="auto" label-position="left">

      <el-form-item v-for="(item, index ) in list" :key="index" :prop="item.field">
        <template #label>
          <el-dropdown  trigger="click">
            <el-button link style="line-height: 26px;"  >{{ item.text }}</el-button>
            <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item 
              v-for="(option, i) in data" 
              :key="i" 
              @click="()=>{
                formData[item.field] = '';
                _search();
                setList(index, option.field)
              }"
              :disabled="hasField(option.field)">
              {{ option.text }}
            </el-dropdown-item>
            
          </el-dropdown-menu>
        </template>
          </el-dropdown>
        </template>
        <template v-if="types[item.field]">
          <el-select v-if="types[item.field].type === 3" v-model="formData[item.field]" placeholder="请选择" clearable>
            <!-- <el-option label="全部" value=""></el-option> -->
            <el-option v-for="(option, index) in options(item.field)" :key="index" :label="option.label" :value="option.value"></el-option>
          </el-select>
          <!-- <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="formData[item.field]">
            <el-checkbox v-for="(option, index) in item.options" :key="index" :label="option.value">{{ option.label }}</el-checkbox>
          </el-checkbox-group> -->

          <!-- <el-radio-group v-else-if="item.type === 'radio'" v-model="formData[item.field]">
            <el-radio v-for="(option, index) in item.options" :key="index" :label="option.value">{{ option.label }}</el-radio>
          </el-radio-group> -->
          <!-- <el-cascader v-else-if="item.type === 'cascader'" v-model="formData[item.field]" :options="item.options" placeholder="请选择">
          </el-cascader> -->
          <!-- <el-date-picker v-else-if="item.type === 'date'" v-model="formData[item.field]" type="date" placeholder="Pick a date" clearable /> -->
          <!-- <el-time-picker v-else-if="item.type === 'time'" v-model="formData[item.field]" type="timerange" placeholder="Select time" clearable /> -->
        </template>
        <el-input v-else v-model="formData[item.field]" placeholder="请输入" clearable />
        <el-button 
          v-if="list.length > 1" 
          type="primary" icon="Minus" size="small" circle
          @click="() => {
            formData[item.field] = ''; 
            list.splice(index, 1); 
            _search();
          }"  
          style="font-size: 16px; margin-left: 5px "/>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="_search">搜索</el-button>
        <el-button type="primary" @click="resetForm(refForm)">重置</el-button>
        <el-button 
          v-if="list.length < props.data.length" 
          type="primary" icon="Plus" size="small" circle 
          style="font-size: 16px;" 
          @click="add" />
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.table-search-form .el-input {
  --el-input-width: 220px;
}

.table-search-form .el-select {
  --el-select-width: 220px;
}
</style>