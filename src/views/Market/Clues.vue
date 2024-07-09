<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'

  // const to = () => {
  //   this.&router.push('/market/clues/add')
  // }
  const search = (d: any) => {
    console.log(d)
  }
  const searchData = ref([
    { label: '企业名称', key: '1', type: 'input', value: '' },
    { label: '2', key: '2', type: 'select', value: '', options: [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' }] },
    { label: '3', key: '3', type: 'date', value: '' },
  ])

  const tableData = [
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
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const willForm: any = ref({})
  const willShow = ref(false)

  const willSet = (row: any) => {    
    console.log(row)
    willForm.value = row
    willShow.value = true
  }
  const willSub = () => {
    console.log(willForm.value)
    willShow.value = false
  }
  
</script>
<template>
  <div>
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button size="small" @click="$router.push('/market/clues/add')">新增</el-button>
      <el-button size="small">导入</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small">转移</el-button>
      <el-button size="small">领取</el-button>
      <el-button size="small">移至公海</el-button>
      <el-button size="small">删除</el-button>
    </div>
    <el-table :data="tableData" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="willSet(scope.row)">
            转为意向
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50]" :total="1000" />
    </div>
  </div>


  <el-dialog v-model="willShow" title="转为意向" width="500" draggable>
    <el-form :model="willForm" label-width="auto">
      <el-form-item label=" " style="margin-bottom: 0;">
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
      </el-form-item>
      <el-form-item label="项目">
        <el-select v-model="willForm.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
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
</template>