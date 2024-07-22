<script lang="ts" setup>
  import { reactive } from 'vue'
  import { invoice } from '@/api/Finances'
  import { uploadFile } from '@/api/common'
  
  const apply: any = reactive({
    show: false,
    form: {
      paymentId: '',
      title: '', // 发票抬头
      socialCode: '', // 社会信用代码,
      contact: '', // 联系人,
      phone: '', // 手机号,
      email: '', // 邮箱,
      type: '', // 1,
      status: '', // 1,
      invoiceCode: '', // 发票号,
      img: '', // 发票附件,
    },
  })

  const applySub = () => {
    invoice.apply(apply.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('申请成功')
        apply.show = false
        emit('callback')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const setApplay = (row: any) => {
    apply.show = true
    apply.form.paymentId = row.id
    apply.form.title = row.title
    apply.form.socialCode = row.socialCode
    apply.form.contact = row.contact
    apply.form.phone = row.phone
    apply.form.email = row.email
    apply.form.type = row.type
    apply.form.status = row.status
    apply.form.invoiceCode = row.invoiceCode
    apply.form.img = row.img
  }

  const beforeUpload: any = (rawFile: any) => {
    // if (rawFile.type !== 'image/jpeg') {
    //   ElMessage.error('Avatar picture must be JPG format!')
    //   // return false
    // } else 
    if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('最大 2MB!')
      return false
    }
    return true
  }

  const uploadImg = (fileObj: any) => {
    let formData = new FormData()
    formData.append('upload', fileObj.file)
    return new Promise((resolve, reject) => {
      uploadFile(formData).then((res: any) => {
        if(res.code === 0){
          resolve(res.data)
        }else{
          reject(res)
        }
      })
    })
  }

  const emit = defineEmits(['callback'])
  defineExpose({
    setApplay,
  })
</script>
<template>
  <el-dialog v-model="apply.show" title="申请发票" width="500" draggable>
    <el-form ref="willFormRef" :model="apply.form" label-width="auto">
      <!-- <el-form-item label=" " style="margin-bottom: 0;">
        <span style="font-size: 16px; font-weight: bold;">{{ willForm.name }}</span>
      </el-form-item> -->
      
      <el-form-item label="发票抬头" >
        <el-input v-model="apply.form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="社会信用代码" >
        <el-input v-model="apply.form.socialCode" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系人" >
        <el-input v-model="apply.form.contact" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号" >
        <el-input v-model="apply.form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" >
        <el-input v-model="apply.form.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="发票类型">
        <el-radio-group v-model="apply.form.type">
          <el-radio :value="1">电子专票</el-radio>
          <el-radio :value="2">电子普票</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="开票状态">
        <el-radio-group v-model="apply.form.status">
          <el-radio :value="0">待开票</el-radio>
          <el-radio :value="1">已开票</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="发票号" >
        <el-input v-model="apply.form.invoiceCode" autocomplete="off" />
      </el-form-item>
      <el-form-item label="发票附件" prop="img">
        <el-upload
          :on-success="(response:any, file:any, fileList:any) => { apply.form.img = response.url }"
          :before-upload="beforeUpload"
          :http-request="uploadImg"
        >
          <el-button link type="primary" size="small">上传附件</el-button>
        </el-upload>
        
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="apply.show = false">取消</el-button>
        <el-button type="primary" @click="applySub">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>