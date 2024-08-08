<script lang="ts" setup>
  import { ref, watch, onMounted } from 'vue'
  import { exhibitionList } from '@/api/Exhibition'
  import { userStore } from "@/stores/user";

  const _store = userStore()
  const exhibitionInfo: any = ref(_store.EXHIBITION_INFO)
  const exhibitionData: any = ref([])
  watch(() => _store.EXHIBITION_INFO,(val:any, oldVal)=>{
    if(val.id!== oldVal.id){
      exhibitionInfo.value = val
    }
  }, {deep: true})
  
  const handleCommand = (command: any) => {
    _store.SET_EXHIBITION_INFO(command)
    // emit('callback')
  }

  onMounted(() => {
    exhibitionList().then((res) => {
      if (res.code === 0) {
        exhibitionData.value = [{ exhibitionName: '全部', id: '', status: 1 }, ...res.data]
      }
    })
  })
  // const emit = defineEmits(['callback'])
  
</script>
<template>
  <el-dropdown
        @command="handleCommand" 
        max-height="300px"
        placement="bottom-start">
        <el-button link style="font-size: 16px;">
          {{ exhibitionInfo.exhibitionName }}<el-icon class="el-icon--right" style="color: var(--el-color-primary)"><Document /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <template  v-for="(item, i) in exhibitionData" 
              :key="i" >
              <el-dropdown-item
                :command="item">
                {{ item.exhibitionName}}
              </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>
<style scoped>
  .el-tooltip__trigger { outline: none !important; }
</style>