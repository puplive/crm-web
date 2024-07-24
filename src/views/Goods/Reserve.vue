<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { getGoodsList } from '@/api/Goods';
import { goods as goodsApi, getHallInfo } from '@/api/Order/index'
import { useRouter, useRoute } from 'vue-router'
import { exhibitionList } from '@/api/Exhibition'
import { getExhibitor } from '@/api/Exhibitor'
// import { boothList } from '@/api/Booth'
import { getPosition  } from '@/api/Booth'

const router = useRouter()
const route = useRoute()
const exhibitionId = ref(route.query.exhibitionId? Number(route.query.exhibitionId): ''),
      exhibitorId = ref(route.query.exhibitorId? Number(route.query.exhibitorId): ''),
      hallCode = ref(route.query.hallCode || ''),
      positionCode:any = ref(route.query.positionCode || ''),
      clueId = route.query.clueId,
      price = ref(0);

const setQuery = () => {
  router.push({
    query: {
      // exhibitionId: exhibitionId.value,
      exhibitorId: exhibitorId.value,
      hallCode: hallCode.value,
      positionCode: positionCode.value //.join(','),
    }
  })
}

// const goodsType: any = ref([]);
const goodsList: any = ref([]);
const goodsData: any = ref({});
const carList: any = ref([]);

const zh: any = ref([])
const zs: any = ref([])
const zg: any = ref([])
const zw: any = ref([])

const form: any = reactive({})

const addShop = (item: any, num: number = 1) => {
  goodsApi.addCart({
    exhibitorId: exhibitorId.value,
    exhibitionId: exhibitionId.value,
    hallCode: hallCode.value,
    positionCode: positionCode.value, //.join(','),
    id: item.id,
    num: num,
  }).then((res: any) => {
    if(res.code === 0){
      ElMessage.success('添加成功')
      getCart()
    }else{
      ElMessage.error(res.msg)
    }
  })
}
const editCart = (item: any, num: number = 1) => {
  goodsApi.editCart({
    exhibitorId: exhibitorId.value,
    exhibitionId: exhibitionId.value,
    hallCode: hallCode.value,
    positionCode: positionCode.value, //.join(','),
    id: item.id,
    num: num,
  }).then((res: any) => {
    if(res.code === 0){
      ElMessage.success('成功')
      // getCart()
    }else{
      ElMessage.error(res.msg)
    }
    getCart()
  })
}
const delCart = (item: any) => {
  goodsApi.delCart({
    exhibitorId: exhibitorId.value,
    exhibitionId: exhibitionId.value,
    hallCode: hallCode.value,
    positionCode: positionCode.value, //.join(','),
    id: item.id,
    num: item.num,
  }).then((res: any) => {
    if(res.code === 0){
      ElMessage.success('删除成功')
      getCart()
    }else{
      ElMessage.error(res.msg)
    }
  })
}

const changeType = (i: number) => {
  goodsData.value = goodsList.value[i]
}

const getZh = () => {
  exhibitionList().then((res: any) => {
    if(res.code === 0){
      zh.value = res.data
    }
  })
}

const getZs = () => {
  getExhibitor().then((res: any) => {
    if(res.code === 0){
      zs.value = res.data
    }
  })
}

const getZg = () => {
  getHallInfo({exhibitionId: exhibitionId.value}).then((res: any) => {
    if(res.code === 0){
      zg.value = res.data
    }
  })
}

const getZw = () => {
  zw.value = []
  getPosition({exhibitionId: exhibitionId.value, hallCode: hallCode.value}).then((res: any) => {
    if(res.code === 0){
      zw.value = res.data
    }
  })
  
}

const getMaterial = () => {
  goodsApi.getMaterial({exhibitionId: exhibitionId.value}).then((res: any) => {
    if(res.code === 0){
      goodsList.value = res.data
      if(goodsList.value.length > 0){
        goodsData.value = goodsList.value[0]
      }else{
        goodsData.value = {}
      }
    }else{

    }
  })
}

const getCart = () => {
  // console.log(exhibitionId.value , exhibitorId.value , hallCode.value ,positionCode.value)
  if(!exhibitionId.value || !hallCode.value || !positionCode.value){
    carList.value = []
    return
  }
  goodsApi.getCart({
    exhibitorId: exhibitorId.value, 
    exhibitionId: exhibitionId.value, 
    hallCode: hallCode.value, 
    positionCode: positionCode.value //.join(',')
  }).then((res: any) => {
    if(res.code === 0){
      carList.value = res.data
    }else{

    }
  })
}

const sub_loading = ref(false)
const Sub = () => {
  sub_loading.value = true
  goodsApi.create({
    clueId: clueId,
    exhibitionId: exhibitionId.value,
    exhibitorId: exhibitorId.value,
    hallCode: hallCode.value,
    positionCode: positionCode.value,
    price: price.value,
    data: carList.value.map((item: any) => {
      return {
        ...item,
        remark: ''
      }
    })
  }).then((res: any) => {
    if(res.code === 0){
      ElMessage.success('提交成功')
      router.go(-1)
    }else{
      ElMessage.error(res.msg)
    }
    sub_loading.value = false
  }).catch((err: any) => {
    sub_loading.value = false 
  })
}

watch(() => exhibitionId.value , (val) => {
    hallCode.value = ''
    positionCode.value = ''
    getZg()
    getZw()
    getMaterial()
    getCart()

    // setQuery()
})
watch(() => exhibitorId.value , (val) => {
  getCart()
})
watch(() => hallCode.value , (val) => {
  positionCode.value = ''
  getZw()
  getCart()
})
watch(() => positionCode.value , (val) => {
  getCart()
})


const total = computed(() => {
  let total = 0
  carList.value.forEach((item: any) => {
    total += item.price * item.num
  })
  price.value = total
  return total
})

getZh()
getZs()
getZg()
getZw()
getMaterial()
getCart()
  

</script>
<template>
  <div class="goods-reserve">
    <div class="s-top_bar">
      <el-form :inline="true">
        <el-form-item label="展会名称" style="width: 220px;">
          <el-select v-model="exhibitionId" placeholder="请选择展会名称" disabled>
            <el-option
              v-for="item in zh"
              :key="item.id"
              :label="item.exhibitionName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="参展企业" style="width: 220px;">
          <el-select v-model="exhibitorId" placeholder="请选择参展企业" disabled>
            <el-option
              v-for="item in zs"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="展馆" style="width: 220px;">
          <el-select v-model="hallCode" placeholder="请选择展馆">
            <el-option
              v-for="item in zg"
              :key="item.code"
              :label="item.code"
              :value="item.code"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="展位号" style="width: 220px;">
          <!-- multiple -->
          <el-select
            v-model="positionCode"
            
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="添加展位号"
            style="width: 240px"
          >
            <el-option
              v-for="item in zw"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="row">
      <div class="col col1">
        <ul class="goods-type">
          <li v-for="(item, index) in goodsList" :key="index" @click="changeType(index)" :class="{active: item.project === goodsData.project }">{{item.project}}</li>
        </ul>
      </div>
      <div class="col col2">
        <el-scrollbar >
        <div class="goods-list">
          <li v-for="(item, i) in goodsData.data" :key="i">
            <el-image 
                style="width: 100%; height: 200px"
                :src="item.img"
                :preview-src-list="[item.img]"
                fit="contain"
              />
              <div class="msg">
                  <p class="title" :title="item.position">{{item.position}}</p>
                  <p class="p" :title="item.size"><label for="">规格(尺寸)：</label>{{item.size}}</p>
                  <p class="p" :title="item.price+'元/'+item.unit"><label for="">单&emsp;&emsp;价：</label><span>{{item.price+'元/'+item.unit}}</span></p>
                  <p class="p"><label for="">库&emsp;&emsp;存：</label>{{item.num}}</p>
              </div>
              <el-button type="primary" @click="addShop(item)" :disabled="item.num<=0" style="width: 100%;">加入购物车</el-button>
              <!-- <div data-id=${item.id} data-index=${i} class="btn j-add ${item.en_stoko>0?'':'disabled'}">加入购物车</div> -->
          </li>
        </div>
        </el-scrollbar >
      </div>
      <div class="col col3">
        <div class="table">
          <el-table :data="carList" border >
            <el-table-column label="服务项目" prop="project"></el-table-column>
            <el-table-column label="位置/版面" prop="position"></el-table-column>
            <el-table-column label="规格" prop="size"></el-table-column>
            <el-table-column label="单价(RMB)" prop="price"></el-table-column>
            <el-table-column label="数量" width="200px">
              <template #default="scope">
                <el-input-number v-model="scope.row.num" :min="1" size="small" @change="(newVal: number, oldVal: number) => { editCart(scope.row, newVal )}" ></el-input-number>
                <el-button type="danger" link @click="delCart(scope.row)" style="margin-left: 10px;" icon="Delete"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="bottom-bar">
          <div class="p1"><span>已选物料 <b>{{ carList.length }}</b> 项</span> <span>物料金额 <b>¥{{ total }}</b></span></div>
          <div class="p2">
            <el-form-item label="最终金额" style="width: 100%; margin-bottom: 0;">
              <el-input v-model="price"></el-input>
            </el-form-item>
          </div>
          <el-button type="primary" style="width: 100%;" @click="Sub" :loading="sub_loading" :disabled="carList.length<=0">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 物料下单  supplies-goods*/
.goods-reserve {
  height: 100%;
  display: flex;
  flex-direction: column;

  .s-top_bar {
    box-shadow: 0px 1px 0px 0px rgba(196, 205, 213, 0.35);
  }

  .row {
    flex: 1;
    display: flex;
    height: 0;
    border: 1px solid var(--el-border-color-lighter);

    .col1 {
      width: 150px;
      background: #fff;
      /* box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11); */
    }

    .col2 {
      flex: 1;
      overflow: auto;
      /* padding: 15px; */
      border-right: 1px solid var(--el-border-color-lighter);
      border-left: 1px solid var(--el-border-color-lighter);
    }

    .col3 {
      width: 580px;
      background: #fff;
      display: flex;
      flex-direction: column;

      .table {
        flex: 1;
      }

      .bottom-bar {
        padding: 15px;
        /* box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.02); */
        border-top: 1px solid var(--el-border-color-lighter);

        >span {
          font-size: 14px;
          color: #909399;
        }

        >p {
          flex: 1;
          margin-left: 50px;
          margin-right: 20px;
        }

        font {
          color: #E54C4A;
        }

        .p1 {
          display: flex;
          align-items: center;
          /* height: 48px; */
          margin-bottom: 10px;
          span{
            margin-right: 20px;
            b{
              color: red
            }
          }

        }

        .p2 {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
      }
    }

    .goods-type {
      &>li {
        padding: 0 16px;
        height: 32px;
        font-size: 16px;
        color: #303133;
        line-height: 32px;
        cursor: pointer;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.active {
          background: #F7F4EC;
          color: #BD973D;
        }
      }
    }

    .goods-list {
      margin-left: -15px;
      padding: 15px 15px 0 15px;
      overflow: hidden;
      &>li {
        width: 273px;
        background: #fff;
        float: left;
        margin-left: 15px;
        margin-bottom: 15px;
        padding: 10px;

        border: 1px solid rgba(235, 235, 235, 1);
        &:hover{
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* .img {
          width: 100%;
          height: 200px;
          object-fit: contain
        } */

        .msg {
          padding: 10px 15px;
          color: #303133;

          .title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .p {
            font-size: 16px;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            >span {
              color: #E54C4A;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

</style>