<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const refForm = ref<FormInstance>()
interface DataItem {
  text: string;
  field: string;
  type: string;
  options?: { label: string; value: string }[];
}
const props = defineProps<{
  data: DataItem[]
}>()

const emit = defineEmits(['search'])

const formData:any = reactive({})

props.data.forEach((item: any) => {
  formData[item.field] = ''
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('search', formData)
}
</script>
<template>
  <div>
    <el-form ref="refForm"  :inline="true" :model="formData" class="table-search-form" label-width="auto" label-position="left">

      <el-form-item v-for="(item, index ) in data" :key="index" :label="item.text" :prop="item.field">

        <!-- <el-input v-if="item.type === 'input'" v-model="formData[item.field]" placeholder="请输入" clearable /> -->
        <el-select v-if="item.type ==='select'" v-model="formData[item.field]" placeholder="请选择">
          <el-option v-for="(option, index) in item.options" :key="index" :label="option.label" :value="option.value"></el-option>
        </el-select>
        <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="formData[item.field]">
          <el-checkbox v-for="(option, index) in item.options" :key="index" :label="option.value">{{ option.label }}</el-checkbox>
        </el-checkbox-group>

        <el-radio-group v-else-if="item.type === 'radio'" v-model="formData[item.field]">
          <el-radio v-for="(option, index) in item.options" :key="index" :label="option.value">{{ option.label }}</el-radio>
        </el-radio-group>
        <!-- <el-cascader v-else-if="item.type === 'cascader'" v-model="formData[item.field]" :options="item.options" placeholder="请选择">
        </el-cascader> -->
        <el-date-picker v-else-if="item.type === 'date'" v-model="formData[item.field]" type="date" placeholder="Pick a date" clearable />
        <el-time-picker v-else-if="item.type === 'time'" v-model="formData[item.field]" type="timerange" placeholder="Select time" clearable />
        <!-- <el-input v-else-if="item.type === 'textarea'" v-model="formData[item.field]" type="textarea" placeholder="请输入" clearable /> -->
        <!-- <el-input v-else-if="item.type === 'number'" v-model="formData[item.field]" type="number" placeholder="请输入" clearable /> -->
        <el-input v-else v-model="formData[item.field]" placeholder="请输入" clearable />

      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="emit('search', formData)">搜索</el-button>
        <el-button v-if="data.length > 0" type="primary" @click="resetForm(refForm)">重置</el-button>
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