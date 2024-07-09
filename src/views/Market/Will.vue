<!-- 意向客户 -->
<script lang="ts" setup>
  import { ref } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'

  const tableRef = ref(null)

  // const to = () => {
  //   this.&router.push('/market/clues/add')
  // }
  const search = (d) => {
    console.log(d)
  }
  const searchData = ref([
    { label: '企业名称', key: '1', type: 'input', value: '' },
    { label: '2', key: '2', type: 'select', value: '', options: [{ label: '选项1', value: '1' }, { label: '选项2', value: '2' }] },
    { label: '3', key: '3', type: 'date', value: '' },
  ])

  
  // 转移
  const divertForm = ref({})
  const divertShow = ref(false)

  const divertSet = () => {
    let ids = tableRef.value.getSelectionRows().map((item) => item.id)
    if (ids.length === 0) {
      ElMessage.warning('请选择要转移的客户')
      return
    }
    divertForm.value.ids =  ids 
    divertShow.value = true
  }
  const divertSub = () => {
    console.log(divertForm.value)
    
    divertShow.value = false
  }

  // 移除意向客户
  const removeWillShow = ref(false)
  const removeWillData = ref({})
  const removeWill = (row) => {    
    console.log(row)
    removeWillData.value = row
    removeWillShow.value = true
  }
  const removeWillSub = () => {
    console.log(removeWillData.value)
    removeWillShow.value = false
  }
  
  const tableData = [
    {
      id: 1,
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 2,
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 3,
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 4,
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 5,
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
</script>
<template>
  <div>
    <TableSearch :data="searchData" @search="search"/>
    <div class="s-table-operations">
      <el-button size="small" @click="divertSet">转移</el-button>
      <el-button size="small">导出</el-button>
    </div>
    <el-table ref="tableRef" :data="tableData" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="removeWill(scope.row)">
            移除意向
          </el-button>
          <el-button link type="primary" size="small" @click="divertSet(scope.row)">
            预定展示位
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50]" :total="1000" />
    </div>
  </div>


  <el-dialog v-model="divertShow" title="" width="500" draggable>
    <el-form :model="divertForm" label-width="auto">
      <el-form-item label="">
        <span style="font-size: 16px; font-weight: bold;">是否将选中的销售线索转移？</span>
      </el-form-item>
      <el-form-item label="销售线索所有人">
        <el-select v-model="divertForm.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="divertShow = false">取消</el-button>
        <el-button type="primary" @click="divertSub">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="removeWillShow"
    title=""
    width="500"
    draggable
  >
    <span>您选择的内容一旦删除将无法恢复！您确定要删除吗？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="removeWillShow = false">取消</el-button>
        <el-button type="primary" @click="removeWillSub">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>