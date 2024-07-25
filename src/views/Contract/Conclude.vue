<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import vTemplate from './components/Template.vue'
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const orderId = route.query.orderId;

  const contractRef:any = ref(null);
  onMounted(() => {
    contractRef.value.setData(orderId)
  })

</script>
<template>
    <div class="conclude">
      <div class="p1">
        <el-button type="primary" @click="">打印</el-button>
        <el-button type="primary" @click="">导出</el-button>
        <el-button type="primary" @click="">编辑</el-button>
        <el-button type="primary" @click="">保存</el-button>
        <el-button type="" @click="">取消</el-button>
      </div>
      <div class="p2">
        <el-scrollbar>
        <vTemplate ref="contractRef"></vTemplate>
        </el-scrollbar>
      </div>
    </div>
</template>
<style scoped>
.conclude{
  display: flex;
  flex-direction: column;
  height: 100%;
  .p1{
    margin-bottom: 10px;
  }
  .p2{
    flex: 1;
    min-height: 0;
    border: 1px solid var(--el-border-color-lighter);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
}
</style>