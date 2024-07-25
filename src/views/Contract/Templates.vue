<script setup lang="ts">
import { ref } from 'vue'
import api from '@/api/Contract'
import * as docx from 'docx'


const radio: any = ref('')
const list: any = ref([])
const getList = async () => {
    api.getList().then((res) => {
      if (res.code === 0) {
        list.value = res.data
        radio.value = res.data.length > 0? res.data[0].value : ''
        // total.value = res.data.total
      }
    })
  }
  getList()



</script>
<template>
  <div class="contract-templates">
    <div style="margin-bottom: 20px;">签订合同</div>
    <div class="content">
      <div class="l list">
        <el-radio-group v-model="radio">
          <el-radio v-for="item in list" :value="item.id" :key="item.id" style="width: 100%; margin-right: 0">
            <template #default>
              <div class="item">
                <span>{{ item.name }}</span>
                <el-button v-show="radio === item.id" type="primary" size="small">使用模板</el-button>
              </div>
            </template>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="r"></div>
    </div>
  </div>
</template>
<style scoped>
.contract-templates {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    border: 1px solid var(--el-border-color-lighter);
    .l{
      width: 300px;
      border-right: 1px solid var(--el-border-color-lighter);
      padding: 10px;
      .item{
        width: 257px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .r{
      flex: 1;

    }
    
  }
}
</style>