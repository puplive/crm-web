<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import vTemplate from './components/Template.vue'
  import { useRoute, useRouter } from 'vue-router';
  import { htmlToPDF, goPrint } from '@/utils/html2pdf'
  // import htmlToPdfmake  from '@/utils/htmlToPdfmake'
  const route = useRoute();
  const router = useRouter();

  const isUpdate = route.query.isUpdate
  // import VueHtml2pdf from 'vue-html2pdf'
  const isEdit = ref(false)
  
  const orderId = route.query.orderId;
  const templateId = route.query.id
  const pageName = route.name
  // console.log(route)
  const contractRef:any = ref(null);

  // if(isUpdate == '1'){
  //   isEdit.value = true
  // }
  
  const createContract = () => {
    contractRef.value.createContract(templateId, ()=>{ setTimeout(() => { router.go(-2) }, 2000) })
  }
  const printContract = () => {
    contractRef.value.printContract()
  }
  const exportContract = () => {
    contractRef.value.exportContract()
  }
  const edit = () => {
    contractRef.value.editContract(templateId)
    // edit(orderId, contractRef.value.getData())
  }
  // const html2Pdf:any = ref(null);

  onMounted(() => {
    if(pageName !== 'ContractTemplatesDetail'){
      contractRef.value.setData(orderId)
    }
  })
</script>
<template>
    <div class="conclude">
        <div class="p1" v-if="pageName === 'ContractTemplatesDetail'">
          <span style="margin-right: 20px;">合同模板详情</span>
          <el-button type="" @click="$router.back()">返回</el-button>
        </div>
        <div class="p1" v-else-if="pageName === 'ContractDetail'">
          <span style="margin-right: 20px;">合同详情</span>
          <el-button type="" @click="$router.back()">返回</el-button>
        </div>
        <div class="p1" v-else >
          <template v-if="!isEdit">
            <el-button v-if="isUpdate != '1'" type="primary" @click="createContract">签订合同</el-button>
            <!-- <el-button type="primary" @click="() => htmlToPdfmake.pdf.download()">打印</el-button> -->
            <el-button type="primary" @click="() => htmlToPDF('pdf-content','test pdf')">导出</el-button>
            <el-button type="primary" @click="isEdit = true">编辑</el-button>
            <el-button type="" @click="$router.back()">取消</el-button>
          </template>
          <template v-else>
            <el-button type="primary" @click="edit">保存</el-button>
            <el-button type="" @click="isEdit = false">取消</el-button>
          </template>
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
              <div id="pdf-content">
              <vTemplate ref="contractRef" v-model:isEdit="isEdit"></vTemplate>
              </div>
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