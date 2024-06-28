<template>
  <el-tabs type="border-card">
    
    <el-tab-pane label="销售客户">
      <div class="s-table-operations">
        <el-button size="small" :icon="Plus">线索字段</el-button>
      </div>
      <el-table
        :data="tableData"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="name" label="类型"/>
        <el-table-column prop="name" label="必填">
          <template #default="scope">
            <el-checkbox v-model="checked2">Not disabled</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="启用">
          <template #default="scope">
            <el-checkbox v-model="checked2">Not disabled</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作">
          <template #default="scope">
            <el-button link size="mini" type="primary">添加</el-button>
            <el-button link size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="联系人">Config</el-tab-pane>
    <el-tab-pane label="会员">Role</el-tab-pane>
  </el-tabs>
  
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { Plus } from '@element-plus/icons-vue'
  const checked2 = ref(true)
  const tableData = [
    {
      id: 3,
      date: '2016-05-01',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    },
    {
      id: 4,
      date: '2016-05-03',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
</script>