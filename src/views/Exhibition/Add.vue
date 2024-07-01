<template>
  <el-form :model="form" label-width="auto">
    <el-divider content-position="left"><span class="title">基本信息</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="展会名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="所在城市">
        <el-select v-model="form.region" placeholder="">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="所在展馆">
        <el-select v-model="form.region" placeholder="">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="展位图类型">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">已有展位图上传</el-radio>
          <el-radio value="Venue">在线自定义展位</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item
        v-for="(item, index) in form.organizers"
        :key="index"
        :label="index>0? ' ' : '主办单位'"
        :prop="'form.organizers.' + index"
        :rules="{
          // required: true,
          message: '',
          trigger: 'blur',
        }"
      >
        <el-input v-model="item.value" >
          <template #append>
            <el-button v-if="index === 0" :icon="Plus" @click="addOrganizers"/>
            <el-button v-else :icon="Minus" @click.prevent="removeOrganizers(index)"/>
          </template>
        </el-input>
      </el-form-item>
    </el-col>
    
    <el-divider content-position="left"><span class="title">时间信息</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="布展日期">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder=""
          end-placeholder=""
        />
      </el-form-item>
      <el-form-item label="开展日期">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder=""
          end-placeholder=""
        />
      </el-form-item>
      <el-form-item label="销售截止日期">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder=""
        />
      </el-form-item>
    </el-col>
    
    <el-divider content-position="left"><span class="title">图片素材</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="招展平面图">
        <el-upload
          class="img-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="img" />
          <el-icon v-else class="img-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item
        v-for="(item, index) in form.booths"
        :key="index"
        :label="index>0? ' ' : '展位图'"
      >
        <el-input v-model="item.value" placeholder="展馆号" style="max-width: 220px" >
          <template #append>
            <el-button v-if="index === 0" :icon="Plus" @click="addBooth"/>
            <el-button v-else :icon="Minus" @click.prevent="removeBooth(index)"/>
          </template>
        </el-input>
        <el-button type="primary" style="margin-left: 10px">上传图片</el-button>
        <span>展位图尺寸：1200px*800px</span>
      </el-form-item>
    </el-col>

    <el-divider content-position="left"><span class="title">展区分类</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label=" " v-for="(item, index) in form.booths">
        <!-- <div class="booth-list" > -->
          <el-input v-model="item.value" placeholder="请输入展区分类" style="max-width: 220px" >
            <template #append>
              <el-button v-if="index === 0" :icon="Plus" @click="addBooth"/>
              <el-button v-else :icon="Minus" @click.prevent="removeBooth(index)"/>
            </template>
          </el-input>
          <el-color-picker style="margin-left: 10px;" v-model="color1" />
        <!-- </div> -->
      </el-form-item>
    </el-col>

    <el-divider content-position="left"><span class="title">单价设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label=" ">
        <div class="list" v-for="(item, index) in form.booths">
          <div><label for="">标题</label><el-input></el-input></div>
          <div><label for="">单价</label><el-input></el-input></div>
          <div><label for="">计价基数</label><el-input></el-input></div>
          <el-button type="info" plain v-if="index === 0" :icon="Plus" @click="addBooth"/>
          <el-button type="info" plain v-else :icon="Minus" @click.prevent="removeBooth(index)"/>
        </div>
      </el-form-item>
      
    </el-col>
    
    <el-divider content-position="left"><span class="title">加收设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="加收" v-for="(item, index) in form.booths">
        <div class="list">
          <div>
            <el-input v-model="item.value" placeholder="例如：双开口"></el-input>
          </div>
          <div>
            <el-input v-model="item.value" placeholder="设置金额">
              <template #append>
                <el-select v-model="select" placeholder="" style="width: 60px;">
                  <el-option label="%" value="1" />
                  <el-option label="￥" value="2" />
                </el-select>
              </template>
            </el-input>
          </div>
          <el-button type="info" plain v-if="index === 0" :icon="Plus" @click="addBooth"/>
          <el-button type="info" plain v-else :icon="Minus" @click.prevent="removeBooth(index)"/>
        </div>
      </el-form-item>
    </el-col>
    <el-divider content-position="left"><span class="title">折扣设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="折扣" v-for="(item, index) in form.booths">
        <div class="list">
          <div>
            <el-input v-model="item.value" placeholder="例如：提前预定"></el-input>
          </div>
          <div>
            <el-input v-model="item.value" placeholder="设置金额">
              <template #append>
                <el-select v-model="select" placeholder="" style="width: 60px;">
                  <el-option label="%" value="1" />
                  <el-option label="￥" value="2" />
                </el-select>
              </template>
            </el-input>
          </div>
          <el-button type="info" plain v-if="index === 0" :icon="Plus" @click="addBooth"/>
          <el-button type="info" plain v-else :icon="Minus" @click.prevent="removeBooth(index)"/>
        </div>
      </el-form-item>
    </el-col>
    <el-divider content-position="left"><span class="title">付款期限</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
    
    </el-col>
    <div class="s-flex-center">
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button>取消</el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
// import type { FormInstance } from 'element-plus'
import { Plus, Minus } from '@element-plus/icons-vue'

import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'

const color1 = ref('#409EFF')
const color2 = ref()

const select = ref('')


// const formRef = ref<FormInstance>()
// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  organizers: [''],
  booths: [{zg:'', img:''}]
})

const removeOrganizers = (index: number) => {
    form.organizers.splice(index, 1)
}

const addOrganizers = () => {
  form.organizers.push('')
}
const removeBooth = (index: number) => {
    form.booths.splice(index, 1)
}

const addBooth = () => {
  form.booths.push({zg:'', img:''})
}
const addBoothImg = () => {
  // form.booths.push({zg:'', img:''})
}

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}




const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped>
  .img-uploader .img {
    width: 120px;
    height: 120px;
    display: block;
  }
  .el-divider{
    margin: 40px 0;
  }
  .title{
      color: var(--el-color-warning);
    }
    .list{
      width: 100%;
       display: flex;
       align-items: end;
       > div{
        flex: 1;
        margin-right: 10px;
       }
    }
</style>
<style>
.img-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.img-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.img-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>
