<script setup lang="ts">
import { ref } from 'vue'
import api from '@/api/Contract'
import vTemplate from './components/Template.vue'
import { useRouter, useRoute } from 'vue-router'
// import * as docx from 'docx'

const router = useRouter()
const route = useRoute()


const radio: any = ref('')
const list: any = ref([])
const getList = async () => {
    api.getList({type: route.query.type}).then((res) => {
      if (res.code === 0) {
        list.value = res.data
        radio.value = res.data.length > 0? res.data[0].id : ''
        // total.value = res.data.total
      }
    })
  }
  getList()


  // export default {
  //   methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        // generateReport () {
        //     this.$refs.html2Pdf.generatePdf()
        // }
//     },
 
//     components: {
//         VueHtml2pdf
//     }
// }



</script>
<template>
  <div class="contract-templates">
    <div style="margin-bottom: 20px;">签订合同</div>
    <div class="content" style="min-height: 0;">
      <div class="l list">
        <el-radio-group v-model="radio">
          <el-radio v-for="item in list" :value="item.id" :key="item.id" style="width: 100%; margin-right: 0">
            <template #default>
              <div class="item">
                <span>{{ item.name }}</span>
                <el-button v-show="radio === item.id" type="primary" @click="$router.push({ name: 'ContractConclude', query: { id: item.id, orderId: route.query.id } })">使用模板</el-button>
              </div>
            </template>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="r" >
        <el-scrollbar >
        <vTemplate></vTemplate>
        </el-scrollbar>
      </div>
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
      min-width: 0;
    }
    
  }
}
</style>