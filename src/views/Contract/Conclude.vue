<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import vTemplate from './components/Template.vue'
  import { useRoute, useRouter } from 'vue-router';
  // import VueHtml2pdf from 'vue-html2pdf'

  const route = useRoute();
  const orderId = route.query.orderId;
  const templateId = route.query.id

  const contractRef:any = ref(null);
  onMounted(() => {
    contractRef.value.setData(orderId)
  })
  const createContract = () => {
    contractRef.value.createContract(templateId)
  }
  // const html2Pdf:any = ref(null);


</script>
<template>
    <div class="conclude">
      <div class="p1">
        <el-button type="primary" @click="createContract">签订合同</el-button>
        <el-button type="primary" @click="">打印</el-button>
        <el-button type="primary" @click="">导出</el-button>
        <el-button type="primary" @click="">编辑</el-button>
        <el-button type="primary" @click="">保存</el-button>
        <el-button type="" @click="">取消</el-button>
      </div>
      <div class="p2">
        <el-scrollbar>
          <!-- <vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="hee hee"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="800px"
    
            @progress="onProgress($event)"
            @hasStartedGeneration="hasStartedGeneration()"
            @hasGenerated="hasGenerated($event)"
            ref="html2Pdf"
          >
            <section slot="pdf-content"> -->
              <vTemplate ref="contractRef"></vTemplate>
            <!-- </section>
          </vue-html2pdf> -->
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