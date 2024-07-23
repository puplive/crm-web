<template>
  <div class="clues-info">
    <div class="clues-info-header">
      <div class="clues-info-header-left">
        <div class="p1">{{ form.companyName }}</div>
        <div class="p2">
          <span>所属展商：{{ form.companyName }}</span>
          <span>新展商：
            <el-radio-group v-model="exhibitionInfo.isNew">
              <el-radio :value="true" style="margin-right: 10px;">是</el-radio>
              <el-radio :value="false">否</el-radio>
            </el-radio-group>
          </span>
          <span>客户经理：{{ authUser }}</span>
        </div>
      </div>
      <div class="clues-info-header-right">
        <el-button type="primary" size="small">退展</el-button>
        <el-button type="primary" size="small">转他人</el-button>
      </div>
    </div>
    <div class="clues-info-content">
      <div class="clues-info-left">
        <el-tabs v-model="activeName" type="border-card" class="demo-tabs" style="height: 100%;">
          <el-tab-pane label="资料" :name="1">
            <div style="">
            <el-form ref="form" label-width="auto">
              <div class="title-bar">
                <label for="">公司信息</label>
                <el-button type="default" @click="$router.push({name: 'CluesEdit', query: {id: id}})" size="small">编辑</el-button>
                <el-button type="default" @click="delClues" size="small">删除</el-button>
              </div>

              <el-form-item label="企业名称">
                <span>{{ form.companyName }}</span>
              </el-form-item>

              <el-form-item label="联系人">
                <span>{{ form.contactName }}</span>
              </el-form-item>

              <el-form-item label="国家">
                <span>{{ form.country }}</span>
              </el-form-item>

              <el-form-item label="省份">
                <span>{{ form.province }}</span>
              </el-form-item>

              <el-form-item label="城市">
                <span>{{ form.city }}</span>
              </el-form-item>

              <el-form-item label="详细地址" prop="address">
                <span>{{ form.address }}</span>
              </el-form-item>

              <el-form-item label="企业品牌" prop="">
                <span>{{ form.companyBrand&&form.companyBrand.length > 0 ? form.companyBrand.join(',') : '' }}</span>
              </el-form-item>

              <template v-for="(item, index ) in customFieldTrans" :key="item.key">
                <el-form-item :label="item.name">
                  <span v-if="item.type === 5">{{ item.value.join('，') }}</span>
                  <span v-else-if="item.type === 7">{{ item.value.join('，') }}</span>
                  <span v-else>{{ item.value }}</span>
                </el-form-item>
              </template>

              <el-form-item label="参展联系人" prop="">
                <el-button size="small" @click="lxr.setAdd">添加</el-button>
              </el-form-item>
              <el-table border :data="lxr.list" show-overflow-tooltip header-row-class-name="s-table-header">
                <el-table-column prop="name" label="姓名"/>
                <el-table-column prop="duties" label="职务"/>
                <el-table-column prop="type" label="类别" />
                <el-table-column prop="mobile" label="手机号" />
                <el-table-column prop="tel" label="电话" />
                <el-table-column prop="email" label="邮箱" />
                <el-table-column prop="wechat" label="微信" />
                <el-table-column prop="status" label="在职状态" />
                <el-table-column prop="isExhibitionContact" label="展会联系人" />
                <el-table-column label="操作" fixed="right">
                  <template #default="scope">
                    <el-button type="text" size="small" @click="lxr.del(scope.row.id)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </div>
          </el-tab-pane>

          <el-tab-pane label="订单" :name="2">
            <div><el-button type="primary">签订合同</el-button></div>
            <p style="padding: 10px 0;">展位订单</p>
            <el-table :data="orderData" border show-overflow-tooltip>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>

            <p style="padding: 10px 0; margin-top: 10px;">物料订单</p>
            <el-table :data="orderData" border  show-overflow-tooltip>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="合同" :name="3">
            <el-table :data="orderData" border  show-overflow-tooltip>
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="clues-info-right">
        
        <FollowUp :clueId="id"></FollowUp>
        
      </div>
    </div>
  </div>

  <el-dialog title="添加联系人" v-model="lxr.show" width="500px">
    <el-form :model="lxr.form" label-width="80px">
    </el-form>
    <template #footer>
      <el-button type="default" @click="lxr.show = false">取消</el-button>
      <el-button type="primary" @click="lxr.add">添加</el-button>
    </template>
  </el-dialog>

</template>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import FollowUp from './components/FollowUp.vue'
import {getData, contact, getCustomField, del } from '@/api/Clues'
import { getExhibitionInfo } from "@/api/Order";

const router = useRouter()
const route = useRoute()

const id = route.query.id
const exhibitionId = route.query.exhibitionId
const authUser = route.query.authUser

const activeName = ref(1)
const form: any = ref({
  customField: [],
  // customFieldTrans: []
})
const customField: any = ref([])
getCustomField().then(res => {
  if (res.code === 0) {
    customField.value = res.data
  }
})

const customFieldTrans = computed(() => {
  let list = []
  for(let i in form.value.customFieldTrans){
    let val = form.value.customFieldTrans[i],
        d = customField.value.find((item: any) => {
          return item.key === i
        })
    list.push({
      key: i,
      value: val,
      type: d? d.type : 1,
      name: d? d.name : '',
    })
  }
  return list
})

const orderData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

getData({ id }).then((res: any) => {
  if (res.code === 0) {
    form.value = res.data
  }else {
    // console.log(res.msg)
  }
})

const delClues = () => {
  del({ id: [id] }).then(res => {
    if (res.code === 0) {
      ElMessage.success('删除成功')
      setTimeout(() => {
        router.go(-1)
      }, 1000)
    }else {
      ElMessage.error(res.msg)
    }
  })
}

const exhibitionInfo: any = ref({})
getExhibitionInfo({ clueId: id, exhibitionId: exhibitionId }).then(res => {
  if (res.code === 0) {
    exhibitionInfo.value = res.data
  }
})


const contactList = ()=>{
  contact.getList({ clueId: id }).then(res => {
    if (res.code === 0) {
      lxr.list = res.data
    }
  })
}
contactList()
const lxr: any = reactive({
  show: false,
  list: [],
  form: {
    clueId: id,
    name: '',
    duties: '',
    type: 0,
    mobile: '',
    tel: '',
    email: '',
    wechat: '',
    status: 1,
    // isExhibitionContact: false,
  },
  setAdd: ()=>{
    lxr.show = true
    lxr.form = {
      clueId: id,
      name: '',
      duties: '',
      type: 0,
      mobile: '',
      tel: '',
      email: '',
      wechat: '',
      status: 1,
      // isExhibitionContact: false,
    }
  },
  add: ()=>{
    contact.add(lxr.form).then(res => {
      if (res.code === 0) {
        ElMessage.success('添加成功')
        lxr.show = false
        contactList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  },
  edit: (d: any)=>{
    contact.edit(d).then(res => {
      if (res.code === 0) {
        ElMessage.success('修改成功')
        // contactList()
      }else {
        ElMessage.error(res.msg)
        contactList()
      }
    })
  },
  del: (id: any)=>{
    contact.del({id}).then(res => {
      if (res.code === 0) {
        ElMessage.success('删除成功')
        contactList()

      }else {
        ElMessage.error(res.msg)
      }
    })
  }
})

</script>
<style>
  .clues-info .el-tabs--border-card>.el-tabs__content {
      padding: 15px;
      height: calc(100% - 40px);
      overflow: auto;
  }
</style>
<style scoped>

.clues-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  .clues-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px 20px; */
    margin-bottom: 15px;
    .p1{
      margin-bottom: 10px;
    }
    .p2{
      >span{
        margin-right: 30px;
      }
    }
  }
 .clues-info-content {
    height: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
    /* padding: 20px; */
    .clues-info-left{
      flex: 1;
      min-width: 0;
    }
    .clues-info-right{
      width: 400px;
      margin-left: 15px;
      /* padding: 15px; */

      
    }
  }
}
.title-bar {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  >label {
    margin-right: 30px;
    font-weight: bold;
  }
}
.el-form-item{
  margin-bottom: 0;
}
</style>