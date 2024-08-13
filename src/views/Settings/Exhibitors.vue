<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import api from '@/api/Exhibitor'
  import _rules from '@/utils/rules';

  const page = reactive({
    page: 1,
    perPage: 20,
  })
  const total = ref(0)
  const searchForm = ref({})
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])

  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    getList()
  }

  const getList = async () => {
    api.getList({...searchForm.value, ...page}).then((res: any) => {
      if (res.code === 0) {
        tableData.value = res.data.data
        total.value = res.data.total
      }
    })
  }

  const addForm: any = ref(null)
  const add:any = reactive({
    show: false,
    isEdit: false,
    data: {},
    add: () => {
      add.show = true
      add.isEdit = false
      add.data = {}
    },
    edit: (row: any) => {
      add.show = true
      add.isEdit = true
      add.data = row
    },
    addSub: () => {
      addForm.value.validate().then((valid: any) => {
        if(!valid) {
          return
        }
        api.add(add.data).then((res: any) => {
          if(res.code === 0) {
            ElMessage.success('新增成功')
            getList()
            add.show = false
          }else {
            ElMessage.error(res.msg)
          }
        })
      })
      
    },
    editSub: () => {
      addForm.value.validate().then((valid: any) => {
        if(!valid) {
          return
        }
        api.edit(add.data).then((res: any) => {
          if(res.code === 0) {
            ElMessage.success('编辑成功')
            getList()
            add.show = false
          }else {
            ElMessage.error(res.msg)
          }
        })
      })
    }
  })

  const Del = (id: any) => {
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      api.del({ id: id}).then((res: any) => {
        if(res.code === 0) {
          ElMessage.success('删除成功')
          getList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {
    })
  }

  const verify = (id: any, status: any) => {
    api.verify({ id: id, status: status}).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success(status === 1 ? '已通过' : '已拒绝')
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  api.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })

  getList()

  const columns_selected: any = ref([])
  const columns: any = ref([])
  const getColumns = () => {
    setTimeout(() => {
      let _l: string[] = []
      tableRef.value.columns.forEach((item: any) => {
        if(item.label){
          _l.push(item.label)
        }
      })
      columns.value = _l.join(',').split(',')
      columns_selected.value = _l.join(',').split(',')
    }, 0)
  }

  const columns_is_selected = (label: string)=>{
    if(columns_selected.value.length === 0 && columns.value.length === 0){
      return true
    }else{
      return columns_selected.value.includes(label)
    }
  }
  getColumns()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <div></div>
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button @click="add.add()">新增账号</el-button>
      <el-popover
        placement="bottom-end"
        trigger="click"
      >
        <template #reference>
          <el-button size="" link>
            <img style="width: 17px;" src="@/assets/svg/sx.svg" alt="">
          </el-button>
        </template>
        <template #default>
          <el-checkbox-group v-model="columns_selected">
              <ul>
                  <li class="s-checkbox_item" v-for="i in columns" :key="i"><el-checkbox :label="i" :value="i">{{i}}</el-checkbox></li>
              </ul>
          </el-checkbox-group>
        </template>
      </el-popover>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" 
        :data="tableData" 
        border 
        table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <!-- <el-table-column type="selection" width="42" /> -->
        <el-table-column v-if="columns_is_selected('ID')" prop="id" label="ID" min-width="60" />
        <el-table-column v-if="columns_is_selected('用户名')" prop="account" label="用户名" min-width="120" />
        <el-table-column v-if="columns_is_selected('注册人')" prop="userName" label="注册人" />
        <el-table-column v-if="columns_is_selected('手机')" prop="phone" label="手机" min-width="120" />
        <el-table-column v-if="columns_is_selected('邮箱')" prop="email" label="邮箱" min-width="120"/>
        <el-table-column v-if="columns_is_selected('密码')" prop="password" label="密码" min-width="120" />
        <el-table-column v-if="columns_is_selected('添加时间')" prop="creatTime" label="添加时间" min-width="120" />
        <el-table-column v-if="columns_is_selected('登录时间')" prop="loginTime" label="登录时间" min-width="120" />
        <el-table-column v-if="columns_is_selected('状态')" prop="status" label="状态">
          <template #default="scope">
            <!-- 状态，0待审核，1通过，2拒绝 -->
            {{ {0: '待审核', 1: '通过', 2: '拒绝' }[scope.row.status as number] }}
          </template>
        </el-table-column>
        <el-table-column v-if="columns_is_selected('参展次数')" prop="num" label="参展次数" width="100" />
        <el-table-column v-if="columns_is_selected('操作')" fixed="right" label="操作" width="270">
          <template #default="scope">
            <el-button link type="primary" @click="$router.push({name:'ExhibitorsDetail',query:{id:scope.row.id}})">详情</el-button>
            <el-button link type="primary" @click="add.edit(scope.row)">编辑</el-button>
            <template v-if="scope.row.status === 0">
              <el-button link type="primary" @click="verify(scope.row.id, 1)">审核通过</el-button>
              <el-button link type="danger" @click="verify(scope.row.id, 2)">不通过</el-button>
            </template>
            <el-button link type="danger" @click="Del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" 
        :page-sizes="[10, 20, 50, 100]" 
        :total="total"
        v-model:current-page="page.page" 
        v-model:page-size="page.perPage" 
        @change="getList" />
    </div>
  </div>

  <el-dialog :title="add.isEdit ? '编辑' : '新增'" v-model="add.show" width="500px" draggable>
    <el-form :model="add.data" ref="addForm" label-width="auto" label-position="left">
      <el-form-item label="用户名" prop="account" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input v-model="add.data.account" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="注册人" prop="userName" :rules="[{ required: true, message: '请输入注册人', trigger: 'blur' }]">
        <el-input v-model="add.data.userName" placeholder="请输入注册人"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone" :rules=_rules.phone>
        <el-input v-model="add.data.phone" placeholder="请输入手机"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :rules=_rules.email>
        <el-input v-model="add.data.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
        <el-input v-model="add.data.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button  @click="add.show = false">取消</el-button>
      <el-button type="primary" @click="add.isEdit ? add.editSub() : add.addSub()">确定</el-button>
    </template>
  </el-dialog>
</template>