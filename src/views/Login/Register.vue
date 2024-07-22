<template>
  <div class="register-main">
    <vHeader></vHeader>
    <div class="register-container">
      <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" >
        <el-tab-pane label="参展企业注册" name="first"> -->
          <div class="register-title">
            <div class="label">参展企业注册</div>
          </div>
          <el-form
            style="width: 900px; margin: 0 auto;"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
            status-icon
          > 
            <el-row  :gutter="20">
              <el-col :span="12">
                <el-form-item label="企业名称" prop="companyName">
                  <el-input v-model="ruleForm.companyName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="姓名" prop="userName">
                  <el-input v-model="ruleForm.userName" style="width: calc(100% - 160px);" />
                  <el-form-item label="" prop="gender">
                    <el-radio-group v-model="ruleForm.gender" style="margin-left: 10px; width: 150px;">
                      <el-radio value="1">先生</el-radio>
                      <el-radio value="2">女士</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-form-item>
                
              </el-col>
              <el-col :span="12">
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model="ruleForm.phone" style="width: calc(100% - 110px);" />
                  <el-button type="primary" style="margin-left: 10px; width: 100px;" @click="sendSms(ruleFormRef)">发送验证码</el-button>
                </el-form-item>
                
              </el-col>
            </el-row> 

            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="注册人邮箱" prop="email">
                  <el-input v-model="ruleForm.email" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="验证码" prop="code">
                  <el-input v-model="ruleForm.code" />
                </el-form-item>
              </el-col>
            </el-row>
            
            <el-form-item label="" prop="policy" style="margin-top: 20px;">
                <!-- <div style="flex: 1; text-align: center; margin-top: 20px;"> -->
                  <el-checkbox-group v-model="ruleForm.policy">
                    <el-checkbox value="1" name="policy">
                      <el-link href="https://scm.exposaas.com/web/terms/use" type="primary" target="_blank"> 已阅读并同意《注册条款》、《隐私声明》、《安全产品、服务和功能隐私声明》及《Cookie声明》</el-link>
                    </el-checkbox>
                  </el-checkbox-group>
                <!-- </div> -->
            </el-form-item>
            
            
            <el-form-item>
              <div style="flex: 1; text-align: center; margin-top: 20px;">
                <el-button type="primary" @click="submitForm(ruleFormRef)">立即提交</el-button>
              </div>
            </el-form-item>
            
          </el-form>
        <!-- </el-tab-pane>
      </el-tabs> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
  import vHeader from './components/Header.vue'
  import { registerApi, sendSmsApi } from "@/api/user";
  import { reactive, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

  // const activeName = ref('first')
  // const handleClick = (tab: string, event: Event) => {
  //   console.log(tab, event)
  // }

  const router = useRouter()
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({ 
    companyName: '', 
    userName: '', 
    gender: '1',
    email: '',
    phone: '',
    code: '',
    policy: [],
  })

  const rules = {
    companyName: [
      { required: true, message: '请输入企业名称', trigger: 'blur' },
    ],
    userName: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' },
    ],
    phone: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' },
    ],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
    ],
    // gender: [
    //   { required: true, message: '请选择性别', trigger: 'blur' },
    // ],
    policy: [
      {
        type: 'array',
        required: true,
        message: '请阅读并同意',
        trigger: 'change',
      },
    ],
  }

  const submitForm = (formRef: any) => {
    formRef.validate((valid: any) => {
      if (valid) {
        register()
      } else {
        console.log('error submit')
        return false
      }
    })
  }

  // const resetForm = (formRef) => {
  //   formRef.resetFields()
  // }

  const register = () => {
    let {policy, ...params} = ruleForm

    registerApi(params).then(res => {
      // console.log(res)
      if (res.code === 0) {
        ElMessage.success('注册成功')
        setTimeout(() => {
          router.push('/login')
        }, 1000)
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  const sendSms = (formRef: any) => {
    formRef.validateField(['phone'], (valid: any) => {
      if (valid) {
        sendSmsApi(ruleForm).then(res => {
          // console.log(res)
          if (res.code === 0) {
            ElMessage.success('验证码已发送，请注意查收')
          }else {
            ElMessage.error(res.msg)
          }
        })
      } else {
        console.log('error phone')
        return false
      }
    })
  }
</script>
<style scoped>
  .register-container{
    .register-title{
      display: flex;
      justify-content: center;
      padding: 20px 0;
      .label{
        font-size: 16px;
        /* font-weight: bold; */
        /* margin: 20px auto; */
        color: #333;
        border-bottom: 3px solid var(--el-color-primary);
        color: var(--el-color-primary);
        padding-bottom: 10px;
      }
    }
  }
</style>
