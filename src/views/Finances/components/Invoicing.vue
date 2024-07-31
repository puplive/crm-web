<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { invoice } from '@/api/Finances'
  
  const loading = ref(false)
  const uploadRef = ref(null)
  const openInvoice: any = reactive({
    show: false,
    form: {
      id: '',
      code: '',
      type: 1,
    },
  })

  const openInvoiceSub = () => {
    invoice.openInvoice(openInvoice.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('成功')
        openInvoice.show = false
        emit('callback')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const openInvoiceSet = (row: any) => {
    openInvoice.show = true
    openInvoice.form.id = row.id
    openInvoice.form.code = ''
    openInvoice.form.type = 1
  }

  const emit = defineEmits(['callback'])
  defineExpose({
    openInvoiceSet: openInvoiceSet,
  })
</script>
<template>
  <el-dialog v-model="openInvoice.show" title="开票" width="500" draggable>
    <el-form ref="" :model="openInvoice.form" label-width="auto" label-position="left">
      <el-form-item label="发票类型" >
        <el-radio-group v-model="openInvoice.form.type">
          <el-radio :value="1">电子专票</el-radio>
          <el-radio :value="2">电子普票</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="发票号" >
        <el-input v-model="openInvoice.form.code" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="openInvoice.show = false">取消</el-button>
        <el-button type="primary" @click="openInvoiceSub">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>