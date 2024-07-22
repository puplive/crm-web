<template>
  <div class="">
    <div class="s-top_bar" style="margin-bottom: 10px;">
      <span style="margin-right: 20px;">{{ title }}</span>
      <el-button type="" @click="$router.go(-1)">返回</el-button>
    </div>

    <div class="s-table-operations">
      <el-button size="small" icon="Plus" @click="showAddForm({})">新增</el-button>
    </div>
    <el-table :data="tableData" row-key="id" border :tree-props="{ children: 'child' }" default-expand-all show-overflow-tooltip
        header-row-class-name="s-table-header">
      <el-table-column prop="name" label="名称" />
      <el-table-column label="操作" width="180px">
        <template #default="scope">
          <el-button link type="primary" @click="showAddForm(scope.row)">新增</el-button>
          <el-button link type="primary" @click="showEditForm(scope.row)">编辑</el-button>
          <el-button link type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog :title="addformTitle" v-model="addformShow" style="width: 400px;">
    <el-form ref="addformRef" :model="addform" label-width="atuo">
      <el-form-item label="" prop="name">
        <el-input v-model="addform.name" />
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
import { useRoute, useRouter } from "vue-router";

const router: any = useRouter()
const route: any = useRoute()
const title = route.query.title
const fieldId = route.query.id


// const types: any = api.types
const tableData: any = ref([])
const addformRef: any = ref(null)
const addformShow: any = ref(false)
const addformTitle: any = ref('输入名称')
const isEdit = ref(false)
const addform: any = ref({
  id: '',
  name: '',
  fieldId: fieldId,
  pid: '',
})

const showAddForm = (row: any) => {
  isEdit.value = false
  addformShow.value = true
  // addformTitle.value = '销售线索'
  addform.value.id = row.id
  addform.value.name = ''
  addform.value.pid = row.id
}
const showEditForm = (row: any) => {
  isEdit.value = true
  addformShow.value = true
  // addformTitle.value = '销售线索'
  addform.value.id = row.id
  addform.value.name = row.name
}

const add = () => {
  if (isEdit.value) {
    api.editChild({
      name: addform.value.name,
      id: addform.value.id
    }).then(res => {
      if (res.code === 0) {
        ElMessage.success('编辑成功')
        addformShow.value = false
        getTableData()
      } else {
        ElMessage.error(res.msg)
      }
    })
  } else {
    api.addChild({
      fieldId: addform.value.fieldId,
      name: addform.value.name,
      pid: addform.value.id
    }).then(res => {
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
    api.del({ id: row.id }).then(res => {
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
  api.getChild({ fieldId }).then(res => {
    if (res.code === 0) {
      tableData.value = res.data
    }
  })
}



getTableData()

</script>valueOfvalueOf