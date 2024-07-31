<template>
  <el-form :model="form" label-width="auto">
    <el-divider content-position="left"><span class="title">基本信息</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="展会名称">
        <el-input v-model="form.exhibitionName" />
      </el-form-item>
      <el-form-item label="所在城市">
        <el-select v-model="form.cityId" filterable placeholder="" 
          @change="cityChange" 
        >
          <el-option v-for="item in cityList" :key="item['id']" :label="item['cityName']" :value="item['id']"/>
          <!-- <el-option-group v-for="group in cityGroup" :key="group.firstCode" :label="group.firstCode">
            <el-option v-for="item in group.list" :key="item.id" :label="item.cityName" :value="item.id"/>
          </el-option-group> -->
        </el-select>
      </el-form-item>
      <el-form-item label="所在展馆">
        <el-select v-model="form.hallId" placeholder="" @change="hallChange">
          <el-option v-for="item in hallList" :key="item['id']" :label="item['hallName']" :value="item['id']" />
        </el-select>
      </el-form-item>
      <el-form-item label="展位图类型">
        <el-radio-group v-model="form.positionImgType">
          <el-radio :value="1">已有展位图上传</el-radio>
          <el-radio :value="2">在线自定义展位</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item
        v-for="(item, index) in form.host"
        :key="index"
        :label="index>0? ' ' : '主办单位'"
        :prop="'form.host.' + index"
      >
        <el-input v-model="form.host[index]" >
          <template #append>
            <el-button v-if="index === 0" icon="Plus" @click="()=>{form.host.push('')}"/>
            <el-button v-else icon="Minus" @click.prevent="()=>{form.host.splice(index, 1)}"/>
          </template>
        </el-input>
      </el-form-item>
    </el-col>
    
    <el-divider content-position="left"><span class="title">时间信息</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="布展日期">
        <el-date-picker
          v-model="arrangeTime"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="至"
          start-placeholder=""
          end-placeholder=""
        />
      </el-form-item>
      <el-form-item label="开展日期">
        <el-date-picker
          v-model="startTime"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="至"
          start-placeholder=""
          end-placeholder=""
        />
      </el-form-item>
      <el-form-item label="销售截止日期">
        <el-date-picker
          v-model="form.saleEndTime"
          value-format="YYYY-MM-DD"
          type="date"
          placeholder=""
        />
      </el-form-item>
    </el-col>
    
    <el-divider content-position="left"><span class="title">图片素材</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="招展平面图">
        <el-image :src="hallImg" :preview-src-list="[hallImg]" fit="cover" style="width: 100px; height: 100px" />
        <!-- <el-upload
          class="img-uploader"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :http-request="uploadImg"
        >
          <img v-if="imageUrl" :src="imageUrl" class="img" />
          <el-icon v-else class="img-uploader-icon"><Plus /></el-icon>
        </el-upload> -->
      </el-form-item>

      <el-form-item label="展位图">
        <div v-for="(item, index) in form.position" :key="index" style="display: flex; align-items: center; margin-bottom: 10px">
          <el-input v-model="item.code" placeholder="展馆号" style="max-width: 220px" >     
            <template #append>
              <el-button v-if="index === 0" icon="Plus" @click="()=>{form.position.push({code:'', img:''})}"/>
              <el-button v-else icon="Minus" @click.prevent="()=>{form.position.splice(index, 1)}"/>
            </template>
          </el-input>
          <el-upload
            style="margin-left: 10px; display: inline-flex; align-items: center; justify-content: center; "
            class=""
            :show-file-list="false"
            :on-success="(response:any, file:any, fileList:any) => { form.position[index].img = response.url; }"
            :before-upload="beforeUpload"
            :http-request="uploadImg"
            accept="image/*"
          >
            <el-button link type="primary">上传图片</el-button>
          </el-upload>
          <el-image v-if="item.img" :src="item.img" :preview-src-list="[item.img]" fit="cover" style="width: 32px; height: 32px; margin-left: 10px;">
            <template #error>
              <div class="image-slot">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
          
        </div>
      </el-form-item>
    </el-col>
    <template v-if="form.positionImgType == 2">
    <el-divider content-position="left"><span class="title">展区分类</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label=" " v-for="(item, index) in form.cate">
        <!-- <div class="booth-list" > -->
          <el-input v-model="item.name" placeholder="请输入展区分类" style="max-width: 220px" >
            <template #append>
              <el-button v-if="index === 0" icon="Plus" @click="()=>{form.cate.push({name:'', rgb:''})}"/>
              <el-button v-else icon="Minus" @click.prevent="()=>{form.cate.splice(index, 1)}"/>
            </template>
          </el-input>
          <el-color-picker style="margin-left: 10px;" v-model="item.rgb" />
        <!-- </div> -->
      </el-form-item>
    </el-col>
    </template>

    <el-divider content-position="left"><span class="title">单价设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label=" ">
        <div class="list" v-for="(item, index) in form.unitPrice">
          <div><label v-if="index === 0" for="">标题</label><el-input v-model="item.text" placeholder="请输入标题"></el-input></div>
          <div><label v-if="index === 0" for="">单价</label><el-input v-model="item.price" placeholder="请输入单价" type="number"></el-input></div>
          <div><label v-if="index === 0" for="">计价基数</label><el-input v-model="item.num" placeholder="请输入计价基数" type="number"></el-input></div>
          <el-button type="info" plain v-if="index === 0" icon="Plus" @click="()=>{form.unitPrice.push({text:'', price:0, num:0})}"/>
          <el-button type="info" plain v-else icon="Minus" @click.prevent="()=>{form.unitPrice.splice(index, 1)}"/>
        </div>
      </el-form-item>
      
    </el-col>
    
    <el-divider content-position="left"><span class="title">加收设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="加收" v-for="(item, index) in form.attachPrice.filter(item => item.changeType === 1)">
        <div class="list">
          <div>
            <el-input v-model="item.text" placeholder="例如：双开口"></el-input>
          </div>
          <div>
            <el-input type="number" v-model="item.price" placeholder="设置金额">
              <template #append>
                <el-select v-model="item.priceType" placeholder="" style="width: 60px;">
                  <el-option label="%" :value="1" />
                  <el-option label="￥" :value="2" />
                </el-select>
              </template>
            </el-input>
          </div>
          <el-button type="info" plain v-if="index === 0" icon="Plus" @click="()=>{form.attachPrice.push({text:'', price:0, priceType:1, changeType:1})}"/>
          <el-button type="info" plain v-else icon="Minus" @click.prevent="()=>{form.attachPrice.splice(index, 1)}"/>
        </div>
      </el-form-item>
    </el-col>
    <el-divider content-position="left"><span class="title">折扣设置</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="折扣" v-for="(item, index) in form.attachPrice.filter(item => item.changeType === -1)">
        <div class="list">
          <div>
            <el-input v-model="item.text" placeholder="例如：提前预定"></el-input>
          </div>
          <div>
            <el-input type="number" v-model="item.price" placeholder="设置金额">
              <template #append>
                <el-select v-model="item.priceType" placeholder="" style="width: 60px;">
                  <el-option label="%" :value="1" />
                  <el-option label="￥" :value="2" />
                </el-select>
              </template>
            </el-input>
          </div>
          <el-button type="info" plain v-if="index === 0" icon="Plus" @click="()=>{form.attachPrice.push({text:'', price:0, priceType:1, changeType:-1})}"/>
          <el-button type="info" plain v-else icon="Minus" @click.prevent="()=>{form.attachPrice.splice(index, 1)}"/>
        </div>
      </el-form-item>
    </el-col>
    <el-divider content-position="left"><span class="title">付款期限</span></el-divider>
    <el-col :md="16" :lg="10" :offset="1">
      <el-form-item label="一期款">
        <el-input type="number" v-model="form.payFirst">
          <template #prepend>合同签订后</template>
          <template #append>个自然日</template>
        </el-input>
      </el-form-item>
      <el-form-item label="尾款及全款">
        <el-input type="number" v-model="form.payFinal">
          <template #prepend>合同签订后</template>
          <template #append>个自然日</template>
        </el-input>
      </el-form-item>
    </el-col>
    <div class="s-flex-center">
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { UploadProps } from 'element-plus'
import { getCityList, hallData, exhibitionAdd, getHallImg, exhibitionData, exhibitionEdit } from '@/api/Exhibition'
import { uploadFile } from '@/api/common'

const router = useRouter()
const route = useRoute()
// console.log(route, router)
let id = route.query.id

const form: any = reactive({
  exhibitionName : '',  //string 展会名称 必需
  cityId: '',  //integer 城市ID 必需
  cityName: '',  //string 城市名称 必需
  hallId: '',  //integer 必需 展馆ID，城市展馆获取
  hallName: '',  //string 展馆名称 必需
  positionImgType: 1,  //string 展位图类型 必需 已有展位图上传/在线自定义展位 1/2
  host: [''],  //array[string] 主办方 必需 示例值:["[\"主办方1\",\"主办方2\",\"主办方3\"]"]

  arrangeStartTime: '',  //string 布展开始时间 必需
  arrangeEndTime: '',  //string 布展结束时间 必需

  startTime: '',  //string 展会开始时间 必需
  endTime: '',  //string 展会结束时间 必需

  saleEndTime: '',  //string 销售截止时间 必需

  payFirst: '',  //integer 一期款时间 必需
  payFinal: '',  //integer 尾款及全款时间 必需

  position: [{code:'', img:''}],  //array[string] 展位图 必需 示例值:["[['code' => '展馆号1', 'img' => '图片地址1'], ['code' => '展馆号2', 'img' => '图片地址2']]"]
  cate: [{name:'', rgb:''}],  //array[string] 展区分类 示例值:["[['name' => '展区分类1', 'rgb' => '#409EFF']]"]
  unitPrice: [{text: '', price: 0, num: 0}],  //array[string] 单价设置
  attachPrice: [{text: '', price: 0, priceType: 1, changeType: 1}, {text: '', price: '', priceType: 1, changeType: -1}],  //array[string] 主办方 ["[['text' => '名称1', 'price'=> 10, 'priceType' => 1, 'changeType' => 1],['text' => '名称2', 'price'=> 5, 'priceType' => 2, 'changeType' => -1]]"]
})
const hallImg = ref('')  //string 展馆平面图
const arrangeTime = ref(['', '']) //布展时间
const startTime = ref(['', '']) //展会开始时间
const cityList = ref([]) //城市列表
// const cityGroup = ref([]) //城市分组
const hallList = ref([]) //展馆列表

watch(arrangeTime, async (newVal, oldVal) => {
  if(newVal && newVal[0] && newVal[1]){
    form.arrangeStartTime = newVal[0]
    form.arrangeEndTime = newVal[1]
  }else{
    form.arrangeStartTime = ''
    form.arrangeEndTime = ''
  }
})
watch(startTime, async (newVal, oldVal) => {
  if(newVal && newVal[0] && newVal[1]){
    form.startTime = newVal[0]
    form.endTime = newVal[1]
  }else{
    form.startTime = ''
    form.endTime = ''
  }
})
// console.log(id)
if(id){
  //TODO: 获取展会信息
  exhibitionData({id: id}).then(res => {
    if(res.code === 0 && res.data){
      let data = res.data
      form.exhibitionName = data.exhibitionName
      form.cityId = data.cityId+''
      form.cityName = data.cityName
      form.hallId = data.hallId
      form.hallName = data.hallName      
      form.positionImgType = data.positionImgType || 1
      form.host = data.host
      form.arrangeStartTime = data.arrangeStartTime
      form.arrangeEndTime = data.arrangeEndTime
      arrangeTime.value = [data.arrangeStartTime, data.arrangeEndTime]
      startTime.value = [data.startTime, data.endTime]

      form.startTime = data.startTime
      form.endTime = data.endTime
      form.saleEndTime = data.saleEndTime
      form.payFirst = data.payFirst
      form.payFinal = data.payFinal
      form.position = data.position
      form.cate = data.cate.length? data.cate : [{name: '', rgb: ''}]
      form.unitPrice = data.unitPrice.length ? data.unitPrice : [{text: '', price: 0, num: 0}]

      let changeType_1 = 0, changeType_2 = 0
      form.attachPrice = data.add.map((item: any) => {
        if(item.change_type == 1){
          changeType_1++
        }else{
          changeType_2++
        }
        return {
          text: item.text,
          price: item.price,
          priceType: item.price_type,
          changeType: item.change_type
        }
      })

      data.discount.forEach((item: any) => {
        if(item.change_type == 1){
          changeType_1++
        }else{
          changeType_2++
        }
        form.attachPrice.push( {
          text: item.text,
          price: item.price,
          priceType: item.price_type,
          changeType: item.change_type
        })
      })

      if(changeType_1 === 0){
        form.attachPrice.push({text: '', price: 0, priceType: 1, changeType: 1})
      }
      if(changeType_2 === 0){
        form.attachPrice.push({text: '', price: 0, priceType: 1, changeType: -1})
      }
    }
  })
}



getCityList().then(res => {
  if(res.code === 0 && res.data.length > 0){
    
    cityList.value = res.data

    // let a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    //     b = [];

    // a.forEach(i => {
    //   let l = res.data.filter(item => item.firstCode === i)
    //   if(l.length > 0){
    //     cityGroup.value.push({firstCode: i, list: l})
    //   }
    // })
  }
})

// const filterCity = (query: string) => {
//   // console.log(query)
//   if (!query) return true
//   let l = cityGroup.value
//   cityGroup.value = l.filter(item => item.firstCode.toLowerCase().includes(query.toLowerCase()))
// }

const cityChange = (value: any) => {
  form.cityName = cityList.value.filter((item: any) => item.id == value)[0]['cityName']

  hallList.value = []
  form.hallId = ''
  form.hallName = ''
}
watch(() => form.cityId, async (newVal, oldVal) => {
  getHallData()
})
watch(() => form.hallId, async (newVal, oldVal) => {
  _getHallImg()
})
const hallChange = (value: any) => {
  form.hallName = hallList.value.filter((item: any) => item.id == value)[0]['hallName']
}

const _getHallImg = () => {
  if(form.hallId){
    getHallImg({hallId: form.hallId}).then(res => {
      if(res.code === 0 && res.data.length > 0){
        hallImg.value = res.data
      }
    })
  }
}

const getHallData = () => {
  if(form.cityId){
    hallData({id: form.cityId}).then(res => {
      if(res.code === 0 && res.data.length > 0){
        hallList.value = res.data
      }
    })
  }
}

// const uploadSuccessBooth: UploadProps['onSuccess'] = (
//   response,
//   uploadFile,
//   index,
// ) => {
//   console.log(response, uploadFile, index)
// }

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
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

const onSubmit = () => {
  console.log(form)
  let d: any = {}
  for(let key in form){
    if(form[key] !== undefined){
      if(key === 'position'){
        let position = form[key].filter((item: any) => item.img)
        d[key] = position
      }else if(key === 'cate'){
        let cate = form[key].filter((item: any) => item.name && item.rgb)
        d[key] = cate
      }else if(key === 'unitPrice'){
        let unitPrice = form[key].filter((item: any) => item.text && item.price && item.num)
        d[key] = unitPrice
      }else if(key === 'attachPrice'){
        let attachPrice = form[key].filter((item: any) => item.text && item.price)
        d[key] = attachPrice
      }else if(key === 'host'){
        let host = form[key].filter((item: any) => item)
        d[key] = host
      }else{
        d[key] = form[key]
      }
    }
  }
  if(id){
    d['id'] = id
    exhibitionEdit(d).then(res => {
      if(res.code === 0){
        ElMessage.success('保存成功')
        router.back()
      }else{
        ElMessage.error(res.msg)
      }
    })
  }else{
    exhibitionAdd(d).then(res => {
      if(res.code === 0){
        ElMessage.success('保存成功')
        router.back()
      }else{
        ElMessage.error(res.msg)
      }
    })
  }
}
</script>
<style scoped>
  .img-uploader {
    .image-slot {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background: var(--el-fill-color-light); */
      /* color: var(--el-text-color-secondary); */
      font-size: 18px;
    }
  }
  .el-icon.img-uploader-icon {
    font-size: 18px;
    color: #8c939d;
    width: 30px;
    height: 30px;
    text-align: center;
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

</style>
