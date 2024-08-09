<template>
  <div class="recording">
    <div class="top">
      <span style="margin-right: 20px;">录入到款信息</span>
      <el-button @click="$router.back">返回</el-button>
      <div class="s-flex-auto"></div>
      <el-button type="primary" @click="addDetail">添加明细</el-button>
    </div>
    <div style="margin-bottom: 10px">
      <el-button link type="primary" @click="$router.push({name: 'ContractDetail', query: {orderId: orderId}})">查看合同</el-button>
    </div>
    <div>
      <el-form :data="formData" label-width="auto" label-position="left">
        <div v-for="(item, index) in formData" :key="index" class="item">
          <el-row :gutter="20">
            <el-col :md="12" >
              <el-form-item label="订单类型">
                <el-radio-group v-model="item.orderType">
                  <el-radio :value="1">展位</el-radio>
                  <el-radio :value="2">物料</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="付款公司">
                <el-input v-model="item.payCompany"></el-input>
              </el-form-item>
              <el-form-item label="到款类型">
                <el-select v-model="item.payType">
                  <!-- 1预定金2首款3二次款4尾款5转款 -->
                  <el-option label="预定金" :value="1"></el-option>
                  <el-option label="首款" :value="2"></el-option>
                  <el-option label="二次款" :value="3"></el-option>
                  <el-option label="尾款" :value="4"></el-option>
                  <el-option label="转款" :value="5"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="到款金额">
                <el-input v-model="item.payPrice"></el-input>
              </el-form-item>
              <!-- <el-form-item label="到款金额">
                <el-input v-model="formData.payPrice"></el-input>
              </el-form-item> -->
              <el-form-item label="到款时间">
                <el-date-picker
                  v-model="item.payTime"
                  type="date"
                  value-format="YYYY-MM-DD"
                  placeholder=""
                  style="width: 100%"
                />
              </el-form-item>
              <el-form-item label="收款账户">
                <el-input v-model="item.account"></el-input>
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
                        :src="item.payImg" 
                        :preview-src-list="[item.payImg]" 
                        fit="contain" 
                        style="width: 100px; height: 100px;">
                        <template #error v-if="item.payImg === ''">
                          <div class="image-slot">
                            <el-icon><Picture /></el-icon>
                          </div>
                        </template>
                      </el-image>
                      <el-upload
                        class=""
                        :show-file-list="false"
                        :on-success="(response:any, file:any, fileList:any) => { item.payImg = response.url; }"
                        :before-upload="beforeUpload"
                        :http-request="uploadImg"
                        accept="image/*"
                      >
                        <el-button type="primary" size="small">上传文件</el-button>
                      </el-upload>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="到款凭证">
                    <div style="text-align: center;">
                      <el-image 
                        :src="item.receiveImg" 
                        :preview-src-list="[item.receiveImg]" 
                        fit="contain" 
                        style="width: 100px; height: 100px;">
                        <template #error v-if="item.receiveImg === ''">
                          <div class="image-slot">
                            <el-icon><Picture /></el-icon>
                          </div>
                        </template>
                      </el-image>
                      <el-upload
                        class=""
                        :show-file-list="false"
                        :on-success="(response:any, file:any, fileList:any) => { item.receiveImg = response.url; }"
                        :before-upload="beforeUpload"
                        :http-request="uploadImg"
                        accept="image/*"
                      >
                        <el-button type="primary" size="small">上传文件</el-button>
                      </el-upload>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :md="12">
              <el-form-item label="发票抬头">
                <el-input v-model="item.invoice.title"></el-input>
              </el-form-item>
              <el-form-item label="社会信用代码">
                <el-input v-model="item.invoice.socialCode"></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input v-model="item.invoice.contact"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="item.invoice.phone"></el-input>
              </el-form-item>
              <el-form-item label="发送邮箱">
                <el-input v-model="item.invoice.email"></el-input>
              </el-form-item>
              <el-form-item label="发票类型">
                <el-radio-group v-model="item.invoice.type">
                  <el-radio :value="1">电子专票</el-radio>
                  <el-radio :value="2">电子普票</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="开票状态">
                <el-radio-group v-model="item.invoice.status">
                  <el-radio :value="1">待开票</el-radio>
                  <el-radio :value="2">已开票</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="发票号">
                <el-input v-model="item.invoice.invoiceCode"></el-input>
              </el-form-item>
              <el-form-item label="发票附件">
                <div style="text-align: center;">
                  <el-image 
                    :src="item.invoice.img" 
                    :preview-src-list="[item.invoice.img]" 
                    fit="contain" 
                    style="width: 100px; height: 100px;">
                    <template #error v-if="item.invoice.img === ''">
                      <div class="image-slot">
                        <el-icon><Picture /></el-icon>
                      </div>
                    </template>
                  </el-image>
                  <el-upload
                    class=""
                    :show-file-list="false"
                    :on-success="(response:any, file:any, fileList:any) => { item.invoice.img = response.url; }"
                    :before-upload="beforeUpload"
                    :http-request="uploadImg"
                  >
                    <el-button type="primary" size="small">上传文件</el-button>
                  </el-upload>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="item.remark"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <div style="text-align: center; margin-top: 30px;">
                <template v-if="item.isSub">
                  <el-button type="primary" disabled>已提交</el-button>
                  <!-- <el-button @click="formData.splice(index, 1)">取消</el-button> -->
                </template>
                <template v-else>
                  <el-button type="primary" @click="submitForm(index)">保存</el-button>
                  <el-button @click="formData.splice(index, 1)">取消</el-button>
                </template>
              </div>
            </el-col>
          </el-row>
          
        </div>
      </el-form>
    </div>
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

const orderId: any = ref(Number(route.query.id))

  const formData: any = reactive([{
    orderId: orderId,
    orderType: 1,
    payImg: '',
    receiveImg: '',
    invoice: {
      img: '',
    }
  }])

  const addDetail = () => {
    formData.push({
      orderId: orderId,
      orderType: 1,
      payImg: '',
      receiveImg: '',
      invoice: {
        img: '',
      }
    })
  }

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


const submitForm = (i: any) => {
  payment.add(formData[i]).then(res => {
    if(res.code === 0){
      ElMessage.success('保存成功')
      formData[i].isSub = true
      if(!formData.some((item: any) => item.isSub !== true)){
        setTimeout(() => {
          router.back()
        }, 2000)
      }
    }else{
      ElMessage.error(res.msg)
    }
  })
}
</script>
<style scoped>
.recording{
  .top{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .item{
    padding: 20px;
    border: 1px solid var(--el-border-color-lighter);
    /* margin-bottom: 20px; */
    border-radius: 4px;
    &+.item{
      margin-top: 20px;
    }
  }
}
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