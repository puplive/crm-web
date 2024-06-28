<!-- 销售线索列表 -->
<script setup>
  import { ref } from 'vue'
  import TableForm from '@/components/TableForm/TableForm.vue'

  const handleClick = () => {
    console.log('click')
  }
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
</script>
<template>
  <div>
    <TableForm />
    <div class="s-table-operations">
      <el-button size="small">新增</el-button>
      <el-button size="small">导入</el-button>
      <el-button size="small">导出</el-button>
    </div>
    <el-table :data="tableData" border table-layout="fixed" max-height="300" header-row-class-name="s-table-header">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            Detail
          </el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50]" :total="1000" />
    </div>
  </div>
</template>