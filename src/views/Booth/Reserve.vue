<script setup lang="ts">
  import { ref, reactive, watch, computed } from 'vue'
  import { booth as boothApi, getExhibitionInfo } from '@/api/Order/index'
  import { getPosition, positionIsLock } from '@/api/Booth/index'
  import { useRouter, useRoute } from 'vue-router';
  import rules from "@/utils/rules";

  const router = useRouter();
  const route = useRoute();

  const clueId = route.query.clueId;
  const exhibitionId = route.query.exhibitionId;
  const exhibitorId = route.query.exhibitorId;
  const hallCode = ref(route.query.hallCode);
  // const exhibitionName = route.query.exhibitionName

  const hall_list: any = ref([])
  const booth_list: any = ref([])
  const add_list: any = ref([])
  const discount_list: any = ref([])
  const pp_list: any = ref([])
  const gg_list: any = ref([])

  const unit:any = {1:'%', 2:'￥'}

  const form:any = reactive({
    clueId: clueId,
    exhibitionId: exhibitionId,
    exhibitorId: exhibitorId,
    add: [
      // {
      //   "text": "1",
      //   "price": 123,
      //   "unit": 1
      // },
    ],
    discount: [
      // {
      //   "text": "1",
      //   "price": 123,
      //   "unit": 1
      // },
    ],
    position: [
      {
        hallCode: hallCode.value,
        positionCode: '',
        companyBrand: [],
        product: '',
        unitPrice: '',
        type: 1,
        length: 0,
        width: 0,
        costPrice: 0,
        addPrice: 0,
        discountPrice: 0,
        finalPrice: 0,
        deposit: 0,
        isOffset: 1,
        payType: 1,
        ratio: 0
      },
    ]
  })
  if(route.query.data){
    if (typeof route.query.data === 'string') {
      let _data = JSON.parse(route.query.data)
      form.clueId = _data.clueId
      form.exhibitionId = _data.exhibitionId
      form.exhibitorId = _data.exhibitorId
      form.position = _data.position
      form.add = _data.add
      form.discount = _data.discount
    }
  }

  const gg_select:any = ref({})
  const ggFormRef: any = ref(null)
  const gg: any = reactive({
    show: false,
    index: 0,
    form: {
      product: '',
      unitPrice: '',
      num: 1,
      length: '',
      width: '',
    }
  })
  const ggChange = (val:any)=>{
    gg.form.unitPrice = Number(val.price); 
    gg.form.product = val.text;
    gg.form.num = val.num;
  }
  const gg_price_label = computed(() => {
    if(gg.form.unitPrice){
      return gg.form.unitPrice + '元/' + (gg.form.num===1?'':gg.form.num) + '㎡'
    }else{
      return ''
    }
  })
  const checkLength = (rule: any, value: any, callback: any) => {
    if (value.length === '' || gg.form.width === '') {
      callback(new Error('请填写尺寸'))
    } else {
      if (value.length <= 0 || gg.form.width <= 0) {
        callback(new Error('尺寸不可为0和负数'))
      } else {
        callback()
      }
    }
  }
  
  const Add = () => {
    let n = form.position.length
    set_booth_list(hallCode.value, n)
    form.position.push({
      hallCode: hallCode.value,
      positionCode: '',
      companyBrand: [],
      product: '',
      unitPrice: '',
      type: 1,
      length: 0,
      width: 0,
      costPrice: 0,
      addPrice: 0,
      discountPrice: 0,
      finalPrice: 0,
      deposit: 0,
      isOffset: 1,
      payType: 1,
      ratio: 0
    })
    
  }

  const  set_booth_list = (hall: any, n: any)=>{
    booth_list.value[n] = []
    getPosition({exhibitionId, hallCode: hall}).then(res => {
      booth_list.value[n] = res.data
    })
  }
  set_booth_list(hallCode.value, 0)

  const checkBooth = (rule: any, value: any, callback: any, hallCode: any) => {
    if (!value) {
      return callback(new Error('必填项'))
    }
    positionIsLock({
      exhibitionId,
      exhibitorId,
      hallCode: hallCode,
      positionCode: value,
    }).then(res => {
      if (res.code === 0 && res.data.status) {
        callback()
      } else {
        callback(new Error('该展位已锁定'))
      }
    })
  }


  const formRef: any = ref(null)
  const Sub = () => {
    // console.log({...route.query, data: form})
    formRef.value.validate().then((valid: any) => {
      if (!valid) {
        return
      }
      router.push({
        name: 'BoothCreateOrder',
        query: {...route.query, companyName: companyName.value, data: JSON.stringify(form)}
      })
    }).catch(() => {})
  }

  const addGg = (i: number) => {
    
    gg.index = i
    gg.form.product = ''
    gg.form.unitPrice = ''
    gg.form.length = ''
    gg.form.width = ''
    gg.form.num = 1

    gg.show = true
  }

  const ggSub = () => {
    ggFormRef.value.validate().then((valid: any) => {
      if (!valid) {
        return
      }
      gg.show = false
      let _area = gg.form.length * gg.form.width,
          _costPrice = _area*gg.form.unitPrice/gg.form.num,
          _addPrice = addPrice(_costPrice),
          _discountPrice = discountPrice(_costPrice)

      form.position[gg.index].product = gg.form.product
      form.position[gg.index].unitPrice = gg.form.unitPrice
      form.position[gg.index].length = gg.form.length
      form.position[gg.index].width = gg.form.width
      form.position[gg.index].area = _area
      form.position[gg.index].costPrice = Number(_costPrice.toFixed(2))
      form.position[gg.index].addPrice = Number(_addPrice.toFixed(2))
      form.position[gg.index].discountPrice = Number(_discountPrice.toFixed(2))
      form.position[gg.index].finalPrice = Number((_costPrice+_addPrice-_discountPrice).toFixed(2))
      // clearValidate
      formRef.value.clearValidate(['position['+gg.index+'].product'])
    }).catch(() => {})
  }

  const addPrice = (price: number) => {
    let _p = 0
    form.add.forEach((i:any) => {
      let item = JSON.parse(i)
      if(item.unit === 1){
        _p+= price*item.price/100
      }else if(item.unit === 2){
        _p+= item.price
      }
    })
    return _p
  }

  const discountPrice = (price: number) => {
    let _p = 0
    form.discount.forEach((i:any) => {
      let item = JSON.parse(i)
      if(item.unit === 1){
        _p+= price*item.price/100
      }else if(item.unit === 2){
        _p+= item.price
      }
    })
    return _p
  }

  watch(() => form.add, (val) => {
    form.position.forEach((item:any) => {
      item.addPrice = Number(addPrice(item.costPrice).toFixed(2))
      item.finalPrice = Number((item.costPrice+item.addPrice-item.discountPrice).toFixed(2))
    })
  })

  watch(() => form.discount, (val) => {
    form.position.forEach((item:any) => {
      item.discountPrice = Number(discountPrice(item.costPrice).toFixed(2))
      item.finalPrice = Number((item.costPrice+item.addPrice-item.discountPrice).toFixed(2))
    })
  })

  const setFinalPrice = (i: number) => {
    let _costPrice = form.position[i].costPrice,
        _addPrice = form.position[i].addPrice,
        _discountPrice = form.position[i].discountPrice
    
    return Number((_costPrice+_addPrice-_discountPrice).toFixed(2))
  }

  const companyName = ref('')
  const isNew = ref(true)
  getExhibitionInfo({clueId, exhibitionId}).then(res => {
    let data = res.data
    add_list.value = data.attachPrice.add
    discount_list.value = data.attachPrice.discount
    pp_list.value = data.companyBrand
    gg_list.value = data.unitPrice
    hall_list.value = data.exhibitionHall

    companyName.value = data.companyName
    isNew.value = data.isNew
  })

  const hall_img = computed(() => {
    let hall =hall_list.value.find((item:any) => {
      return item.code === hallCode.value
    })
    if(hall){
      return hall.img
    }else{
      return ''
    }
    
  })

</script>
<template>
  <div class="booth-reserve">
    <div class="l">
      <div class="title">
        <span>{{ companyName }}</span>
        <!-- <span>北京展会</span> -->
        <span>展馆号：{{ hallCode }}</span>
      </div>
      <div class="img-box">
        <el-image 
          style="width: 100%; height: 100%" 
          :src="hall_img" 
          :preview-src-list="[hall_img]" 
          fit="scale-down" 
          alt="展馆图片" />
      </div>
    </div>
    <div class="r">
      <div class="form-box">
        <el-scrollbar height="100%">
          
          <el-form ref="formRef" :model="form" label-width="auto" class="form" label-position="left">
            <div>预定展位</div>
            <el-form-item label="企业名称">
              {{ companyName }}
            </el-form-item>
            <el-form-item label="新展商">
              <el-radio-group v-model="isNew" disabled>
                <el-radio :value="true">是</el-radio>
                <el-radio :value="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="加收">
              <el-select v-model="form.add" multiple placeholder="请选择">
                <el-option v-for="(item,i) in add_list" :key="i" :label="item.text+ ' ' + item.price + unit[item.unit]" :value="JSON.stringify(item)" />
              </el-select>
            </el-form-item>
            <el-form-item label="折扣">
              <el-select v-model="form.discount" multiple placeholder="请选择">
                <el-option v-for="(item,i) in discount_list" :key="i" :label="item.text+ ' ' + item.price + unit[item.unit]" :value="JSON.stringify(item)" />
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-button icon="Plus" @click="Add">添加展位</el-button>
            </el-form-item>
            <div class="item" v-for="(item, index) in form.position" :key="index">
              <el-form-item label="展馆号" :prop="`position[${index}].hallCode`" :rules="rules.required">
                <!-- <el-input v-model="form.position[index].hallCode" disabled /> -->
                <el-select 
                  v-model="form.position[index].hallCode" 
                  placeholder="请选择" 
                  @change="() => {
                    set_booth_list(item.hallCode, index); 
                    hallCode=item.hallCode
                  }">
                  <el-option v-for="(item,i) in hall_list" :key="i" :label="item.code" :value="item.code" />
                </el-select>
              </el-form-item>
              <el-form-item label="展位号" :prop="`position[${index}].positionCode`" :rules="[...rules.required,{ validator: (rule:any, value:any, callback:any)=> checkBooth(rule, value, callback, form.position[index].hallCode), trigger: 'change' }]">
                
                <el-dropdown trigger="click" style="width: 100%;" 
                  max-height="300px"
                  @command="(command: any)=>{
                    form.position[index].positionCode = command
                  }">
                  <el-input v-model="form.position[index].positionCode" autocomplete="off" suffix-icon="ArrowDown" />
                  <template #dropdown>
                    <el-dropdown-menu v-if="booth_list[index].length">
                      <template v-for="(item,i) in booth_list[index]" :key="i">
                        <el-dropdown-item style="width: 270px;" :command="item">{{ item }}</el-dropdown-item>
                      </template>
                    </el-dropdown-menu>
                    <div v-else  style="width: 270px; text-align: center; padding: 10px">无数据</div>
                  </template>
                </el-dropdown>
                <!-- <el-select 
                  v-model="form.position[index].positionCode"
                  filterable
                  allow-create
                  default-first-option 
                  :reserve-keyword="false"
                  placeholder="请选择">
                  <el-option v-for="(item,i) in booth_list[index]" :key="i" :label="item" :value="item" />
                </el-select> -->
              </el-form-item>
              <el-form-item label="品牌">
                <el-select v-model="form.position[index].companyBrand" multiple placeholder="请选择">
                  <el-option v-for="(item,i) in pp_list" :key="i" :label="item" :value="item" />
                </el-select>
              </el-form-item>
              <el-form-item label="展位类型">
                <el-radio-group v-model="form.position[index].type">
                  <el-radio :value="1">标准</el-radio>
                  <el-radio :value="2">特装</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="展位规格" :prop="`position[${index}].product`" :rules="rules.required">
                <el-button size="small" @click="addGg(index)" >添加</el-button>
              </el-form-item>
              <el-form-item label=" " v-if="form.position[index].product">
                <div>{{form.position[index].product + ' ' + form.position[index].area + '㎡'}}</div>
              </el-form-item>
              <el-form-item label="展位原价">
                <el-input v-model="form.position[index].costPrice" disabled/>
              </el-form-item>
              <el-form-item label="加收金额">
                <el-input :model-value="form.position[index].addPrice" disabled />
              </el-form-item>
              <el-form-item label="折扣金额">
                <el-input :model-value="form.position[index].discountPrice" disabled />
                <!-- <el-input :model-value="setFinalPrice(index)" disabled /> -->
              </el-form-item>
              <el-form-item label="最终金额" :prop="`position[${index}].finalPrice`" :rules="rules.required">
                <el-input-number v-model="form.position[index].finalPrice" :min="0" :controls="false" class="s-number-input" />
              </el-form-item>
              <div style="text-align: center;">
                <el-button link type="danger" @click="form.position.splice(index, 1); booth_list.splice(index, 1)"><el-icon><DeleteFilled /></el-icon></el-button>
              </div>
            </div>
          </el-form>
        </el-scrollbar>
      </div>
      <div style="padding: 15px;">
        <el-button type="primary" @click="Sub" style="width: 100%;">确认</el-button>
      </div>
    </div>
  </div>

  <el-dialog v-model="gg.show" title="添加规格" width="500" draggable @close="()=>{ggFormRef.resetFields()}">
    <el-form ref="ggFormRef" :model="gg.form" label-width="auto" label-position="left">
      <el-form-item label="产品名称" prop="product" :rules="rules.required">
        <el-select v-model="gg.form.product" placeholder="" @change="ggChange">
          <el-option v-for="item in gg_list" :key="item.id" :label="item.text+ ' ' + item.price + '/'+ item.num + '/㎡'" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="单价" prop="unitPrice">
        <el-input :model-value="gg_price_label" disabled></el-input>
        <!-- <el-select v-model="gg.form.unitPrice" placeholder="">
          <el-option v-for="(item,i) in gg_list" :key="i" :label="item.text" :value="item.price" />
        </el-select> -->
      </el-form-item>
      <el-form-item label="尺寸" prop="length" required :rules="[{ validator: checkLength, trigger: 'blur' }]">
        <el-col :span="11">
          <el-form-item label=""> 
            <el-input type="number" v-model="gg.form.length" style="flex: 1;" input-style="text-align: center;" placeholder="长： 例如3" />
          </el-form-item>
        </el-col>
        <el-col :span="2" style="display: flex; align-items: center; justify-content: center; font-size: 20px;">
          <el-icon><Close /></el-icon>
        </el-col>
        <el-col :span="11">
          <el-form-item label="">
            <el-input type="number" v-model="gg.form.width" style="flex: 1;" input-style="text-align: center;" placeholder="宽： 例如3" />
            <!-- <el-input v-model="gg.form.width" autocomplete="off" /> -->
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="面积" >
        <el-input :model-value="Number((gg.form.length * gg.form.width).toFixed(2))" autocomplete="off" disabled/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="gg.show = false">取消</el-button>
        <el-button type="primary" @click="ggSub">确定</el-button>
      </div>
    </template>
  </el-dialog>
  
</template>
<style scoped>
  .booth-reserve{
    display: flex;
    height: 100%;
    .l{
      flex: 1;
      display: flex;
      flex-direction: column;
      .title{
        /* margin-bottom: 20px; */
        span{
          margin-right: 20px;
        }
      }
      .img-box{
        flex: 1;
        min-height: 0;
        padding: 20px;
      }
    }
    .r{
      width: 400px;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      .form-box{
        
        flex: 1;
        height: 100px;
        .form{
          padding: 15px;
          .el-form-item{
            /* margin-bottom: 5px; */
          }
        }
      }

      .item{
        background-color: #F4F6F8;
        padding: 10px;
        border-radius: 4px;
      }
      .item+.item{
        margin-top: 10px;
      }

    }
  }
</style>