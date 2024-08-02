<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import { org, sponsorAccount, role } from '@/api/user'
  // import TableSearch from '@/components/TableSearch/index.vue'

  const page = reactive({
    page: 1,
    perPage: 10,
  })
  const total = ref(0)
  const searchForm = ref({})
  const searchData = ref([])
  const departmentList: any = ref([])
  const roleList: any = ref([])
  const accountList: any = ref([])
  const tableRef: any = ref(null)
  // const roleId: any = ref('')
  const departmentId: any = ref(0)

  const checkList = ref([])

  const search = (d: any) => {
    // searchForm.value = d
    // page.page = 1
    getList()
  }

  const getList = () => {
    org.getList().then((res: any) => {
      if (res.code === 0) {
        departmentList.value = res.data
        departmentId.value = res.data[0].id
        // getData()
      }
    })
  }
  const getData = () => {
    sponsorAccount.getList({departmentId: departmentId.value, ...page }).then((res: any) => {
      if (res.code === 0) {
        accountList.value = res.data.data
        total.value = res.data.total
      }
    })
  }

  role.getList().then((res: any) => {
    if (res.code === 0) {
      roleList.value = res.data
    }
  })


  const Del = (id: any) => {
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      org.del({ id: id}).then((res: any) => {
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
  const addOrg = (id: any) => {
    ElMessageBox.prompt('部门名称', '新增部门', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      // type: 'warning'
    }).then(({value}: any) => {
      console.log(value)
      org.add({ name: value, pid: id}).then((res: any) => {
        if(res.code === 0) {
          ElMessage.success('新增成功')
          getList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {
    })
  }

  const editOrg = (d: any) => {
    ElMessageBox.prompt('部门名称', '编辑部门', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputValue: d.name,
      // type: 'warning'
    }).then(({value}: any) => {
      console.log(value)
      org.edit({ id: d.id, name: value}).then((res: any) => {
        if(res.code === 0) {
          ElMessage.success('编辑成功')
          getList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {
    })
  }


  const delAccount = (id: any) => {
    ElMessageBox.confirm('确定删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      sponsorAccount.del({ id: id}).then((res: any) => {
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

  const setStatus = (id: any, status: any) => {
    ElMessageBox.confirm(`确定${status === 1 ? '启用' : '停用'}该账号？`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      sponsorAccount.setStatus({ id: id, status: status}).then((res: any) => {
        if(res.code === 0) {
          ElMessage.success(`账号${status === 1 ? '启用' : '停用'}成功`)
          getData()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }).catch(() => {
    })
  }

  const addAccount: any = reactive({
    show: false,
    isEdit: false,
    data: {
      account: '',
      password: '',
      departmentId: '',
      roleId: '',
      phone: '',
      email: '',
    },
    set: (d?: any) => {
      // console.log(d)
      
      addAccount.show = true
      if(d) {
        addAccount.isEdit = true
        addAccount.data= {
          id: d.id,
          account: d.account,
          password: d.password,
          departmentId: getDepartmentIds(d.departmentId),
          roleId: d.roleId,
          phone: d.phone,
          email: d.email
        }
      }else{
        addAccount.isEdit = false
        addAccount.data= {
          account: '',
          password: '',
          departmentId: '',
          roleId: '',
          phone: '',
          email: ''
        }
      }
      
    },
    sub: () => {
      let _api = addAccount.isEdit? sponsorAccount.edit : sponsorAccount.add
      let _data = {...addAccount.data }
      _data.departmentId = _data.departmentId[_data.departmentId.length - 1]
      _api(_data).then((res: any) => {
        if(res.code === 0) {
          ElMessage.success(addAccount.isEdit?'修改成功':'新增成功')
          addAccount.show = false
          getData()
        }else {
          ElMessage.error(res.msg)
        }
      })
    }
  })

  const getDepartmentIds = (id: any) => {
    let ids:any = [],
        list = departmentList.value;
    let _a: any = []
    const rec = (l: any, s: any) => {
      // s++
      for (let i  = 0; i  < l.length; i ++) {
        let _d = l[i]
        let _id = l[i].id
        ids[s]=_id
        if(id === _id) {
          _a = ids.slice(0, s+1)
          return ids
        }
        if(_d.child.length > 0) {
          rec(_d.child, s+1)
        }else{
          
        }
      }
    } 

    rec(list, 0)
    return _a
  }


  watch(departmentId, () => {
    getData()
  })
  // getData()


  getList()
  
</script>
<template>
  <div class="org-main">
    <!-- <TableSearch :data="searchData" @search="search"/> -->
    <div class="content">
      <div class="l">
        <div style="margin-bottom: 20px;">
          <el-button type="primary" icon="Plus" @click="addOrg(0)">新增部门</el-button>
        </div>
        <el-tree
          style="max-width: 300px"
          default-expand-all
          :data="departmentList"
          node-key="id"
          :props="{ children: 'child', label: 'name' }"
        >
          <template #default="{ node, data }">
            <span class="tree-item">
              <el-link class="tree-item-label" @click="departmentId = data.id" >{{ node.label }}</el-link>
              <el-button link icon="Plus" @click="addOrg(data.id)"></el-button>
              <el-button link icon="Edit" @click="editOrg(data)"></el-button>
              <el-button link icon="Delete" @click="Del(data.id)"></el-button>
            </span>
          </template>
        </el-tree>
      </div>
      <div class="r">
        <div class="s-table-operations">
          <el-button size="small" @click="addAccount.set()">新增员工</el-button>
          <!-- <el-button size="small" @click="handleExport">导入</el-button>
          <el-button size="small" @click="handleExport">导出</el-button> -->
        </div>
        <div class="s-flex-auto" style="min-height: 0;">
          <el-table 
            ref="tableRef" 
            :data="accountList" 
            border 
            table-layout="fixed" 
            height="100%"
            header-row-class-name="s-table-header">
            <el-table-column prop="account" label="登录名" />
            <el-table-column prop="department" label="部门" />
            <el-table-column prop="role" label="系统角色" min-width="120"/>
            <el-table-column prop="phone" label="手机" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="password" label="密码" />
            <el-table-column prop="creatTime" label="添加时间" min-width="120" />
            <el-table-column prop="" label="登录时间" min-width="120" />
            <el-table-column label="操作" fixed="right" width="150">
              <template #default="scope">
                <el-button link type="primary" @click="addAccount.set(scope.row)">编辑</el-button>
                <el-button link type="primary" @click="setStatus(scope.row.id, scope.row.status === 1 ? 0 : 1)">{{ scope.row.status === 1 ? '停用' : '启用' }}</el-button>
                <el-button link type="danger" @click="delAccount(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="s-table-pagination">
          <el-pagination layout="total, sizes, prev, pager, next" 
            :page-sizes="[10, 20, 50]" 
            :total="total"
            v-model:current-page="page.page" 
            v-model:page-size="page.perPage" 
            @change="getList" />
        </div>
      </div>
    </div>
  </div>

  <el-dialog title="新增员工" v-model="addAccount.show" width="500" draggable>
    <el-form :model="addAccount.data" label-width="auto" label-position="left">
      <el-form-item label="登录名">
        <el-input v-model="addAccount.data.account" placeholder="请输入登录名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="addAccount.data.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item label="部门">
        <el-cascader 
          v-model="addAccount.data.departmentId" 
          :options="departmentList" 
          :props="{ value: 'id', label: 'name', children: 'child', checkStrictly: true, }"
          style="width: 100%;">
        </el-cascader>

      </el-form-item>
      <el-form-item label="系统角色">
        <el-select v-model="addAccount.data.roleId">
          <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="addAccount.data.phone" placeholder="请输入手机"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="addAccount.data.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="addAccount.show = false">取消</el-button>
      <el-button type="primary" @click="addAccount.sub">确定</el-button>
    </template>
  </el-dialog>
</template>
<style scoped>
  .org-main {
    display: flex;
    flex-direction: column;
    height: 100%;
    .content{
      display: flex;
    
      .l{
        width: 300px;
        /* border: 1px solid var(--el-border-color-lighter); */
        margin-right: 20px;
        .tree-item{
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          .tree-item-label{
            margin-right: 20px;
          }
          .el-button{
            display: none;
            margin-left: 5px;
          }
          &:hover{
            .el-button{
              display: block;
            }
          }
        }

      }
      .r{
        flex: 1;
        min-width: 0;
      }
    }
  }
</style>