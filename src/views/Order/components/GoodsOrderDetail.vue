<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { goods as goodsApi} from '@/api/Order/index'

  const detail:any = reactive({
    show: false,
    data: {
      materialData: [],
    },
  })
  const getDetail = (id: any) => {
    goodsApi.getDetail({ id }).then((res: any) => {
      if (res.code === 0) {
        detail.data = res.data
        detail.show = true
      }
    })
  }

  // const emit = defineEmits(['callback'])
  defineExpose({
    getDetail,
  })
</script>
<template>
  <el-dialog title="订单详情" v-model="detail.show" width="700">
    <div>
      <el-form>
        <el-form-item label="展会名称" style="margin-bottom: 0;">{{ detail.data.exhibitionName }}</el-form-item>
        <el-form-item label="企业名称">{{ detail.data.exhibitorName }}</el-form-item>
      </el-form>
      <el-table :data="detail.data.materialData" border show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column prop="project" label="服务项目" min-width="120" />
        <el-table-column prop="position" label="位置/版面" min-width="120" />
        <el-table-column prop="size" label="尺寸规格" min-width="120" />
        <el-table-column prop="num" label="数量" />
        <el-table-column prop="price" label="单价(RMB)" min-width="120" />
        <!-- <el-table-column prop="" label="小计(RMB)">
          <template #default="scope">{{ (scope.row.num * scope.row.price).toFixed(2) }}</template>
        </el-table-column> -->
        <el-table-column prop="remark" label="备注" />
      </el-table>
      <div class="s-table-pagination" style="justify-content: space-between;">
        <span>订单金额</span>
        <span style="color: red;">{{ detail.data.price }}</span>
      </div>
    </div>
    <!-- <template #footer>
      <el-button type="primary" @click="subContract" :loading="Loading">确定</el-button>
      <el-button @click="detail.show = false">取消</el-button>
    </template> -->
  </el-dialog>
</template>