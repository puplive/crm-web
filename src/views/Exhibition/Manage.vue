<!-- 展会管理 -->
<script setup>
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import TableForm from '@/components/TableForm/TableForm.vue'

</script>
<template>
  <div>
    <TableForm />
  </div>

  <el-row :gutter="20">
    <el-col :xs="12" :sm="8" :md="6" >
      <a class="item add" :to="{path: '/exhibition/add'}">
        <el-icon size="40"><CirclePlus /></el-icon>
        <h3 style="margin-top: 10px;">新建展会</h3>
      </a>
    </el-col>
    <el-col :xs="12" :sm="8" :md="6" >
      <div class="item" >
        <div class="title">23121</div>
        <div class="content">
          <div>
            <el-icon size="30"><FolderAdd /></el-icon>
            <p>导入展位信息</p>
          </div>
          <div>
            <el-icon size="30"><ShoppingCartFull /></el-icon>
            <p>设置物料</p>
          </div>
        </div>
        <div class="actions">
          <el-button-group>
            <el-button size="small" type="primary">开启</el-button>
            <el-button size="small" type="info"plain>关闭</el-button>
          </el-button-group>
          <el-button-group style="margin-left: 10px;">
            <el-button size="small" type="primary" text :icon="Edit"  />
            <el-button size="small" type="danger" text :icon="Delete"  />
          </el-button-group>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<style scoped>

  .item{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: 200px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    
    border: 1px solid rgba(235, 235, 235, 1);
    &:hover{
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    &.add{
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #333;
    }
    .title{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content{
      display: flex;
      flex: 1;
      >div{
        cursor: pointer;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f9fafb;
        &:first-child{
          margin-right: 10px;
        }
        &:hover{
          background-color: #e9eaeb
        }
        p{
          margin: 0;
          font-size: 14px;
          color: #333;
          margin-top: 10px;
        }
      }
    }
    .actions{
      margin-top: 10px;
    }
  }
</style>