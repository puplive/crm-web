<template>
  <el-upload
    ref="uploadRef"
    style="display: inline-flex; margin-right: 5px; position: relative; top: 2px;"
    :show-file-list="false"
    :on-success="(response:any, file:any, fileList:any) => { uploadInvoice(response.url) }"
    :before-upload="beforeUpload"
    :http-request="uploadImg"
  >
    <el-button link type="primary" :loading="loading" :disabled="props.disabled">上传发票</el-button>
  </el-upload>
</template>
<script lang="ts" setup>
  import { ref, defineProps, defineEmits } from 'vue'
  import {invoice} from '@/api/Finances'
  import { uploadFile } from '@/api/common'

  const props = defineProps(['id', 'disabled'])
  const loading = ref(false)
  const uploadRef: any = ref(null)

const beforeUpload: any = (rawFile: any) => {
  // if (rawFile.type !== 'image/jpeg') {
  //   ElMessage.error('Avatar picture must be JPG format!')
  //   // return false
  // } else 
  if (rawFile.size / 1024 / 1024 > 3) {
    ElMessage.error('文件大小不能超过 3MB!')
    return false
  }
  return true
}

const uploadImg = (fileObj: any) => {
  loading.value = true
  let formData = new FormData()
  formData.append('upload', fileObj.file)
  return new Promise((resolve, reject) => {
    uploadFile(formData).then((res: any) => {
      if(res.code === 0){
        resolve(res.data)
      }else{
        reject(res)
        ElMessage.error(res.msg)
        uploadRef.value.clearFiles()
      }
      loading.value = false
    }).catch((err: any) => {
      reject(err)
      ElMessage.error('上传失败')
      uploadRef.value.clearFiles()
      loading.value = false
    })
  })
}

const uploadInvoice = (url: any)=> {
  invoice.uploadInvoice({ id: props.id, url: url }).then((res: any) => {
    if(res.code === 0) {
      ElMessage.success('上传成功')
      emit('callback')
    }else {
      ElMessage.error(res.msg)
    }
  })

}
const emit = defineEmits(['callback'])
</script>