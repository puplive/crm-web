<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { payment } from '@/api/Finances'
  import { uploadFile } from '@/api/common'
  
  const loading = ref(false)
  const uploadRef1 = ref(null)
  const uploadRef2 = ref(null)
  const edit: any = reactive({
    show: false,
    form: {
      "id": 0,
      "payCompany": "",
      "payType": 0,
      "payPrice": "",
      "payTime": "",
      "account": "",
      "payImg": "",
      "receiveImg": "",
      "remark": ""
    },
  })

  const editSub = () => {
    loading.value = true
    payment.edit(edit.form).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('修改成功')
        edit.show = false
        emit('callback')
      }else {
        ElMessage.error(res.msg)
      }
      loading.value = false
    }).catch((err: any) => {
      loading.value = false
    })
  }
  const setEdit = (row: any) => {
    edit.show = true
    edit.form.id = row.id
    edit.form.payCompany = row.payCompany
    edit.form.payType = row.payType
    edit.form.payPrice = row.payPrice
    edit.form.payTime = row.payTime
    edit.form.account = row.account
    edit.form.payImg = row.payImg
    edit.form.receiveImg = row.receiveImg
    edit.form.remark = row.remark
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

  const loading1 = ref(false)
  const loading2 = ref(false)
  const uploadImg = (fileObj: any, type: number) => {
    let _loading: any,
        _ref: any;
    if (type === 1) {
      _loading = loading1
      _ref = uploadRef1
    }else{
      _loading = loading2
      _ref = uploadRef2
    }
    _loading.value = true
    let formData = new FormData()
    formData.append('upload', fileObj.file)
    return new Promise((resolve, reject) => {
      uploadFile(formData).then((res: any) => {
        if(res.code === 0){
          resolve(res.data)
        }else{
          reject(res)
          ElMessage.error('上传失败');
          _ref.value.clearFiles()
        }
        _loading.value = false
      }).catch((err: any) => {
        reject(err)
        ElMessage.error('上传失败'); 
        _ref.value.clearFiles()
        _loading.value = false
      })
    })
  }

  const emit = defineEmits(['callback'])
  defineExpose({
    setEdit: setEdit,
  })
</script>
<template>
  <el-dialog v-model="edit.show" title="编辑付款信息" width="500" draggable>
    <el-form ref="willFormRef" :model="edit.form" label-width="auto" label-position="left">
      <!-- <el-form-item label="订单类型">
        <el-radio-group v-model="item.orderType">
          <el-radio :value="1">展位</el-radio>
          <el-radio :value="2">物料</el-radio>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item label="付款公司">
        <el-input v-model="edit.form.payCompany"></el-input>
      </el-form-item>
      <el-form-item label="到款类型">
        <el-select v-model="edit.form.payType">
          <!-- 1预定金2首款3二次款4尾款5转款 -->
          <el-option label="预定金" :value="1"></el-option>
          <el-option label="首款" :value="2"></el-option>
          <el-option label="二次款" :value="3"></el-option>
          <el-option label="尾款" :value="4"></el-option>
          <el-option label="转款" :value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="到款金额">
        <el-input v-model="edit.form.payPrice"></el-input>
      </el-form-item>
      <!-- <el-form-item label="到款金额">
        <el-input v-model="formData.payPrice"></el-input>
      </el-form-item> -->
      <el-form-item label="到款时间">
        <el-date-picker
          v-model="edit.form.payTime"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder=""
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="收款账户">
        <el-input v-model="edit.form.account"></el-input>
        <!-- <el-select v-model="formData.account">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
        </el-select> -->
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="付款凭证">
            <div style="text-align: center;">
              <el-image 
                :src="edit.form.payImg" 
                :preview-src-list="[edit.form.payImg]" 
                fit="contain" 
                style="width: 100px; height: 100px;">
                <!-- <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template> -->
              </el-image>
              <el-upload
                ref="uploadRef1"
                :show-file-list="false"
                :on-success="(response:any, file:any, fileList:any) => { edit.form.payImg = response.url; }"
                :before-upload="beforeUpload"
                :http-request="(fileObj:any)=>uploadImg(fileObj, 1)"
                accept="image/*"
              >
                <el-button type="primary" :loading="loading1">上传文件</el-button>
              </el-upload>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到款凭证">
            <div style="text-align: center;">
              <el-image 
                :src="edit.form.receiveImg" 
                :preview-src-list="[edit.form.receiveImg]" 
                fit="contain" 
                style="width: 100px; height: 100px;">
                <!-- <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template> -->
              </el-image>
              <el-upload
                ref="uploadRef2"
                :show-file-list="false"
                :on-success="(response:any, file:any, fileList:any) => { edit.form.receiveImg = response.url; }"
                :before-upload="beforeUpload"
                :http-request="(fileObj:any)=>uploadImg(fileObj, 2)"
                accept="image/*"
              >
                <el-button type="primary" :loading="loading2">上传文件</el-button>
              </el-upload>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="edit.form.remark"></el-input>
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