<template>
  <div class="clues-info">
    <div class="clues-info-header">
      <div class="clues-info-header-left">
        <div class="p1">{{ form.companyName }}</div>
        <div class="p2">
          <span v-if="type === '2'">所属展商：{{ form.companyName }}</span>
          <span v-if="type === '2'">新展商：
            <el-radio-group v-model:model-value="form.isNew" @change="changeIsNew">
              <el-radio :value="true" style="margin-right: 10px;">是</el-radio>
              <el-radio :value="false">否</el-radio>
            </el-radio-group>
          </span>
          <span>客户经理：{{ form.authUser }}</span>
        </div>
      </div>
      <div class="clues-info-header-right">
        <template v-if="type === '2'"> 
          <el-button type="info" size="small" plain v-if="form.isExit" disabled>已退展</el-button>
          <el-button type="primary" size="small" v-else @click="exitClues">退展</el-button>
        </template>
        
        <el-button type="primary" size="small" @click="()=>{ moveRef.setMove([id]) }">转他人</el-button>
      </div>
    </div>
    <div class="clues-info-content">
      <div class="clues-info-left">
        <el-tabs v-model="tab.activeName" @tab-change="tab.change" type="border-card" class="demo-tabs" style="height: 100%;" >
          <el-tab-pane label="资料" :name="1">
            <div style="">
            <el-form ref="form" label-width="auto" label-position="left">
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
                  <span v-if="item.type === 5">{{ item.value instanceof Array ? item.value.join('，') : item.value }}</span>
                  <span v-else-if="item.type === 7">{{ item.value instanceof Array ? item.value.join('，') : item.value }}</span>
                  <span v-else>{{ item.value }}</span>
                </el-form-item>
              </template>

              <el-form-item label="参展联系人" prop="">
                <el-button size="small" @click="lxr.setAdd">添加</el-button>
              </el-form-item>
              <el-table border :data="lxr.list" show-overflow-tooltip header-row-class-name="s-table-header">
                <el-table-column prop="name" label="姓名"/>
                <el-table-column prop="duties" label="职务"/>
                <el-table-column prop="type" label="类别">
                  <template #default="scope">
                    {{ ['无', '展位', '财务', '市场', '现场'][scope.row.type]  }}
                  </template>
                </el-table-column>
                <el-table-column prop="mobile" label="手机号" />
                <el-table-column prop="tel" label="电话" />
                <el-table-column prop="email" label="邮箱" />
                <el-table-column prop="wechat" label="微信" />
                <el-table-column prop="status" label="在职状态" min-width="120">
                  <template #default="scope">
                    {{ ['','在职', '离职', '调岗'][scope.row.status]  }}
                  </template>
                </el-table-column>
                <el-table-column prop="isExhibitionContact" label="展会联系人">
                  <template #default="scope">{{ scope.row.isExhibitionContact === 1 ? '是' : '否' }}</template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="150">
                  <template #default="scope">
                    <el-button link type="primary" @click="lxr.setEdit(scope.row)">编辑</el-button>
                    <el-button link type="danger" @click="lxr.del(scope.row.id)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>
          </div>
          </el-tab-pane>

          <el-tab-pane label="订单" :name="2" v-if="type === '2'">
            <!-- <div><el-button type="primary">签订合同</el-button></div> -->
            <p style="padding: 10px 0;">展位订单</p>
            <el-table :data="form.orderPosition" border show-overflow-tooltip>
              <el-table-column prop="orderCode" label="订单编号" min-width="120"/>
              <el-table-column prop="brand" label="品牌"/>
              <el-table-column prop="positionCode" label="展位号" />
              <el-table-column prop="price" label="订单金额"  min-width="120"/>
              <el-table-column label="操作" width="150" fixed="right">
                <template #default="scope"> 
                  <el-button link type="primary" @click="$router.push({ name: 'OrderBoothDetail', query: { id: scope.row.id } })">详情</el-button>
                  <el-button link type="primary" v-if="scope.row.orderStatus === 1" @click="orderRevoke(scope.row.id, 1)">撤销</el-button>
                  <template v-else>
                    <el-button link type="info" disabled>已撤销</el-button>
                    <el-button link type="danger" @click="orderDel(scope.row.id, 1)">删除</el-button>
                  </template>
                </template>
              </el-table-column>
            </el-table>

            <p style="padding: 10px 0; margin-top: 10px;">物料订单</p>
            <el-table :data="form.orderMaterial" border  show-overflow-tooltip>
              <el-table-column prop="orderCode" label="订单编号" min-width="120"/>
              <!-- <el-table-column prop="name" label="品牌"/> -->
              <el-table-column prop="positionCode" label="展位号"/>
              <el-table-column prop="price" label="订单金额"  min-width="120"/>
              <el-table-column label="操作" width="150" fixed="right">
                <template #default="scope"> 
                  <el-button link type="primary" @click="goodsDetail(scope.row.id)">详情</el-button>
                  <el-button link type="primary" v-if="scope.row.orderStatus === 1" @click="orderRevoke(scope.row.id, 2)">撤销</el-button>
                  <template v-else>
                    <el-button link type="info" disabled>已撤销</el-button>
                    <el-button link type="danger" @click="orderDel(scope.row.id, 2)">删除</el-button>
                  </template>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="合同" :name="3" v-if="type === '2'">
            <el-table :data="form.contract" border  show-overflow-tooltip>
              <el-table-column prop="contractCode" label="合同编号" min-width="120"/>
              <el-table-column prop="contractType" label="合同类型" min-width="120">
                <template #default="scope"> 
                  <!-- 1展位合同，2物料合同，3展位+物料 -->
                  {{ {1: '展位合同', 2: '物料合同', 3: '展位+物料'}[scope.row.contractType as number] }}
                </template>
              </el-table-column>
              <!-- <el-table-column prop="" label="付款方式" min-width="120">
                <template #default="scope">{{ '银行转账' }}</template>
              </el-table-column> -->
              <el-table-column prop="contractAmount" label="合同金额"  min-width="120"/>
              <el-table-column prop="deposit" label="预定金" />
              <el-table-column prop="" label="抵扣" />
              <el-table-column prop="firstPayPrice" label="一期款" />
              <el-table-column prop="firstPayTime" label="期限" />
              <el-table-column prop="finalPayPrice" label="尾款" />
              <el-table-column prop="finalPayTime" label="期限" />
              <el-table-column prop="receivedPrice" label="已收款" />
              <el-table-column prop="unknownPrice" label="未收款" />
              <el-table-column prop="contractStatus" label="合同状态" min-width="120">
                <template #default="scope"> 
                  {{ {0: '撤销', 1: '已完成'}[scope.row.contractStatus as number] }}
                </template>
              </el-table-column>
              <el-table-column label="操作" width="200" fixed="right">
                <template #default="scope"> 
                  <el-button link type="primary" @click="$router.push({ name: 'ContractDetail', query: { orderId: scope.row.orderId } })">详情</el-button>
                  <el-button link type="primary" v-if="scope.row.contractStatus === 1" @click="contractRevoke(scope.row.orderId)">撤销</el-button>
                  <template v-else>
                    <el-button link type="info" disabled>已撤销</el-button>
                    <!-- <el-button link type="danger" @click="contractDel(scope.row.id)">删除</el-button> -->
                  </template>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="clues-info-right">
        
        <FollowUp ref="followUp" :clueId="id"></FollowUp>
        
      </div>
    </div>
  </div>

  <el-dialog :title="lxr.isEdit?'编辑': '添加联系人'" v-model="lxr.show" width="500px" draggable>
    <el-form ref="lxrRef" :model="lxr.form" label-width="auto" label-position="left">
      <el-form-item label="姓名" prop="name" :rules="[ { required: true, message: '请输入姓名' } ]">
        <el-input v-model="lxr.form.name"></el-input>
      </el-form-item>
      <el-form-item label="职务" prop="duties" :rules="[ { required: true, message: '请输入职务' } ]">
        <el-input v-model="lxr.form.duties"></el-input>
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="lxr.form.type">
          <!-- 0无1展位2财务3市场4现场 -->
          <el-option label="无" :value="0"></el-option>
          <el-option label="展位" :value="1"></el-option>
          <el-option label="财务" :value="2"></el-option>
          <el-option label="市场" :value="3"></el-option>
          <el-option label="现场" :value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile" :rules="rules.phone">
        <el-input v-model="lxr.form.mobile"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="lxr.form.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">

        <el-input v-model="lxr.form.email"></el-input>
      </el-form-item>

      <el-form-item label="微信">
        <el-input v-model="lxr.form.wechat"></el-input>
      </el-form-item>

      <el-form-item label="在职状态" prop="status" :rules="[ { required: true, message: '请选择在职状态' } ]" >
        <el-select v-model="lxr.form.status">
          <el-option label="在职" :value="1"></el-option>
          <el-option label="离职" :value="2"></el-option>
          <el-option label="调岗" :value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="展会联系人" prop="isExhibitionContact" :rules="[ { required: true, message: '请选择展会联系人' } ]">
        <el-radio-group v-model="lxr.form.isExhibitionContact" class="ml-4">
          <el-radio :value="1">是</el-radio>
          <el-radio :value="0">否</el-radio>
        </el-radio-group>
      </el-form-item>

    </el-form>
    <template #footer>
      <el-button type="default" @click="lxr.show = false">取消</el-button>
      <el-button v-if="lxr.isEdit" type="primary" @click="()=>lxr.edit()">修改</el-button>
      <el-button v-else type="primary" @click="()=>lxr.add()">添加</el-button>
    </template>
  </el-dialog>

  <Move ref="moveRef" @callback="_getData"></Move>
  <GoodsOrderDetail ref="detailRef" />

</template>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import FollowUp from './components/FollowUp.vue'
import Move from './components/Move.vue'
import GoodsOrderDetail from '@/views/Order/components/GoodsOrderDetail.vue'
import {getData, contact, getCustomField, del, editNew, exitExhibition } from '@/api/Clues'
import { booth as boothApi, goods as goodsApi } from '@/api/Order/index'
import contractApi from '@/api/Contract'
import rules from '@/utils/rules'

const router = useRouter()
const route = useRoute()

const type = route.query.type // 1: 线索 2: 资料 订单 合同
const id = route.query.id
const exhibitionId = route.query.exhibitionId
// const authUser = ref('') //route.query.authUser

const form: any = ref({
  customField: [],
  // customFieldTrans: []
  orderPosition: [],
  orderMaterial: [],
  contract: [],
})
const customField: any = ref([])
const _getCustomField = () => {
  getCustomField().then(res => {
    if (res.code === 0) {
      customField.value = res.data
    }
  })
}

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
  // console.log(list)
  return list
})

const _getData = () => {
  getData({ id }).then((res: any) => {
    if (res.code === 0) {
      form.value = res.data
    }else {
      // console.log(res.msg)
    }
  })
}


const delClues = () => {
  ElMessageBox.confirm('确定删除？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
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
  }).catch(() => {
    console.log('cancel')
  })
}

const changeIsNew = () => {
  console.log(form.value.isNew)
  editNew({ id: id, status: form.value.isNew }).then(res => {
    if (res.code === 0) {
      ElMessage.success('修改成功')
    }else {
      ElMessage.error(res.msg)
    }
  })
}


const contactList = ()=>{
  contact.getList({ clueId: id }).then(res => {
    if (res.code === 0) {
      lxr.list = res.data
    }
  })
}

const lxrRef: any = ref(null)
const lxr: any = reactive({
  show: false,
  isEdit: false,
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
    isExhibitionContact: 1,
  },
  setAdd: ()=>{
    lxr.show = true
    lxr.isEdit = false
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
      isExhibitionContact: 1,
    }
  },
  setEdit: (d: any)=>{
    lxr.show = true
    lxr.isEdit = true
    lxr.form = d
    lxr.form.clueId = id
  },
  add: ()=>{
    lxrRef.value.validate().then((valid: any) => {
      if (!valid) {
        return false
      }
      contact.add(lxr.form).then(res => {
        if (res.code === 0) {
          ElMessage.success('添加成功')
          lxr.show = false
          contactList()
          followUp.value.getContactList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {})
  },
  edit: ()=>{
    lxrRef.value.validate().then((valid: any) => {
      if (!valid) {
        return false
      }
      contact.edit(lxr.form).then(res => {
        if (res.code === 0) {
          ElMessage.success('修改成功')
          lxr.show = false
          contactList()
          followUp.value.getContactList()
        }else {
          ElMessage.error(res.msg)
          contactList()
        }
      })
    }).catch(() => {})
  },
  del: (id: any)=>{
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      contact.del({id}).then(res => {
        if (res.code === 0) {
          ElMessage.success('删除成功')
          contactList()
          followUp.value.getContactList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    })
  }
})

const followUp: any = ref(null)
const moveRef: any = ref(null)

const exitClues = () => {
  ElMessageBox.confirm('确定退展？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    exitExhibition({ id: id }).then(res => {
      if (res.code === 0) {
        ElMessage.success('退展成功')
        setTimeout(() => {
          router.go(-1)
        }, 1000)
      }else {
        ElMessage.error(res.msg)
      }
    })
  })
}

const tab = reactive({
  activeName: 1,
  change: (name: any) => {
    tab.activeName = name
    if (name === 1) {
      _getCustomField()
      contactList()
    }
    
    _getData()
  }
})

const orderRevoke = (id: any, type: any) => {
  ElMessageBox.confirm('是否确认要撤销订单?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    let _revoke = boothApi.revoke
    if (type === 2) {
      _revoke = goodsApi.revoke
    }
    _revoke({ id }).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('撤销成功')
        _getData()
      }else {
        ElMessage.error(res.msg)
      }
      
    })
  }).catch(() => {
  })
}
const orderDel = (id: any, type: any) => {
  ElMessageBox.confirm('是否确认要删除订单?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    let _del = boothApi.del
    if (type === 2) {
      _del = goodsApi.del
    }
    _del({ id }).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('删除成功')
        _getData()
      }else {
        ElMessage.error(res.msg)
      }
      
    })
  }).catch(() => {
  })
}
const detailRef: any = ref(null)
const goodsDetail = (id: any) => {
  detailRef.value.getDetail(id)
}

const contractRevoke = (orderId: any) => {
  ElMessageBox.confirm('是否确认要撤销合同?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    contractApi.revoke({ orderId }).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('撤销成功')
        _getData()
      }else {
        ElMessage.error(res.msg)
      }
      
    })
  }).catch(() => {
  })
}
// const contractDel = (id: any, type: any) => {
//   ElMessageBox.confirm('是否确认要删除合同?', '提示', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     type: 'warning'
//   }).then(() => {
//     let _del = boothApi.del
//     if (type === 2) {
//       _del = goodsApi.del
//     }
//     _del({ id }).then((res: any) => {
//       if(res.code === 0) {
//         ElMessage.success('删除成功')
//         _getData()
//       }else {
//         ElMessage.error(res.msg)
//       }
      
//     })
//   }).catch(() => {
//   })
// }

_getData()
_getCustomField()
contactList()

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
      .el-form-item{
        margin-bottom: 0;
      }
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

</style>