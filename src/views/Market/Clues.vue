<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import api from '@/api/Clues'
  import {exhibitionList} from '@/api/Exhibition'
  import {getSponsorUser} from '@/api/user'

  const page = reactive({
    page: 1,
    perPage: 10,
  })
  const total = ref(0)
  const searchForm = ref({})
  const tableData = ref([])
  const tableRef: any = ref(null)
  const searchData = ref([])
  const exhibitionData: any = ref([])


  const search = (d: any) => {
    searchForm.value = d
    page.page = 1
    // console.log({...page, ...searchForm.value})
    getList()
  }

  const getList = async () => {
    api.getList({status: 1, ...page, ...searchForm.value}).then((res) => {
      if (res.code === 0) {
        tableData.value = res.data.data
        total.value = res.data.total
      }
    })
  }

  const willForm: any = ref({})
  const willShow = ref(false)
  const willFormRef: any = ref(null)

  const willSet = (row: any) => {    
    willForm.value.id = row.id
    willShow.value = true
  }
  const willSub = () => {
    willFormRef.value.validate((valid: boolean) => {
      if (!valid) {
        return
      }
      api.changeIntention(willForm.value).then((res) => {
        if(res.code === 0) {
          ElMessage.success('转为意向成功')
          getList()
          willShow.value = false
        }else {
          ElMessage.error(res.msg)
        }
      })
    })
  }

  const GetClues = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要领取的线索')
      return
    }
    api.getClues({ id: ids}).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('领取成功')
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  const Del = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要删除的线索')
      return
    }
    ElMessageBox.confirm('确定删除所选线索？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      api.del({ id: ids}).then((res) => {
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

  const moveForm: any = ref({})
  const moveShow = ref(false)
  const moveFormRef: any = ref(null)
  const SponsorUser: any = ref([])
  const Move = () => {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要转移的线索')
      return
    }
    moveForm.value.id = ids
    moveShow.value = true
    
  }
  const MoveSub = () => {
    moveFormRef.value.validate((valid: boolean) => {
      if (!valid) {
        return
      }
      
      api.changeUser(moveForm.value).then((res) => {
        if(res.code === 0) {
          ElMessage.success('转移成功')
          moveShow.value = false
          getList()
        }else {
          ElMessage.error(res.msg)
        }
      })
    })
  }

  const MoveShare = () => { 
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择需要移至公海的线索')
      return
    }
    api.changePublic({ id: ids}).then((res) => {
      if(res.code === 0) {
        ElMessage.success('移至公海成功')
        getList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  const Import = () => {
    console.log('import')
  }

  const Export = () => {
    console.log('export')
  }

  api.getSearchField().then((res) => {
    if(res.code === 0) {
      searchData.value = res.data
    }
  })
  exhibitionList().then((res) => {
    if(res.code === 0) {
      exhibitionData.value = res.data
    }
  })
  getSponsorUser().then((res) => {
    if(res.code === 0) {
      SponsorUser.value = res.data
    }
  })

  getList()


  // watch(() => page.perPage, (newVal, oldVal) => {
  //   console.log(newVal, oldVal)
  //   getList()
  // })
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%;">
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button>
      <el-button size="small" @click="Import">导入</el-button>
      <el-button size="small" @click="Export">导出</el-button>
      <el-button size="small" @click="Move">转移给他人</el-button>
      <!-- <el-button size="small" @click="GetClues">领取</el-button> -->
      <el-button size="small" @click="MoveShare">移至公海</el-button>
      <el-button size="small" @click="Del">删除</el-button>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" 
        height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column prop="companyName" label="公司名称" width="180" />
        <el-table-column prop="exhibitionContact" label="联系方式" width="180" />
        <el-table-column prop="duties" label="职务" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="recordTime" label="记录时间" width="180" />
        <el-table-column prop="recordText" label="记录内容" />
        <el-table-column prop="authUser" label="授权人" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="willSet(scope.row)">
              转为意向客户
            </el-button>
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


  <el-dialog v-model="willShow" title="转为意向客户" width="500" draggable>
    <el-form ref="willFormRef" :model="willForm" label-width="auto">
      <!-- <el-form-item label=" " style="margin-bottom: 0;">
        <span style="font-size: 16px; font-weight: bold;">{{ willForm.name }}</span>
      </el-form-item>
      <el-form-item label=" ">
        <el-radio-group v-model="willForm.type">
          <el-radio value="1">新增账号</el-radio>
          <el-radio value="2">关联账号</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户名" >
        <el-input v-model="willForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="注册人" >
        <el-input v-model="willForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机" >
        <el-input v-model="willForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" >
        <el-input v-model="willForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" >
        <el-input v-model="willForm.name" autocomplete="off" />
      </el-form-item> -->
      <el-form-item label="项目" prop="exhibitionId" :rules="[ { required: true, message: '请选择项目' } ]">
        <el-select v-model="willForm.exhibitionId" placeholder="">
          <el-option v-for="item in exhibitionData" :key="item.id" :label="item.exhibitionName" :value="item.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="willShow = false">取消</el-button>
        <el-button type="primary" @click="willSub">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="moveShow" title="转移销售线索" width="500" draggable>
    <el-form ref="moveFormRef" :model="moveForm" label-width="auto">
      <el-form-item label="">是否将选中的销售线索转移？</el-form-item>
      <el-form-item label="销售线索所有人" prop="userId" :rules="[ { required: true, message: '请选择销售线索所有人' } ]">
        <el-select v-model="moveForm.userId" placeholder="">
          <el-option v-for="item in SponsorUser" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="moveShow = false">取消</el-button>
        <el-button type="primary" @click="MoveSub">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>