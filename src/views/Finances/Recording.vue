<template>
  <div style="margin-bottom: 20px;">
    录入到款信息
  </div>
  <div style="margin-bottom: 10px">
    <el-button link type="primary" @click="">查看合同</el-button>
  </div>
  <div>
    <el-form :data="formData" label-width="auto">
      <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="付款公司">
          <el-input v-model="formData.payCompany"></el-input>
        </el-form-item>
        <el-form-item label="到款类型">
          <el-select v-model="formData.payType">
            <!-- 1预定金2首款3二次款4尾款5转款 -->
            <el-option label="预定金" value="1"></el-option>
            <el-option label="首款" value="2"></el-option>
            <el-option label="二次款" value="3"></el-option>
            <el-option label="尾款" value="4"></el-option>
            <el-option label="转款" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到款金额">
          <el-input v-model="formData.payPrice"></el-input>
        </el-form-item>
        <!-- <el-form-item label="到款金额">
          <el-input v-model="formData.payPrice"></el-input>
        </el-form-item> -->
        <el-form-item label="到款时间">
          <!-- <el-input v-model="formData.payTime"></el-input> -->
          <el-date-picker
            v-model="formData.payTime"
            type="date"
            placeholder=""
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="收款账户">
          <el-input v-model="formData.account"></el-input>
          <!-- <el-select v-model="formData.account">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select> -->
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="付款凭证">
              <div style="text-align: center;">
                <el-image 
                  :src="formData.payImg" 
                  :preview-src-list="[formData.payImg]" 
                  fit="contain" 
                  style="width: 100px; height: 100px; margin-bottom: 10px;">
                  <template #error>
                    <div class="image-slot">
                      <el-icon><Picture /></el-icon>
                    </div>
                  </template>
                </el-image>
                <el-upload
                  class=""
                  :show-file-list="false"
                  :on-success="(response:any, file:any, fileList:any) => { formData.payImg = response.url; }"
                  :before-upload="beforeUpload"
                  :http-request="uploadImg"
                >
                  <el-button type="primary">上传文件</el-button>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="到款凭证">
              <div style="text-align: center;">
                <el-image 
                  :src="formData.receiveImg" 
                  :preview-src-list="[formData.receiveImg]" 
                  fit="contain" 
                  style="width: 100px; height: 100px; margin-bottom: 10px;">
                  <template #error>
                    <div class="image-slot">
                      <el-icon><Picture /></el-icon>
                    </div>
                  </template>
                </el-image>
                <el-upload
                  class=""
                  :show-file-list="false"
                  :on-success="(response:any, file:any, fileList:any) => { formData.receiveImg = response.url; }"
                  :before-upload="beforeUpload"
                  :http-request="uploadImg"
                >
                  <el-button type="primary">上传文件</el-button>
                </el-upload>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发票抬头">
          <el-input v-model="formData.invoice.title"></el-input>
        </el-form-item>
        <el-form-item label="社会信用代码">
          <el-input v-model="formData.invoice.socialCode"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="formData.invoice.contact"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formData.invoice.phone"></el-input>
        </el-form-item>
        <el-form-item label="发送邮箱">
          <el-input v-model="formData.invoice.email"></el-input>
        </el-form-item>
        <el-form-item label="发票类型">
          <el-input v-model="formData.invoice.type"></el-input>
        </el-form-item>
        <el-form-item label="开票状态">
          <el-input v-model="formData.invoice.status"></el-input>
        </el-form-item>
        <el-form-item label="发票号">
          <el-input v-model="formData.invoice.invoiceCode"></el-input>
        </el-form-item>
        <el-form-item label="发票附件">
          <div style="text-align: center;">
            <el-image 
              :src="formData.invoice.img" 
              :preview-src-list="[formData.invoice.img]" 
              fit="contain" 
              style="width: 100px; height: 100px; margin-bottom: 10px;">
              <template #error>
                <div class="image-slot">
                  <el-icon><Picture /></el-icon>
                </div>
              </template>
            </el-image>
            <el-upload
              class=""
              :show-file-list="false"
              :on-success="(response:any, file:any, fileList:any) => { formData.invoice.img = response.url; }"
              :before-upload="beforeUpload"
              :http-request="uploadImg"
            >
              <el-button type="primary">上传文件</el-button>
            </el-upload>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
      <div style="text-align: center; margin-top: 30px;">
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button @click="$router.back">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { invoice } from '@/api/Finances';
import { ref, reactive } from 'vue'
import { uploadFile } from '@/api/common'
import { payment } from '@/api/Finances'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()


  const formData: any = reactive({
    orderId: route.query.id,
    invoice: {}
  })

  const beforeUpload: any = (rawFile: any) => {
  // if (rawFile.type !== 'image/jpeg') {
  //   ElMessage.error('Avatar picture must be JPG format!')
  //   // return false
  // } else 
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('不能超过 2MB!')
    return false
  }
  return true
}

const uploadImg = (fileObj: any) => {
  let formData = new FormData()
  formData.append('upload', fileObj.file)
  return new Promise((resolve, reject) => {
    uploadFile(formData).then(res => {
      if(res.code === 0){
        resolve(res.data)
      }else{
        reject(res)
      }
    })
  })
}

const submitForm = () => {
  payment.add(formData).then(res => {
    if(res.code === 0){
      ElMessage.success('保存成功')
      router.back()
    }else{
      ElMessage.error(res.msg)
    }
  })
}
</script>
<style scoped>
  /* .img-uploader { */
    .image-slot {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: var(--el-fill-color-light); */
      /* color: var(--el-text-color-secondary); */
      font-size: 100px;
    }
  /* } */
</style>