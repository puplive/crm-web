<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { invoice } from '@/api/Finances'
  // import { uploadFile } from '@/api/common'
  
  const loading = ref(false)
  const uploadRef = ref(null)
  const edit: any = reactive({
    show: false,
    form: {
      id: '',
      title: '', // 发票抬头
      socialCode: '', // 社会信用代码,
      contact: '', // 联系人,
      phone: '', // 手机号,
      email: '', // 邮箱,
      // type: '', // 1,
      // status: '', // 1,
      // invoiceCode: '', // 发票号,
      // img: '', // 发票附件,
    },
  })

  const editSub = () => {
    invoice.edit(edit.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('修改成功')
        edit.show = false
        emit('callback')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const setEdit = (row: any) => {
    edit.show = true
    edit.form.id = row.id
    edit.form.title = row.invoiceTitle
    edit.form.socialCode = row.socialCode
    edit.form.contact = row.contact
    edit.form.phone = row.phone
    edit.form.email = row.email
    // edit.form.type = row.type
    // edit.form.status = row.status
    // edit.form.invoiceCode = row.invoiceCode
    // edit.form.img = row.img
  }

  // const beforeUpload: any = (rawFile: any) => {
  //   // if (rawFile.type !== 'image/jpeg') {
  //   //   ElMessage.error('Avatar picture must be JPG format!')
  //   //   // return false
  //   // } else 
  //   if (rawFile.size / 1024 / 1024 > 3) {
  //     ElMessage.error('文件大小不能超过 3MB!')
  //     return false
  //   }
  //   return true
  // }

  // const uploadImg = (fileObj: any) => {
  //   loading.value = true
  //   let formData = new FormData()
  //   formData.append('upload', fileObj.file)
  //   return new Promise((resolve, reject) => {
  //     uploadFile(formData).then((res: any) => {
  //       if(res.code === 0){
  //         resolve(res.data)
  //       }else{
  //         reject(res)
  //         ElMessage.error('上传失败');
  //         uploadRef.value.clearFiles()
  //       }
  //       loading.value = false
  //     }).catch((err: any) => {
  //       reject(err)
  //       ElMessage.error('上传失败'); 
  //       uploadRef.value.clearFiles()
  //       loading.value = false
  //     })
  //   })
  // }

  const emit = defineEmits(['callback'])
  defineExpose({
    setEdit: setEdit,
  })
</script>
<template>
  <el-dialog v-model="edit.show" title="编辑发票" width="500" draggable>
    <el-form ref="willFormRef" :model="edit.form" label-width="auto">
      <el-form-item label="发票抬头" >
        <el-input v-model="edit.form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="社会信用代码" >
        <el-input v-model="edit.form.socialCode" autocomplete="off" />
      </el-form-item>
      <el-form-item label="联系人" >
        <el-input v-model="edit.form.contact" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号" >
        <el-input v-model="edit.form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" >
        <el-input v-model="edit.form.email" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="edit.show = false">取消</el-button>
        <el-button type="primary" @click="editSub">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>