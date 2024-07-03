<template>
  <div class="follow-up">
    <div class="title">跟进记录</div>
    <div class="form">
      <el-input type="textarea" placeholder="请输入跟进内容"></el-input>
      <div class="item">
        <label>跟进状态</label>
        <el-select v-model="status"></el-select>
        <el-select v-model="status"></el-select>
        <el-button type="primary" @click="handleSubmit" size="mini">提交</el-button>
      </div>
    </div>
    
    <div class="record">
      <el-scrollbar>
        <ul class="list">
          <li v-for="(item, index) in 100" :key="index">{{item}}</li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const status = ref('')
  const handleSubmit = () => {
    console.log(status.value)
  }

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