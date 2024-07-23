<template>
  <div class="follow-up">
    <div class="title">跟进记录</div>
    <div class="form">
      <el-input type="textarea" placeholder="请输入跟进内容" v-model="text"></el-input>
      <div class="item">
        <label>跟进状态</label>
        <el-select v-model="status" placeholder="跟进状态">
          <el-option label="未跟进" :value="0"></el-option>
          <el-option label="电话邀约" :value="1"></el-option>
          <el-option label="客户拜访" :value="2"></el-option>
          <el-option label="初步方案" :value="3"></el-option>
          <el-option label="停滞" :value="4"></el-option>
        </el-select>
        <el-select v-model="contactId" placeholder="联系人" 
          @change="(val: any)=>{ 
            if(val === 0){
              contactName.value = ''
            }else{
              let d = contactList.find(item => item.id === val)
              contactName.value =  d? d.name : ''
            }
          }">
          <el-option label="请选择" :value="0"></el-option>
          <el-option v-for="item in contactList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
        <el-button type="primary" @click="handleSubmit" >提交</el-button>
      </div>
    </div>
    
    <div class="record">
      <el-scrollbar>
        <ul class="list">
          <li v-for="(item, index) in recordList" :key="index">{{item.text}}</li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import { contact, clueRecord } from '@/api/Clues'

  const props = defineProps(['clueId'])

  const text = ref('')
  const status = ref(0)
  const contactId = ref(0)
  const contactName = ref('')
  const handleSubmit = () => {
    clueRecord.add({ 
      clueId: props.clueId, 
      text: text.value, 
      status: status.value, 
      contactId: contactId.value,
      contactName: contactName.value
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
        ElMessage.success('跟进记录添加成功')
        getRecordList()
      }else {
        ElMessage.error(res.msg)
      }
    })
  }
  const recordList: any = ref([])
  const getRecordList = () => {
    clueRecord.getList({ clueId: props.clueId }).then(res => {
      if (res.code === 0) {
        recordList.vue = res.data
      }
    })
  }
  getRecordList()

  const contactList: any = ref([])
  contact.getList({ clueId: props.clueId }).then(res => {
    if (res.code === 0) {
      contactList.value = res.data
    }
  })

</script>
<style scoped>
  .follow-up {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* padding: 15px; */
    background: var(--el-bg-color-overlay);
    border: 1px solid var(--el-border-color);
    .title {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      background-color: var(--el-fill-color-light);
      border-bottom: 1px solid var(--el-border-color-light);
    }
    .form {
      padding: 15px 15px 0;
      .item {
        display: flex;
        align-items: center;
        margin-top: 15px;
        label {
          margin-right: 10px;
        }
        .el-select {
          width: 80px;
          flex: 1;
          margin-right: 10px;
        }
      }
    }
    .record {
      flex: 1;
      /* padding-top: 15px; */
      overflow-y: auto;
      .list{
        padding: 15px;
      }
    }
  }
</style>