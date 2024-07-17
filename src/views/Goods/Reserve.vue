<script setup lang="ts">
import { ref, reactive } from 'vue';
import { getGoodsList } from '@/api/Goods';

const goodsType: any = ref([]);
const goodsList: any = ref([]);
const options: any = ref([]);

const zh: any = ref([])
const zs: any = ref([])
const zg: any = ref([])
const zw: any = ref([])

const form: any = reactive({})

const addShop = (item: any) => {
  console.log(item)
}

const getGoodsTypeList = () => {
  getGoodsList({}).then((res: any) => {
    goodsType.value = res.data.category_list
    goodsList.value = res.data.goods_list
  })
}

const getZh = () => {
  options.value = zw.value.map((item: any) => {
    return {
      label: item,
      value: item
    }
  })
}

const getZs = () => {
  options.value = zw.value.map((item: any) => {
    return {
      label: item,
      value: item
    }
  })
}

const getZg = () => {
  options.value = zw.value.map((item: any) => {
    return {
      label: item,
      value: item
    }
  })
}

</script>
<template>
  <div class="goods-reserve">
    <div class="s-top_bar">
      <el-form label-width="auto" :inline="true">
        <el-form-item label="展会名称">
          <el-select v-model="form.name" placeholder="请选择展会名称"></el-select>
        </el-form-item>
        <el-form-item label="参展企业">
          <el-select v-model="form.zs" placeholder="请选择参展企业"></el-select>
        </el-form-item>
        <el-form-item label="展馆">
          <el-select v-model="form.zh" placeholder="请选择展馆"></el-select>
        </el-form-item>
        <el-form-item label="展位号">
          <el-select
            v-model="form.zw"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="添加展位号"
            style="width: 240px"
          >
            <el-option
              v-for="item in zw"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="row">
      <div class="col col1">
        <ul class="goods-type">
          <li v-for="(item, index) in goodsType" :key="index" @click="getGoodsList(item.value)" :class="{active: item.active}">{{item.label}}</li>
        </ul>
      </div>
      <div class="col col2">
        <div class="goods-list">
          <li v-for="(item, i) in goodsList" :key="i">
              <img :src="item.img" alt="">
              <div class="msg">
                  <p class="title" :title="item.category_name2">{{item.category_name2}}</p>
                  <p class="p" :title="item.products_name"><label for="">规格(尺寸)：</label>{{item.products_name}}</p>
                  <p class="p" :title="item.price+'元/'+item.unit"><label for="">单&emsp;&emsp;价：</label><span>{{item.price+'元/'+item.unit}}</span></p>
                  <p class="p"><label for="">库&emsp;&emsp;存：</label>{{item.en_stoko}}</p>
              </div>
              <el-button type="primary" @click="addShop(item)" :disabled="item.en_stoko<=0" >加入购物车</el-button>
              <!-- <div data-id=${item.id} data-index=${i} class="btn j-add ${item.en_stoko>0?'':'disabled'}">加入购物车</div> -->
          </li>
        </div>
      </div>
      <div class="col col3">
        <div class="table">
          <el-table></el-table>
        </div>
        <div class="bottom-bar">
          <div class="p1">已选物料 0 项 物料金额 ¥ 0</div>
          <div class="p2">
            <el-form-item label="最终金额" style="width: 100%; margin-bottom: 0;">
              <el-input></el-input>
            </el-form-item>
          </div>
          <el-button type="primary" style="width: 100%;">提交</el-button>
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
    border: 1px solid #EAEEF0;

    .col1 {
      width: 150px;
      background: #fff;
      /* box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11); */
    }

    .col2 {
      flex: 1;
      overflow: auto;
      padding: 15px;
      border-right: 1px solid #EAEEF0;
      border-left: 1px solid #EAEEF0;
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
        border-top: 1px solid #EAEEF0;

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

        .active {
          background: #F7F4EC;
          color: #BD973D;
        }
      }
    }

    .goods-list {
      margin-left: -15px;

      &>li {
        width: 273px;
        background: #fff;
        float: left;
        margin-left: 15px;
        margin-bottom: 15px;

        &>img {
          width: 100%;
          height: 200px;
          object-fit: contain
        }

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