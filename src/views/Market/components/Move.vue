<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { getSponsorUser } from '@/api/user'
  import { changeUser } from '@/api/Clues'

  // const props = defineProps(['clueId'])
  
  const moveForm: any = ref({})
  const moveShow = ref(false)
  const moveFormRef: any = ref(null)
  const SponsorUser: any = ref([])

  const setMove = (ids: any) => {
    // let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    // if (ids.length === 0) {
    //   ElMessage.warning('请选择需要转移的线索')
    //   return
    // }
    moveForm.value.id = ids
    moveShow.value = true

  }
  const MoveSub = () => {
    moveFormRef.value.validate((valid: boolean) => {
      if (!valid) {
        return
      }

      changeUser(moveForm.value).then((res) => {
        if (res.code === 0) {
          ElMessage.success('转移成功')
          moveShow.value = false
          emit('callback')
        } else {
          ElMessage.error(res.msg)
        }
      })
    })
  }

  getSponsorUser().then((res) => {
    if(res.code === 0) {
      SponsorUser.value = res.data
    }
  })

  const emit = defineEmits(['callback'])
  defineExpose({
    setMove,
  })
</script>
<template>
  <el-dialog v-model="moveShow" title="转移销售线索" width="500" draggable>
    <el-form ref="moveFormRef" :model="moveForm" label-width="auto" label-position="left">
      <el-form-item label="">是否将选中的销售线索转移？</el-form-item>
      <el-form-item label="销售线索所有人" prop="userId" :rules="[{ required: true, message: '请选择销售线索所有人' }]">
        <el-select v-model="moveForm.userId" placeholder="" filterable>
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