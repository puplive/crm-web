<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getGoodsList, addGoods, editGoods, delGoods, getSetting, getGoodsListSetting, addGoodsSetting, editGoodsSetting, delGoodsSetting, setStatusGoodsSetting } from '@/api/Goods';
import { uploadFile } from '@/api/common'
import _rules from '@/utils/rules'
const router = useRouter();
const route = useRoute();

const exhibitionId = route.query.id;
const title = route.query.title;
const goodsList: any = ref([]);
const goodsList2: any = ref([]);
const goodsList3: any = ref([]);
const selectGoods: any = ref({});
const selectGoods2: any = ref({});
const selectGoods3: any = ref({});
const settingData: any = ref({});
const goodsListSetting = ref([]);
const status = ref(1);
const tableRef: any = ref(null)
const addFormRef: any = ref(null)
const settingFormRef: any = ref(null)
const addGoodsForm: any = reactive({
  show: false,
  title: '',
  id: '',
  pid: '',
  exhibitionId: exhibitionId,
  name: '',
  type: 1,
});
const editSettingFormRef: any = ref(null);
const editSettingShow = ref(false);
const editSettingForm: any = ref({});


// const subGetGoodsList = (id: number) => {
//   getGoodsList({exhibitionId: id}).then((res) => {
//     goodsList.value = res.data;
//   }).catch((err) => {
//   });
// };

const subGetSetting = () => {
  getSetting({ materialId: selectGoods3.value.id }).then(async (res) => {
    if (res.code === 0) {
      settingData.value = res.data;
      await nextTick()
      settingFormRef.value.clearValidate();
    }
  }).catch((err) => {
  });
};

const getGoodsListData = () => {
  getGoodsList({ exhibitionId }).then((res) => {
    if (res.code === 0) {
      goodsList.value = res.data;
      if (res.data.length > 0) {
        if (!selectGoods.value.id) {
          selectGoods.value = res.data[0];
        } else {
          selectGoods.value = res.data.find((item: any) => item.id == selectGoods.value.id) || res.data[0];
        }
      }
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((err) => {
  });
};

const setAddGoods = async (type: any) => {

  addGoodsForm.type = type;
  addGoodsForm.id = '';
  addGoodsForm.name = '';
  if (type == 1) {
    addGoodsForm.title = '添加服务项目';
    addGoodsForm.pid = 0;
  } else if (type == 2) {
    addGoodsForm.title = '添加位置/版面';
    addGoodsForm.pid = selectGoods.value.id;
  } else if (type == 3) {
    addGoodsForm.title = '添加规格/尺寸';
    addGoodsForm.pid = selectGoods2.value.id;
  }
  addGoodsForm.show = true;
  await nextTick();
  setTimeout(() => {
    addFormRef.value.clearValidate();
  }, 0);

};
const setEditGoods = async (item: any, type: any) => {

  addGoodsForm.id = item.id;
  addGoodsForm.name = item.name;
  if (type == 1) {
    addGoodsForm.title = '修改服务项目';
  } else if (type == 2) {
    addGoodsForm.title = '修改位置/版面';
  } else if (type == 3) {
    addGoodsForm.title = '修改规格/尺寸';
  }
  addGoodsForm.show = true;
  await nextTick();
  setTimeout(() => {
    addFormRef.value.clearValidate();
  }, 0);
};

const subAddGoods = () => {
  addFormRef.value.validate((valid: any) => {
    if (valid) {
      if (addGoodsForm.id) {
        editGoods({ id: addGoodsForm.id, name: addGoodsForm.name }).then((res) => {
          if (res.code == 0) {
            ElMessage.success('修改成功');
            getGoodsListData();
          } else {
            ElMessage.error(res.msg);
          }
          addGoodsForm.show = false;
        }).catch((err) => {
        });
      } else {
        let { show, title, id, ...d } = addGoodsForm;
        addGoods(d).then((res) => {
          if (res.code === 0) {
            ElMessage.success('添加成功');
            getGoodsListData();
          } else {
            ElMessage.error(res.msg);
          }
          addGoodsForm.show = false;
        }).catch((err) => {
        });
      }
    }
  });
};

const delGoodsData = (id: number) => {
  delGoods({ id }).then((res) => {
    if (res.code === 0) {
      ElMessage.success('删除成功');
      getGoodsListData();
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((err) => {
  });
};

const setStatus = () => {
  // setStatusGoodsSetting({id, status}).then((res) => {
  //   if(res.code === 0){
  //     ElMessage.success('上架成功');
  //     subGetGoodsListSetting();
  //   }else{  
  //     ElMessage.error(res.msg);
  //   } 
  // }).catch((err) => {
  // });
};

const subAddGoodsSetting = () => {
  settingFormRef.value.validate((valid: any) => {
    if (valid) {
      addGoodsSetting({ ...settingData.value, materialId: selectGoods3.value.id }).then((res) => {
        if (res.code === 0) {
          ElMessage.success('上架成功');
          subGetGoodsListSetting();
        } else {
          ElMessage.error(res.msg);
        }
      }).catch((err) => {
      });
    }
  });
};

const subGetGoodsListSetting = () => {
  getGoodsListSetting({ exhibitionId }).then((res) => {
    if (res.code === 0) {
      goodsListSetting.value = res.data;
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((err) => {
  });
}


const beforeUpload = (rawFile: any) => {
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
      if (res.code === 0) {
        resolve(res.data)
      } else {
        reject(res)
      }
    })
  })
}



const handleDel = (type: number, id: any) => {
  let idArr = [];
  if (type === 2) {
    idArr = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (idArr.length === 0) {
      ElMessage.warning('请选择要操作的数据');
      return false
    }
  } else {
    idArr = [id]
  }
  delGoodsSetting({ id: idArr }).then((res) => {
    if (res.code === 0) {
      ElMessage.success('移除成功');
      subGetGoodsListSetting();
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((err) => {
  });
};
// 
const changeEnable = (type: number, status: number, id: any) => {
  let idArr = [];
  if (type === 2) {
    idArr = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (idArr.length === 0) {
      ElMessage.warning('请选择要操作的数据');
      return false
    }
  } else {
    idArr = [id]
  }
  setStatusGoodsSetting({ id: idArr, status }).then((res) => {
    if (res.code === 0) {
      ElMessage.success(status == 1 ? '开启成功' : '禁用成功');
      subGetGoodsListSetting();
    } else {
      ElMessage.error(res.msg);
    }
  }).catch((err) => {
  });
};

const handleEdit = (item: any) => {
  editSettingShow.value = true
  editSettingForm.value = item;
};

const subEditSetting = () => {
  editSettingFormRef.value.validate((valid: any) => {
    if (valid) {
      editGoodsSetting({
        id: editSettingForm.value.id,
        price: editSettingForm.value.price,
        unit: editSettingForm.value.unit,
        num: editSettingForm.value.num,
      }).then((res) => {
        if (res.code === 0) {
          ElMessage.success('修改成功');
          editSettingShow.value = false
          subGetGoodsListSetting();
        } else {
          ElMessage.error(res.msg);
        }
      }).catch((err) => {
      });
    }
  });
};



watch(() => selectGoods.value, (val) => {
  goodsList2.value = val.child;
  if (val.child.length > 0) {
    selectGoods2.value = val.child.find((item: any) => item.id == selectGoods2.value.id) || val.child[0];
  } else {
    selectGoods2.value = {};
  }
});

watch(() => selectGoods2.value, (val) => {
  goodsList3.value = val.child;
  if (val.child && val.child.length > 0) {
    selectGoods3.value = val.child.find((item: any) => item.id == selectGoods3.value.id) || val.child[0];
  } else {
    selectGoods3.value = {};
  }
});

watch(() => selectGoods3.value, async (val) => {
  if (val.id) {
    subGetSetting();
  } else {
    settingData.value = {};
  }

});

getGoodsListData()
subGetGoodsListSetting()

</script>

<template>
  <div class="goods-index supplies-set">
    <div class="s-top_bar" style="margin-bottom: 10px;">
      <span style="margin-right: 20px;">{{ title }}</span>
      <el-button type="" @click="$router.go(-1)">返回</el-button>
    </div>
    <div class="con">
      <div class="l l1">
        <div class="top-bar">
          <el-button size="small" type="primary" icon="Plus" @click="setAddGoods(1)">服务项目</el-button>
        </div>
        <div class="list-box">
          <ul class="list" id="list1">
            <li v-for="(item, index) in goodsList" :key="index" :class="item.id == selectGoods.id ? 'active' : ''"
              @click="selectGoods = item">
              <span class="text">{{ item.name }}</span>
              <el-icon @click.stop="setEditGoods(item, 1)" class="icon-btn is_hide">
                <Edit />
              </el-icon>
              <el-icon @click.stop="delGoodsData(item.id)" class="icon-btn is_hide">
                <Delete />
              </el-icon>
            </li>
          </ul>
        </div>
      </div>
      <div class="l l2">
        <div class="top-bar">
          <el-button v-if="selectGoods.id" size="small" type="primary" icon="Plus"
            @click="setAddGoods(2)">位置/版面</el-button>
        </div>
        <div class="list-box">
          <ul class="list" id="list2">
            <li v-for="(item, index) in goodsList2" :key="index" :class="item.id == selectGoods2.id ? 'active' : ''"
              @click="selectGoods2 = item">
              <span class="text">{{ item.name }}</span>
              <el-icon @click.stop="setEditGoods(item, 2)" class="icon-btn is_hide">
                <Edit />
              </el-icon>
              <el-icon @click.stop="delGoodsData(item.id)" class="icon-btn is_hide">
                <Delete />
              </el-icon>
            </li>
          </ul>
        </div>
      </div>
      <div class="l l3">
        <div class="top-bar">
          <el-button v-if="selectGoods2.id" size="small" type="primary" icon="Plus"
            @click="setAddGoods(3)">规格/尺寸</el-button>
        </div>
        <div class="list-box" style="padding: 10px;">
          <ul class="list list2" id="list3">
            <li v-for="(item, index) in goodsList3" :key="index" :class="item.id == selectGoods3.id ? 'active' : ''"
              @click="selectGoods3 = item">
              <span class="text">{{ item.name }}</span>
              <el-icon @click.stop="delGoodsData(item.id)" class="icon-btn">
                <Close />
              </el-icon>
            </li>
          </ul>

          <el-form v-if="selectGoods3.id" ref="settingFormRef" :model="settingData" style="margin-top: 20px"
            label-width="auto">
            <el-form-item label="单价" prop="price"
              :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
              <el-input-number
                class="s-number-input"
                v-model="settingData.price" 
                :min="0" 
                :controls="false">
                <template #append>元</template>
              </el-input-number>
            </el-form-item>
            <el-form-item label="单位" prop="unit" :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
              <el-input v-model="settingData.unit" placeholder=""/>
            </el-form-item>
            <el-form-item label="上架数量" prop="num"
              :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
              <el-input-number
                class="s-number-input"
                v-model="settingData.num"
                :min="0" 
                :controls="false"/>
            </el-form-item>
            <el-form-item label="" prop="img" :rules="[{ required: true, message: '请上传图片' }]">
              <el-upload class="img-uploader" :show-file-list="false"
                :on-success="(response: any, file: any, fileList: any) => { settingData.img = response.url; }"
                :before-upload="beforeUpload" 
                :http-request="uploadImg"
                accept="image/*">
                <el-image v-if="settingData.img" :src="settingData.img" class="img">
                </el-image>
                <el-icon v-else class="img-uploader-icon">
                  <Plus />
                </el-icon>
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
          <el-switch v-model="status" :active-value="1" :inactive-value="0" active-text="开启" inactive-text="关闭"
            inline-prompt @change="setStatus()" />

        </div>
        <div class="list-box" style="padding: 10px;">
          <div style="margin-bottom: 10px;">
            <el-button size="small" @click="changeEnable(2, 1, 0)">批量启用</el-button>
            <el-button size="small" @click="changeEnable(2, 0, 0)">批量禁用</el-button>
            <el-button size="small" @click="handleDel(2, 0)">批量移除</el-button>
          </div>
          <el-table ref="tableRef" :data="goodsListSetting" border>
            <el-table-column type="selection" fixed="left" width="42" />
            <el-table-column prop="project" label="服务项目" min-width="120"></el-table-column>
            <el-table-column prop="position" label="位置/版面" width="100"></el-table-column>
            <el-table-column prop="size" label="尺寸规格" width="100"></el-table-column>
            <el-table-column prop="price" label="单价(RMB)" min-width="120"></el-table-column>
            <el-table-column prop="num" label="上架数量" min-width="120"></el-table-column>
            <el-table-column prop="buy" label="已购数量" min-width="120"></el-table-column>
            <el-table-column prop="stock" label="库存"></el-table-column>
            <el-table-column label="操作" fixed="right" width="170">
              <template #default="scope">
                <el-button link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button link type="primary" @click="handleDel(1, scope.row.id)">移除</el-button>
                <el-button link type="primary" @click="changeEnable(1, 0, scope.row.id)"
                  v-if="scope.row.isEnable == 1">已开启</el-button>
                <el-button link type="primary" @click="changeEnable(1, 1, scope.row.id)" v-else>已禁用</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="addGoodsForm.show" :title="addGoodsForm.title" width="400" draggable>
    <el-form ref="addFormRef" :model="addGoodsForm">
      <el-form-item label="" prop="name" :rules="[{ required: true, message: '必填' }]">
        <el-input v-model="addGoodsForm.name"></el-input>
      </el-form-item>
      <div style="text-align: right;">
        <el-button type="primary" @click="subAddGoods()">确定</el-button>
        <el-button @click="addGoodsForm.show = false">取消</el-button>
      </div>
    </el-form>
  </el-dialog>

  <el-dialog v-model="editSettingShow" title="编辑物料" width="400" draggable>
    <el-form ref="editSettingFormRef" :model="editSettingForm" label-width="auto">
      <el-form-item label="服务项目" style="margin-bottom: 0;">
        {{ editSettingForm.project }}
      </el-form-item>
      <el-form-item label="位置/版面" style="margin-bottom: 0;">
        {{ editSettingForm.position }}
      </el-form-item>
      <el-form-item label="规格/尺寸" style="margin-bottom: 0;">
        {{ editSettingForm.size }}
      </el-form-item>
      <el-form-item label="单价" prop="price"
        :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
        <el-input-number v-model="editSettingForm.price" :min="0" :controls="false" class="s-number-input"/>
      </el-form-item>
      <el-form-item label="单位" prop="unit" :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
        <el-input v-model="editSettingForm.unit"></el-input>
      </el-form-item>
      <el-form-item label="上架数量" prop="num"
        :rules="[{ required: true, message: '请输入', trigger: 'blur' }]">
        <el-input-number v-model="editSettingForm.num" :min="0" :controls="false" class="s-number-input"/>
      </el-form-item>
      <el-form-item label="已购数量" style="margin-bottom: 0;">
        {{ editSettingForm.buy }}
      </el-form-item>
      <el-form-item label="库存">
        {{ editSettingForm.stock }}
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="subEditSetting()">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

.goods-index {
  height: 100%;
  display: flex;
  flex-direction: column;

  .con {
    flex: 1;
    display: flex;
    border: 1px solid var(--el-border-color-lighter);
  }
}

/* 物料设置 */
.supplies-set .l {
  /* border-top: 1px solid var(--el-border-color-lighter); */
  border-right: 1px solid var(--el-border-color-lighter);
  /* border-bottom: 1px solid var(--el-border-color-lighter); */
  display: flex;
  flex-direction: column;
}

.supplies-set .r {
  flex: 1;
}

.supplies-set .top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding: 0 10px;
}

.supplies-set .l1 {
  width: 150px;
}

.supplies-set .l2 {
  width: 200px;
}

.supplies-set .l3 {
  width: 300px;
}

.supplies-set .r .list-box,
.supplies-set .l .list-box {
  flex: 1;

}

.supplies-set .list>li {
  min-height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: flex;
}

.supplies-set .list>li>.text {
  flex: 1;
}

.supplies-set .list>li>.icon-btn {
  margin-left: 5px;
  font-size: 17px;
}

.supplies-set .list>li>.is_hide {
  display: none;
}

.supplies-set .list>li:hover>.is_hide {
  display: block;
}

.supplies-set .list>li>.icon-btn:hover {
  color: #BD973D;
}

.supplies-set .list>li.active,
.supplies-set .list>li:hover {
  background: #F7F4EC;
}

.supplies-set .list>li.active>.text,
.supplies-set .list>li:hover>.text {
  color: #BD973D;
}


.supplies-set .list2 {
  display: flex;
  flex-wrap: wrap;
  /* min-height: 32px; */
  margin-left: -5px;
  margin-top: -5px;
}

.supplies-set .list2>li {
  padding: 0 7px;
  background: #F5F7FA;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 3px
}

/* 上传图片 */
.s-set_icon {
  width: 190px;
  height: 143px;
  position: relative;
  cursor: pointer;
  border: 1px solid #EBEEF5;
  /* background-color: #EBEEF5; */
  /* display: none; */
}

.s-set_icon img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.s-set_icon .s-add {
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

.s-set_icon .s-add i {
  font-size: 30px;
  line-height: 30px;
}

.s-set_icon .s-add span {
  margin-top: 10px;
  font-size: 16px;
  color: #303133;
}

.s-set_icon.has_img .s-add {
  opacity: 0;
}

.s-set_icon.has_img:hover .s-add {
  opacity: 0.5;
}

.supplies-set .layui-table-cell {
  padding: 0 7px;
}

.supplies-set .layui-table-view {
  border-top: none;
  border-left: none;
  border-right: none;
}

/* 物料下单  supplies-goods*/
.supplies-goods .row {
  flex: 1;
  display: flex;
  /* flex-wrap: wrap; */
  height: 0;
}

.supplies-goods .s-top_bar {
  -webkit-box-shadow: 0px 1px 0px 0px rgba(196, 205, 213, 0.35);
  box-shadow: 0px 1px 0px 0px rgba(196, 205, 213, 0.35);
}

.supplies-goods .col1 {
  width: 150px;
  background: #fff;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.11);
}

.supplies-goods .col2 {
  flex: 1;
  overflow: auto;
  padding: 15px;
}

.supplies-goods .col3 {
  width: 580px;
  background: #fff;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.supplies-goods .col3 .table {
  flex: 1;
}

.supplies-goods .bottom-bar {
  padding: 10px 20px;
  -webkit-box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.02);
  box-shadow: 0px -2px 0px 0px rgba(0, 0, 0, 0.02);
}

.supplies-goods .bottom-bar .p1 {
  display: flex;
  align-items: center;
  /* height: 48px; */
  margin-bottom: 10px;


}

.supplies-goods .bottom-bar .p2 {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.supplies-goods .bottom-bar .p2 input {
  flex: 1;
}

.supplies-goods .bottom-bar>span {
  font-size: 14px;
  color: #909399;
}

.supplies-goods .bottom-bar>p {
  flex: 1;
  margin-left: 50px;
  margin-right: 20px;
}

.supplies-goods .bottom-bar font {
  color: #E54C4A;
}

.supplies-goods .goods-type>li {
  padding: 0 16px;
  height: 32px;
  font-size: 16px;
  color: #303133;
  line-height: 32px;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.supplies-goods .goods-type>li.active {
  background: #F7F4EC;
  color: #BD973D;
}

.supplies-goods .goods-list {
  margin-left: -15px;
}

.supplies-goods .goods-list>li {
  width: 273px;
  background: #fff;
  float: left;
  margin-left: 15px;
  margin-bottom: 15px;
}

.supplies-goods .goods-list>li>img {
  width: 100%;
  height: 200px;
  -o-object-fit: contain;
  object-fit: contain
}

.supplies-goods .goods-list>li .msg {
  padding: 10px 15px;
  color: #303133;
}

.supplies-goods .goods-list>li .msg .title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.supplies-goods .goods-list>li .msg .p {
  font-size: 16px;
  line-height: 28px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.supplies-goods .goods-list>li .msg .p>span {
  color: #E54C4A;
  font-size: 18px;
}

.supplies-goods .goods-list .btn {
  height: 40px;
  background: #D4B365;
  border-radius: 2px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}

.supplies-goods .goods-list .btn.disabled {
  background-color: #ccc;
  /* color: #b2b2b2; */
}

.table .icon-btn {
  cursor: pointer;
}

.table .icon-btn:hover {
  color: #BD973D;
}

.supplies-goods .layui-table-cell {
  padding: 0 7px;
}
</style>