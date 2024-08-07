<script lang="ts" setup>
  import { ref } from 'vue'
  import { clueImport, getImportTemplate } from '@/api/Clues';
  import { useRouter } from 'vue-router';
  import { downloadFile } from '@/utils/fileZip';
  import { genFileId } from 'element-plus'
  import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
 

  const router = useRouter()


  const active = ref(0)
  const fileList: any = ref([])
  const handleFileChange = (event: any) => {
    // file.value = event.target.files[0]
  }
  const type:any = ref(1)

  const loading = ref(false)
  const uploadRef: any = ref<UploadInstance>()

  const beforeUpload: any = (rawFile: any) => {
    // if (rawFile.type !== 'image/jpeg') {
    //   ElMessage.error('Avatar picture must be JPG format!')
    //   // return false
    // } else 
    if (rawFile.size / 1024 / 1024 > 20) {
      ElMessage.error('文件大小不能超过 20MB!')
      return false
    }
    return true
  }

  const uploadImg = (fileObj: any) => {
    loading.value = true
    let formData = new FormData()
    formData.append('file', fileObj.file)
    formData.append('type', type.value)
    return new Promise((resolve, reject) => {
      clueImport(formData).then((res: any) => {
        if(res.code === 0){
          ElMessage.success('上传成功');

          resolve(res.data)
          router.back()
        }else{
          reject(res)
          ElMessage.error(res.msg);
          uploadRef.value.clearFiles()
        }
        loading.value = false
      }).catch((err: any) => {
        reject(err)
        ElMessage.error('上传失败'); 
        uploadRef.value.clearFiles()
        loading.value = false
      })
    })
  }
  const handleSuccess = (res: any) => {
    console.log(res)
  }
  const handleExceed: UploadProps['onExceed'] = (files) => {
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value!.handleStart(file)
  }

  const getTemplate = () => {
    getImportTemplate().then((res: any) => {
      if(res.code === 0){
        downloadFile(res.data.url, res.data.name)
      }
    })
  }

  // const uploadRef = ref<UploadInstance>()
  const submitUpload = () => {
    uploadRef.value!.submit()
  }


</script>
<template>
  <div>
    <div></div>
    <div>
      <el-col :md="{span: 12, offset: 6}" style="margin-bottom: 20px">
        <el-steps style="width: 100%" :active="2" align-center>
          <el-step title="上传文件" />
          <el-step title="导入数据" />
          <el-step title="导入结果" />
        </el-steps>
      </el-col>
      <el-row>
        <el-col :span="12" class="l">
          <dl>
            <dt>一、请按最新的数据模版格式导入最新的数据</dt>
            <dd>
              <el-button type="primary" @click="getTemplate">下载数据模板</el-button>
            </dd>
          </dl>
          <dl>
            <dt>二、请选择数据重复时的处理方式</dt>
            <dd>
              <el-radio-group v-model="type">
                <el-radio label="忽略" :value="1" style="width: 100%;">导入新数据，跳过重复数据</el-radio>
                <el-radio label="覆盖" :value="2" style="width: 100%;">去重</el-radio>
                <el-radio label="新增" :value="3" style="width: 100%;">覆盖数据库已存在的数据</el-radio>
              </el-radio-group>
            </dd>
          </dl>
          <dl>
            <dt>三、上传需要导入的Xls 文件</dt>
            <dd>
              <el-upload
                ref="uploadRef"
                :before-upload="beforeUpload"
                :http-request="uploadImg"
                :limit="1"
                :on-exceed="handleExceed"
                type="drag"
                accept=".xls,.xlsx"
                :auto-upload="false"
              >
                <el-button type="primary">选择文件</el-button>
              </el-upload>
            </dd>
          </dl>
        </el-col>
        <el-col :span="12" class="r">
          <p><el-icon><WarningFilled /></el-icon>注意事项</p>
          <p>1.模板中的表头名称不可更改，表头不能删除。</p>
          <p>2.数据必填字段必须录入</p>
          <p>3.相应数据必须填写所有人</p>
          <p>4.每次导入最大条数100000，导入文件大小最大20Mb</p>
          <p>5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机</p>
        </el-col>
      </el-row>
      <div style="text-align: center;">
        <el-button type="primary" @click="submitUpload">导入</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .l{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: flex-end;
    padding-right: 50px;
    dl{
      margin-bottom: 50px;
      width: 300px;
    }
    dt{
      margin-bottom: 10px;
    }
    dd{
      padding-left: 30px;
    }
    
  }
  .r{
    padding-left: 50px;
    
    p{
      margin-bottom: 30px;
      width: 320px;
    }
  }
</style>