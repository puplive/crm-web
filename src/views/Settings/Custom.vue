<template>
  <el-tabs type="border-card">

    <el-tab-pane label="销售客户">
      <div class="s-table-operations">
        <el-button size="small" icon="Plus" @click="showAddForm">线索字段</el-button>
      </div>
      <el-table :data="tableData" row-key="id" border default-expand-all show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column prop="name" label="名称">
          <template #default="scope: any">
            <el-button v-if="scope.row.type != 1 && scope.row.type != 2" type="primary" link
              @click="$router.push({ path: '/settings/custom/field', query: { id: scope.row.id, title: scope.row.name } })">{{
                scope.row.name }}</el-button>
            <template v-else>{{ scope.row.name }}</template>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型">
          <template #default="scope: any">
            {{ (() => {
              let d = types[scope.row.type]
              return d ? d.label : ''
            })()
            }}
          </template>
        </el-table-column>
        <el-table-column prop="isRequired" label="必填">
          <template #default="scope: any">
            <el-checkbox v-model="scope.row.isRequired" :true-value="1" :false-value="0"
              @change="changeRequired(scope.row, scope.$index)"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="isEnable" label="启用">
          <template #default="scope">
            <el-checkbox v-model="scope.row.isEnable" :true-value="1" :false-value="0"
              @change="changeEnable(scope.row, scope.$index)"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button link type="primary" @click="showEditForm(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <!-- <el-tab-pane label="联系人"></el-tab-pane>
    <el-tab-pane label="会员"></el-tab-pane> -->
  </el-tabs>

  <el-dialog :title="addformTitle" v-model="addformShow" style="width: 400px;">
    <el-form ref="addformRef" :model="addform" label-width="100px">
      <el-form-item label="类型" prop="type">
        <el-select v-model="addform.type">
          <el-option v-for="item in types" :key="item.type" :label="item.label" :value="item.type" />
        </el-select>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="addform.name" />
      </el-form-item>
      <el-form-item label="提示" prop="tips">
        <el-input v-model="addform.tips" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="addformShow = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </template>
  </el-dialog>

</template>
<script lang="ts" setup>
import { ref } from "vue";
import api from "@/api/Custom";

const types: any = api.customFieldTypes
const tableData: any = ref([])
const addformRef: any = ref(null)
const addformShow: any = ref(false)
const addformTitle: any = ref('销售线索')
const addform: any = ref({
  id: '',
  name: '',
  type: '',
  tips: '',
})

const showAddForm = () => {
  addformShow.value = true
  // addformTitle.value = '销售线索'
  addform.value = {
    id: '',
    name: '',
    type: '',
    tips: '',
  }
}
const showEditForm = (row: any) => {
  addformShow.value = true
  // addformTitle.value = '销售线索'
  addform.value.id = row.id
  addform.value.name = row.name
  addform.value.type = row.type
  addform.value.tips = row.tips
}

const add = () => {
  if (addform.value.id) {
    api.edit(addform.value).then(res => {
      if (res.code === 0) {
        ElMessage.success('编辑成功')
        addformShow.value = false
        getTableData()
      } else {
        ElMessage.error(res.msg)
      }
    })
  } else {
    let { id, ...d } = addform.value
    api.add(d).then(res => {
      if (res.code === 0) {
        ElMessage.success('添加成功')
        addformShow.value = false
        getTableData()
      } else {
        ElMessage.error(res.msg)
      }
    })
  }
}

const del = (row: any) => {
  ElMessageBox.confirm(
    '此操作将永久删除该信息, 是否继续?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    console.log(row)
    api.customFieldDel({id:row.id}).then(res => {
      if (res.code === 0) {
        ElMessage.success('删除成功')
        getTableData()
      } else {
        ElMessage.error(res.msg)
      }
    })
  }).catch(() => {

  })
}

const getTableData = async () => {
  api.getList().then(res => {
    if (res.code === 0) {
      tableData.value = res.data
    }
  })
}

const changeRequired = (row: any, index: number) => {
  api.setRequired({
    id: row.id,
    status: row.isRequired
  }).then(res => {
    if (res.code === 0) {
      ElMessage.success('修改成功')
    } else {
      ElMessage.error(res.msg)
      tableData.value[index].isRequired = row.isRequired === 0 ? 1 : 0
    }
  })
}

const changeEnable = (row: any, index: number) => {
  api.setEnable({
    id: row.id,
    status: row.isEnable
  }).then(res => {
    if (res.code === 0) {
      ElMessage.success('修改成功')
    } else {
      ElMessage.error(res.msg)
      tableData.value[index].isEnable = row.isEnable === 0 ? 1 : 0
    }
  })
}


getTableData()

</script>