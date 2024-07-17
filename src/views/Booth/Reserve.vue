<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { booth as boothApi  } from '@/api/Order/index'

  const form:any = reactive({
    clueId: 1,
    exhibitionId: 1,
    exhibitorId: 1,
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
      // {
      //   "hallCode": "1",
      //   "positionCode": 123,
      //   "companyBrand": [
      //     "品牌1",
      //     "品牌2"
      //   ],
      //   "product": 12,
      //   "unitPrice": 12,
      //   "type": 1,
      //   "length": 12,
      //   "width": 12,
      //   "costPrice": 12,
      //   "addPrice": 12,
      //   "discountPrice": 12,
      //   "finalPrice": 12,
      //   "deposit": 0,
      //   "isOffset": 1,
      //   "payType": 1,
      //   "ratio": 20
      // },
    ]
  })
  const gg = reactive({
    show: false,
    index: 0,
    form: {
      product: '',
      unitPrice: '',
      length: '',
      width: '',
    }
  })

  const Add = () => {
    form.position.push({
        hallCode: '',
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
        ratio: 20
      })
  }

  const Sub = () => {
    boothApi.create(form).then(res => {
      console.log(res)
    })
  }

  const addGg = (i) => {
    gg.show = true
    gg.index = i
    gg.form.product = ''
    gg.form.unitPrice = ''
    gg.form.length = ''
    gg.form.width = ''
  }

  const ggSub = () => {
    gg.show = false
    form.position[gg.index].product = gg.form.product
    form.position[gg.index].unitPrice = gg.form.unitPrice
    form.position[gg.index].length = gg.form.length
    form.position[gg.index].width = gg.form.width
    form.position[gg.index].area = gg.form.length * gg.form.width
  }






</script>
<template>
  <div class="booth-reserve">
    <div class="l">
      <div class="title">
        <span>北京展会</span>
        <span>北京展会</span>
        <span>展馆号：北京展会</span>
      </div>
      <div class="img-box"></div>
    </div>
    <div class="r">
      <div class="form-box">
        <el-scrollbar height="100%">
          
          <el-form :model="form" label-width="auto" class="form">
            <div>预定展位</div>
            <el-form-item label="企业名称">
              
            </el-form-item>
            <el-form-item label="新展商">
              <el-radio-group v-model="form.resource">
                <el-radio value="1">是</el-radio>
                <el-radio value="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="加收">
              <el-select v-model="form.add" multiple placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="折扣">
              <el-select v-model="form.discount" multiple placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-button icon="Plus" @click="Add">添加展位</el-button>
            </el-form-item>
            <div class="item" v-for="(item, index) in form.position" :key="index">
              <el-form-item label="展馆号">
                <el-select v-model="form.position[index].hallCode" placeholder="请选择">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="展位号">
                <el-select v-model="form.position[index].hallCode" placeholder="请选择">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="品牌">
                <el-select v-model="form.position[index].companyBrand" multiple placeholder="请选择">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="展位类型">
                <el-radio-group v-model="form.position[index].type">
                  <el-radio :value="1">标准</el-radio>
                  <el-radio :value="2">特装</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="展位规格">
                <el-button size="small" @click="addGg(index)" >添加</el-button>
              </el-form-item>
              <el-form-item label="展位原价">
                <el-input :model-value="item.unitPrice*item.width*item.length" />
              </el-form-item>
              <el-form-item label="折后金额">
                <el-input v-model="form.position[index].discountPrice" />
              </el-form-item>
              <el-form-item label="最终金额">
                <el-input v-model="form.position[index].finalPrice" />
              </el-form-item>
              <div style="text-align: center;">
                <el-button link type="danger" @click="form.position.splice(index, 1)"><el-icon><DeleteFilled /></el-icon></el-button>
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

  <el-dialog v-model="gg.show" title="添加规格" width="500" draggable>
    <el-form ref="ggFormRef" :model="gg.form" label-width="auto">
      <el-form-item label="产品名称" prop="product" :rules="[ { required: true, message: '请选择项目' } ]">
        <el-select v-model="gg.form.product" placeholder="">
          <el-option v-for="item in exhibitionData" :key="item.id" :label="item.exhibitionName" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="单价" prop="unitPrice" :rules="[ { required: true, message: '请选择项目' } ]">
        <el-select v-model="gg.form.unitPrice" placeholder="">
          <el-option v-for="item in exhibitionData" :key="item.id" :label="item.exhibitionName" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-col :span="11">
          <el-input v-model="gg.form.length" autocomplete="off" />
        </el-col>
        <el-col :span="2" style="display: flex; align-items: center; justify-content: center; font-size: 20px;">
          <el-icon><Close /></el-icon>
        </el-col>
        <el-col :span="11">
          <el-input v-model="gg.form.width" autocomplete="off" />
        </el-col>
      </el-form-item>
      <el-form-item label="面积" >
        <el-input :model-value="gg.form.length * gg.form.width" autocomplete="off" />
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
        span{
          margin-right: 20px;
        }
      }
      .img-box{
        flex: 1;
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
            margin-bottom: 5px;
          }
        }
      }

      .item{
        background-color: #efefef;
        padding: 10px;
        border-radius: 4px;
      }
      .item+.item{
        margin-top: 10px;
      }

    }
  }
</style>