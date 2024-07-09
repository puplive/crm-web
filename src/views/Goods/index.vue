<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { getGoodsList, addGoods, editGoods, delGoods, getSetting, getGoodsListSetting, addGoodsSetting, editGoodsSetting, delGoodsSetting, setStatusGoodsSetting  } from '@/api/Goods';

  const router = useRouter();
  const route = useRoute();

  const exhibitionId = route.query.id;

  const goodsList: any = ref([]);
  const goodsList2: any = ref([]);
  const goodsList3: any = ref([]);
  const addGoodsForm = ref({
    show: false,
    title: '',
    exhibitionId: exhibitionId,
    name: '',
    type: 1,
  });
  const settingData: any = ref({});
  const goodsListSetting = ref([]);
  
  const getGoodsListData = () => {
    getGoodsList({exhibitionId}).then((res) => {
      goodsList.value = res.data;
    }).catch((err) => {
    });
  };
  

  const addGoodsData = (type: any) => {
    let d = {
      exhibitionId: exhibitionId,
      name: '',
      type: type,
    }

    addGoods(d).then((res) => {
      getGoodsListData();
    }).catch((err) => { 
    });
  };

  const editGoodsData = (data: any) => {
    editGoods(data).then((res) => {
      getGoodsListData();
    }).catch((err) => {
    });
  };

  const delGoodsData = (id: number) => {
    delGoods(id).then((res) => {
      getGoodsListData();
    }).catch((err) => {
    });
  };
 
  const subAddGoodsSetting = () => {
    addGoodsSetting(settingData.value).then((res) => {
      subGetGoodsListSetting()
    }).catch((err) => {
    });
  };

  const subGetGoodsListSetting = () => {
    getGoodsListSetting({exhibitionId}).then((res) => {
      goodsListSetting.value = res.data;
    }).catch((err) => {
    });
  }

  getGoodsListData()
  subGetGoodsListSetting()

 
  const handleSuccess = (res: any) => {
    console.log(res);
  };

  const handleError = (err: any) => {
    console.log(err);

  };

  const fileList = ref([]);

  const tableData = reactive([])

  const handleEdit = (index: number) => {
    console.log(index);
  };

  const handleDel = (index: number) => {
    console.log(index);
  };

  const handleOff = (index: number) => {
    console.log(index);
  };

  const handleOn = (index: number) => {
    console.log(index);
  };
  

</script>

<template>
  <div class="goods-index supplies-set">
    <div class="s-top_bar">
        <span style="margin-right: 20px;"></span>
        <el-button type="" @click="$router.go(-1)">返回展会列表</el-button>
    </div>
    <div class="con" style="overflow: auto;">
        <div class="l l1 flex-column">
            <div class="top-bar">
              <el-button size="small" type="primary" icon="Plus" @click="addGoodsData(1)">服务项目</el-button>
            </div>
            <div class="flex-1" style="height: 100px; overflow:auto">
                <ul class="list" id="list1">
                    <li v-for="(item ,index) in goodsList" :key = "index" class="active"><span class="text">{{item.name}}</span></li>
                    
                </ul>
            </div>
        </div>
        <div class="l l2 flex-column">
            <div class="top-bar">
              <el-button size="small" type="primary" icon="Plus" @click="addGoodsData(2)">位置/版面</el-button>
            </div>
            <div class="flex-1" style="height: 100px; overflow:auto">
                <ul class="list" id="list2">
                    <li v-for="(item ,index) in goodsList" :key="index" class="active">
                        <span class="text">{{item.name}}</span>
                        <i class="icon-btn layui-icon layui-icon-edit"></i>
                        <i class="icon-btn layui-icon layui-icon-delete"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="l l3 flex-column">
            <div class="top-bar">
              <el-button size="small" type="primary" icon="Plus" @click="addGoodsData(3)">规格/尺寸</el-button>
            </div>
            <div class="flex-1" style="padding: 16px;height: 100px; overflow:auto">
                <ul class="list list2" id="list3">
                    <li v-for="(item ,index) in goodsList3" :key="index"><span class="text">{{item.name}}</span><i class="icon-btn layui-icon layui-icon-close"></i></li>
                </ul>

                <el-form ref="form" :model="settingData" style="margin-top: 20px" label-width="auto">
                  <el-form-item label="单价">
                    <el-input v-model="settingData.price" type="number" placeholder="">
                        <template slot="append">元</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="单位">
                    <el-input v-model="settingData.unit" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="上架数量">
                    <el-input v-model="settingData.num" type="number" placeholder=""></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-upload 
                      class="upload-demo" 
                      action="/upload" 
                      :on-success="handleSuccess" 
                      :on-error="handleError" 
                    >
                        <el-image 
                          v-if="settingData.img" 
                          :src="settingData.img" 
                          fit="cover" 
                          width="100" 
                          height="100" 
                        >
                        </el-image>
                        <el-icon><Plus /></el-icon>
                    </el-upload>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="subAddGoodsSetting()">上架</el-button>
                  </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="r" style="background: #F9FAFB; overflow:auto">
            <div class="top-bar">
                <span>已设置物料</span>
                <div class="layui-form" action="" lay-filter="formSwitch">
                    <input lay-filter="isOn" type="checkbox" name="isOn" lay-skin="switch" lay-text="开启|关闭">
                </div>
            </div>
            <div>
              <div>
                <el-button type="primary" id="btn-addProduct">批量启用</el-button>
                <el-button type="primary" id="btn-addProduct">批量禁用</el-button>
                <el-button type="primary" id="btn-addProduct">批量移除</el-button>
              </div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="project" label="服务项目"></el-table-column>
                <el-table-column prop="position" label="位置/版面" width="100"></el-table-column>
                <el-table-column prop="size" label="尺寸规格" width="100"></el-table-column>
                <el-table-column prop="price" label="单价(RMB)"></el-table-column>
                <el-table-column prop="num" label="上架数量"></el-table-column>
                <el-table-column prop="buy" label="已购数量"></el-table-column>
                <el-table-column prop="stock" label="库存"></el-table-column>
                <el-table-column label="操作" width="100">
                  <template #default="scope">
                        <el-button type="text" @click="handleEdit(scope.$index)">编辑</el-button>
                        <el-button type="text" @click="handleDel(scope.$index)">移除</el-button>
                        <el-button v-if="scope.row.status == 1" type="text" @click="handleOff(scope.$index)">禁用</el-button>
                        <el-button v-else type="text" @click="handleOn(scope.$index)">开启</el-button>
                    </template>
                </el-table-column>
              </el-table>
                
            </div>
        </div>
    </div>
  </div>
  <el-dialog v-model="addGoodsForm.show" :title="addGoodsForm.title">
    <el-form ref="form" :model="addGoodsForm" label-width="80px">
      <el-form-item label=""> 
        <el-input v-model="addGoodsForm.name"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped>
  .goods-index{
    height: 100%;
    display: flex;
    flex-direction: column;
    .con{
      flex: 1;
      display: flex;
    }
  }
  /* 物料设置 */
.supplies-set .l{
    /* border-top: 1px solid #EAEEF0; */
    border-right: 1px solid #EAEEF0;
    border-bottom: 1px solid #EAEEF0;
}
.supplies-set .r{
  flex: 1;
}
.supplies-set .top-bar{
    display: flex;
            align-items: center;
            justify-content: space-between;
    height: 48px;
    border-bottom: 1px solid #EAEEF0;
    padding: 0 16px;
}
.supplies-set .top-bar .layui-form-switch{
    margin-top: 0;
}
.supplies-set .l1{
    width: 170px;
}
.supplies-set .l2{
    width: 250px;
}
.supplies-set .l3{
    width: 350px;
}
.supplies-set .list>li{
    min-height: 32px;
    padding: 0 16px;
    display: flex;
            align-items: center;
    cursor: pointer;
    display: flex;
}
.supplies-set .list>li>.text{
            flex: 1;
}
.supplies-set .list>li>.icon-btn{
    margin-left: 5px;
    font-size: 17px;
}
.supplies-set .list>li>.icon-btn:hover{
    color: #BD973D;
}
.supplies-set .list>li.active,
.supplies-set .list>li:hover{
    background: #F7F4EC;
    /* color: #BD973D; */
}
.supplies-set .list>li.active>.text,
.supplies-set .list>li:hover>.text{
    color: #BD973D;
}

.supplies-set .list2{
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    /* min-height: 32px; */
    margin-left: -6px;
    margin-top: -6px;
}
.supplies-set .list2>li{
    padding: 0 7px;
    background: #F5F7FA;
    margin-left: 6px;
    margin-top: 6px;
}

/* 上传图片 */
.s-set_icon{
    width: 190px;
    height: 143px;
    position: relative;
    cursor: pointer;
    border: 1px solid #EBEEF5;
    /* background-color: #EBEEF5; */
    /* display: none; */
}
.s-set_icon img{
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
}
.s-set_icon .s-add{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    z-index: 1;
    background-color: #EBEEF5;
}
.s-set_icon .s-add i{
    font-size: 30px;
    line-height: 30px;
}
.s-set_icon .s-add span{
    margin-top: 10px;
    font-size: 16px;
    color: #303133;
}
.s-set_icon.has_img .s-add{
    opacity: 0;
}
.s-set_icon.has_img:hover .s-add{
    opacity: 0.5;
}

.supplies-set .layui-table-cell {
    padding: 0 7px;
}
.supplies-set .layui-table-view{
    border-top: none;
    border-left: none;
    border-right: none;
}

/* 物料下单  supplies-goods*/
.supplies-goods .row{
            flex: 1;
    display: flex;
    /* flex-wrap: wrap; */
    height: 0;
}
.supplies-goods .s-top_bar{
    -webkit-box-shadow: 0px 1px 0px 0px rgba(196, 205, 213, 0.35);
            box-shadow: 0px 1px 0px 0px rgba(196, 205, 213, 0.35);
}
.supplies-goods .col1{
    width: 150px;
    background: #fff;
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11);
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11);
}
.supplies-goods .col2{
            flex: 1;
    overflow: auto;
    padding: 15px;
}
.supplies-goods .col3{
    width: 580px;
    background: #fff;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.supplies-goods .col3 .table{
            flex: 1;
}
.supplies-goods .bottom-bar{
    padding: 10px 20px;
    -webkit-box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.02);
            box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.02);
}
.supplies-goods .bottom-bar .p1{
    display: flex;
            align-items: center;
    /* height: 48px; */
    margin-bottom: 10px;
    

}
.supplies-goods .bottom-bar .p2{
    display: flex;
            align-items: center;
    margin-bottom: 10px;
}
.supplies-goods .bottom-bar .p2 input{
    flex: 1;
}
.supplies-goods .bottom-bar>span{
    font-size: 14px;
    color: #909399;
}
.supplies-goods .bottom-bar>p{
            flex: 1;
    margin-left: 50px;
    margin-right: 20px;
}
.supplies-goods .bottom-bar font{
    color: #E54C4A;
}
.supplies-goods .goods-type>li{
    padding: 0 16px;
    height: 32px;
    font-size: 16px;
    color: #303133;
    line-height: 32px;
    cursor: pointer;

    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.supplies-goods .goods-type>li.active{
    background: #F7F4EC;
    color: #BD973D;
}
.supplies-goods .goods-list{
    margin-left: -15px;
}
.supplies-goods .goods-list>li{
    width: 273px;
    background: #fff;
    float: left;
    margin-left: 15px;
    margin-bottom: 15px;
}
.supplies-goods .goods-list>li>img{
    width: 100%;
    height: 200px;
    -o-object-fit: contain;
       object-fit: contain
}
.supplies-goods .goods-list>li .msg{
    padding: 10px 15px;
    color: #303133;
}
.supplies-goods .goods-list>li .msg .title{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.supplies-goods .goods-list>li .msg .p{
    font-size: 16px;
    line-height: 28px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.supplies-goods .goods-list>li .msg .p>span{
    color: #E54C4A;
    font-size: 18px;
}
.supplies-goods .goods-list .btn{
    height: 40px;
    background: #D4B365;
    border-radius: 2px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.supplies-goods .goods-list .btn.disabled{
    background-color: #ccc;
    /* color: #b2b2b2; */
}
.table .icon-btn{
    cursor: pointer;
}
.table .icon-btn:hover{
    color: #BD973D;
}
.supplies-goods .layui-table-cell {
    padding: 0 7px;
}
</style>