<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import { org, sponsorAccount } from '@/api/user'
  import TableSearch from '@/components/TableSearch/index.vue'

  const page = reactive({
    page: 1,
    perPage: 10,
  })
  const total = ref(0)
  const searchForm = ref({})
  const searchData = ref([])
  const list: any = ref([])
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const roleId: any = ref('')

  const checkList = ref([])

  const search = (d: any) => {
    // searchForm.value = d
    // page.page = 1
    getList()
  }

  const getList = async () => {
    org.getList().then((res: any) => {
      if (res.code === 0) {
        list.value = res.data
        // roleId.value = res.data[0].id
        // getData()
      }
    })
  }
  const getData = async () => {
    sponsorAccount.getList({roleId: roleId.value}).then((res: any) => {
      if (res.code === 0) {
        tableData.value = [[]]//  res.data
      }
    })
  }


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

  watch(page, () => {
    getData()
  })
  


  getList()
  
</script>
<template>
  <div class="org-main">
    <!-- <TableSearch :data="searchData" @search="search"/> -->
    <div class="content">
      <div class="l">
        <el-tree
          style="max-width: 300px"
          default-expand-all
          :data="list"
          node-key="id"
          :props="{ children: 'child', label: 'name' }"
        >
          <template #default="{ node, data }">
            <span class="tree-item">
              <el-link class="tree-item-label" @click="" >{{ node.label }}</el-link>
              <el-button link icon="Plus" @click="addOrg(data.id)"></el-button>
              <el-button link icon="Edit" @click="editOrg(data)"></el-button>
              <el-button link icon="Delete" @click="Del(data.id)"></el-button>
            </span>
          </template>
        </el-tree>
      </div>
      <div class="r">
        <div class="s-table-operations">
          <el-button size="small" @click="handleExport">新增员工</el-button>
          <el-button size="small" @click="handleExport">导入</el-button>
          <el-button size="small" @click="handleExport">导出</el-button>
        </div>
        <div class="s-flex-auto" style="min-height: 0;">
          <el-table 
            ref="tableRef" 
            :data="tableData" 
            border 
            table-layout="fixed" 
            height="100%"
            header-row-class-name="s-table-header">
            <el-table-column prop="status" label="登录名" />
            <el-table-column prop="name" label="部门" />
            <el-table-column prop="phone" label="系统角色" min-width="120"/>
            <el-table-column prop="email" label="手机" />
            <el-table-column prop="address" label="邮箱" />
            <el-table-column prop="desc" label="密码" />
            <el-table-column prop="desc" label="添加时间" min-width="120" />
            <el-table-column prop="desc" label="登录时间" min-width="120" />
            <el-table-column label="操作" fixed="right" width="150">
              <template #default="scope">
                <el-button type="text" @click="Del(scope.row.id)">删除</el-button>
                <el-button type="text" @click="Del(scope.row.id)">删除</el-button>
                <el-button type="text" @click="Del(scope.row.id)">删除</el-button>
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
        display: none;
      }
    }
  }
</style>