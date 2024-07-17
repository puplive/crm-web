<script setup lang="ts">
import { ref } from 'vue'


const radio = ref('1')

const list: any = ref([
  { value: '1', label: '合同模板1' },
  { value: '2', label: '合同模板2' }
])

</script>
<template>
  <div class="contract-templates">
    <div style="margin-bottom: 20px;">签订合同</div>
    <div class="content">
      <div class="l list">
        <el-radio-group v-model="radio">
          <el-radio v-for="item in list" :label="item.value" :key="item.value" style="width: 100%; margin-right: 0">
            <template #default>
              <div class="item">
                <span>{{ item.label }}</span>
                <el-button v-show="radio === item.value" type="primary" size="small">使用模板</el-button>
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
    border: 1px solid #EAEEF0;
    .l{
      width: 300px;
      border-right: 1px solid #EAEEF0;
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