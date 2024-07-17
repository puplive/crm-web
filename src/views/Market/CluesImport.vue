<script lang="ts" setup>
  import { ref } from 'vue'

  const active = ref(0)
  const file = ref(null)
  const handleFileChange = (event: any) => {
    file.value = event.target.files[0]
  }
</script>
<template>
  <div>
    <div></div>
    <div>
      <div>
        <el-steps style="max-width: 600px" :active="2" align-center>
          <el-step title="上传文件" />
          <el-step title="导入数据" />
          <el-step title="导入结果" />
        </el-steps>
      </div>
      <div>
        <div>
          <dl>
            <dt>一、请按最新的数据模版格式导入最新的数据</dt>
            <dd>
              <el-btutton>下载数据模板</el-btutton>
            </dd>
          </dl>
          <dl>
            <dt>二、请选择数据重复时的处理方式</dt>
            <dd>
              <el-radio-group v-model="handleDuplicate">
                <el-radio label="忽略">导入新数据，跳过重复数据</el-radio>
                <el-radio label="覆盖">去重</el-radio>
                <el-radio label="新增">覆盖数据库已存在的数据</el-radio>
              </el-radio-group>
            </dd>
          </dl>
          <dl>
            <dt>三、上传需要导入的Xls 文件</dt>
            <dd>
              <el-upload
                name="file"
                :before-upload="handleFileChange"
                :file-list="file"
                type="drag"
                accept=".xls,.xlsx"
              >
                <el-button size="small" type="primary">上传文件</el-button>
              </el-upload>
            </dd>
          </dl>
        </div>
        <div>
          <p><el-icon><WarningFilled /></el-icon>注意事项</p>
          <p>1.模板中的表头名称不可更改，表头不能删除。</p>
          <p>2.数据必填字段必须录入</p>
          <p>3.相应数据必须填写所有人</p>
          <p>4.每次导入最大条数100000，导入文件大小最大20Mb</p>
          <p>5.客户查重规则：【客户姓名】重复 客户：客户名称 or 客户：邮箱 or 客户：手 机</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  
</style>