<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { booth as boothApi, getHallInfo, getExhibitionInfo  } from '@/api/Order/index'
  import { exhibitionData } from '@/api/Exhibition/index'
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const clueId = ref(route.query.clueId);
  const exhibitionId = ref(route.query.exhibitionId);
  const exhibitorId = ref(route.query.exhibitorId);
  // const hallCode = ref(route.query.hallCode);

  // const hallId = ref(route.params.hallId);
  const _info: any = ref({})
  const list: any = ref([])

  exhibitionData({ id: exhibitionId.value }).then(res => {
    if(res.code === 0){
      _info.value = res.data
    }
  })
  getHallInfo({exhibitionId: exhibitionId.value}).then(res => {
    if(res.code === 0){
      list.value = res.data
    }
  })

</script>
<template>
  <div class="hall-layout">
    <div class="hall-info">
      <span class="s1">{{ _info.exhibitionName }}</span>
      <span class="s2">布展日期 {{ _info.arrangeStartTime +'到' + _info.arrangeEndTime }}</span>
      <span class="s2">开展日期 {{ _info.startTime +'到' + _info.endTime }}</span>
    </div>
    <div class="p1">
      请选择
      <div class="c">
        <div class="c1"></div>
        <span style="margin-right: 50px;">可选</span>
        <div class="c2"></div>
        <span>不可选</span>
      </div>
    </div>
    <div class="hall-list">
      <template v-for="(item, index) in list" :key="index">
        <div v-if="item.isSelect" class="hall-item active" @click="$router.push({name: 'BoothReserve', query: {clueId, exhibitionId, exhibitorId, hallCode: item.code, exhibitionName: _info.exhibitionName}})">{{ item.code }}</div>
        <div v-else class="hall-item">{{ item.code }}</div>
      </template>
    </div>
  </div>
</template>
<style scoped>
.hall-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  .hall-info{
    span{
      margin-right: 20px;
      
    }
    .s1{
      font-size: 19px;
      font-weight: bold;
    }
    .s2{
      font-size: 14px;
    }
  }
  .p1{
    background-color: rgba(249, 250, 251, 1);
    display: flex;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid var(--el-border-color-lighter);
    border-bottom: none;
    .c{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .c1{
        width: 24px;
        height: 24px;
        background-color: rgba(212, 179, 101, 1);
        margin-right: 10px
      }
      .c2{
        width: 24px;
        height: 24px;
        background-color: rgba(174, 174, 174, 1);
        margin-right: 10px
      }
    }
  }
  .hall-list{
    flex: 1;
    border: 1px solid var(--el-border-color-lighter);
    display: flex;
    justify-content: center;
    .hall-item{
      width: 200px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      background-color: rgba(174, 174, 174, 1);
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      margin: 20px;
      &.active{
        cursor: pointer;
        background-color: rgba(212, 179, 101, 1);
      }
    }
  }
}
</style>