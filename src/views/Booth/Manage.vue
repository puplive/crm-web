<!-- 销售线索列表 -->
<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue'
  import TableSearch from '@/components/TableSearch/index.vue'
  import { useRouter, useRoute } from 'vue-router'
  import { boothList, boothAdd, boothEdit , boothDelete, boothImport, boothExport, getImportTemplate } from '@/api/Booth/index'
  import { getExhibitor } from '@/api/Exhibitor/index'
  import { getHallInfo } from '@/api/Order/index'
  import { genFileId } from 'element-plus'
  import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
  import { downloadFile } from '@/utils/fileZip';
// import { uploadFile } from '@/api/common'

  
  const router = useRouter()
  const route = useRoute()
  // const page = ref(1)
  // const pageSize = ref(10)
  // const total = ref(0)
  // const loading = ref(false)
  const id: any = route.query.id
  const tableData: any = ref([])
  const tableRef: any = ref(null)
  const formRef: any = ref(null)

  const addShow = ref(false)
  const isEdit = ref(false)
  const addForm: any = reactive({
    id: '',
    exhibitionId: id,
    hallCode: '',
    positionCode: '',
    standardPrice: 0,
    specialPrice: 0,
    specialUnit: 1,
    length: 0,
    width: 0,
    remark: '',
    exhibitor: '',
    exhibitorId: ''
  })
  const rules = {
    hallCode: [
      { required: true, message: '请输入大厅号', trigger: 'blur' },
    ],
    positionCode: [
      { required: true, message: '请输入位置号', trigger: 'blur' },
    ],
    standardPrice: [
      { required: true, message: '请输入标准展位单价', trigger: 'blur' },
      { validator: (rule: any, value: any, callback: any) => {
        if (value <= 0) {
          callback(new Error('不能小于0'))
        } else {
          callback()
        }
      } }
    ],
    specialPrice: [
      { required: true, message: '请输入特装展位单价', trigger: 'blur' },
      { validator: (rule: any, value: any, callback: any) => {
        if (value <= 0) {
          callback(new Error('不能小于0'))
        } else {
          callback()
        }
      } }

    ],
    specialUnit: [
      { required: true, message: '请选择单位', trigger: 'blur' }
    ],
    length: [
      { required: true, message: '请输入长度', trigger: 'blur' },
      { validator: (rule: any, value: any, callback: any) => {
        if (value <= 0) {
          callback(new Error('必须大于0'))
        } else {
          callback()
        }
      } }

    ],
    width: [
      { required: true, message: '请输入宽度', trigger: 'blur' },
      { validator: (rule: any, value: any, callback: any) => {
        if (value <= 0) {
          callback(new Error('必须大于0'))
        } else {
          callback()
        }
      } }

    ],
    // exhibitor: [
    //   { required: true, message: '请选择展商', trigger: 'blur' }
    // ]
  }

  let exhibitorOptions: any = ref([])
  getExhibitor({ exhibitionId: id }).then((res: any) => {
    if (res.code === 0) {
      exhibitorOptions.value = res.data
    }
  })
  const searchData = ref([])

  const getData = () => {
    // loading.value = true
    boothList({ exhibitionId: id }).then((res: any) => {
      if (res.code === 0) {
        tableData.value = res.data
      }else {
        tableData.value = []
      }
      
      // total.value = res.data.total
      // loading.value = false
    })
  }
  

  const handleEdit = async (row: any) => {
    isEdit.value = true
    addShow.value = true
    // await nextTick()
    // formRef.value.resetFields()
    
    addForm.hallCode = row.hallCode
    addForm.positionCode = row.positionCode
    addForm.standardPrice = row.standardPrice
    addForm.specialPrice = row.specialPrice
    addForm.specialUnit = row.specialUnit.indexOf('个') > -1 ? 2 : 1
    addForm.length = row.length
    addForm.width = row.width
    addForm.remark = row.remark
    addForm.exhibitor = row.exhibitor
    addForm.exhibitorId = row.exhibitorId

    addForm.id = row.id
    
  }

  const deleteSelected = ()=> {
    let ids = tableRef.value.getSelectionRows().map((item: any) => item.id)
    if (ids.length === 0) {
      ElMessage.error('请选择需要删除的数据')
      return
    }
    handleDelete(ids)
  }
  const handleDelete = (ids: any) => {
    ElMessageBox.confirm('此操作将永久删除数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {

      boothDelete({ id: ids}).then((res) => {
        if(res.code === 0) {
          ElMessage.success('删除成功')
          getData()
        }else {
          ElMessage.error(res.msg)
        }
        
      })
    }).catch(() => {
    })
  }

  const handleAdd = async () => {
    
    isEdit.value = false
    addShow.value = true
    addForm.remark = ''
    // await nextTick()
    // formRef.value.resetFields()
  }
  const addSub = () => {
    formRef.value.validate((valid: any) => {
      // console.log(valid)
      if (valid) {
        if(isEdit.value){
          let d = addForm
          d.exhibitor = d.exhibitorId? exhibitorOptions.value.find((item: any) => item.id === addForm.exhibitorId).name : ''
          boothEdit(d).then((res: any) => {
            if (res.code === 0) {
              ElMessage.success('编辑成功')
              addShow.value = false
              getData()
            } else {
              ElMessage.error(res.msg)
            }
          })
        }else {
          let {id, ...d} = addForm
          d.exhibitor = d.exhibitorId? exhibitorOptions.value.find((item: any) => item.id === addForm.exhibitorId).name : ''
          boothAdd(d).then((res: any) => {
            if (res.code === 0) {
              ElMessage.success('新增成功')
              addShow.value = false
              getData()
            } else {
              ElMessage.error(res.msg)
            }
          })
        }
        
      } else {
        // ElMessage.error('请检查输入项')
        return false
      }
    })
  }

  const zg: any = ref([])
  getHallInfo({exhibitionId: id}).then((res: any) => {
    if(res.code === 0){
      zg.value = res.data
    }
  })

  const uploadRef = ref<UploadInstance>()
  const _import: any = reactive({
    show: false,
    loading: false,
    list: [],
    set: () => {
      _import.show = true

    },
    sub: () => {
      if(_import.list.length === 0) {
        ElMessage.error('请选择文件')
        return
      }
      uploadRef.value!.submit()
    },
    dowModel: () => {
      getImportTemplate({exhibitionId: id}).then((res: any) => {
        if(res.code === 0){
          downloadFile(res.data.url, res.data.name)
        }
      })
    }
  })
    
  const handleExceed: UploadProps['onExceed'] = (files) => {
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value!.handleStart(file)
  }

  const handleExport = () => {
    boothExport({ exhibitionId: id }).then((res: any) => {
      if(res.code === 0) {
        window.open(res.data.url, '_self')
        ElMessage.success('导出成功')
      }else {
        ElMessage.error(res.msg)
      }
    })
  }

  const beforeUpload = (file: any) => {
    const isLt2M = file.size / 1024 / 1024 < 20
    if (!isLt2M) {
      ElMessage.error('文件大小不能超过 20MB!')
    }
    return isLt2M
  }

  const uploadFile = (file: any) => {
    _import.loading = true
    const formData = new FormData()
    formData.append('file', file.file)
    formData.append('exhibitionId', id)
    boothImport(formData).then((res: any) => {
      if(res.code === 0) {
        ElMessage.success('导入成功')
        _import.show = false
        uploadRef.value!.clearFiles()
        getData()
      }else {
        ElMessage.error(res.msg)
      }
      _import.loading = false
    }).catch((err: any) => {
      _import.loading = false
    })
  }
  
  const search = (d: any) => {
    console.log(d)
  }

  if (id) {
    getData()
  }

  const columns_selected: any = ref([])
  const columns: any = ref([])
  const getColumns = () => {
    setTimeout(() => {
      let _l: string[] = []
      tableRef.value.columns.forEach((item: any) => {
        if(item.label){
          _l.push(item.label)
        }
      })
      columns.value = _l.join(',').split(',')
      columns_selected.value = _l.join(',').split(',')
    }, 0)
  }

  const columns_is_selected = (label: string)=>{
    if(columns_selected.value.length === 0 && columns.value.length === 0){
      return true
    }else{
      return columns_selected.value.includes(label)
    }
  }
  getColumns()
  
</script>
<template>
  <div class="s-flex-col" style="height: 100%">
    <!-- <TableSearch :data="searchData" @search="search"/> -->
    <div class="s-table-operations">
      <el-button @click="handleAdd">新增</el-button>
      <el-button @click="_import.set()">导入</el-button>
      
      <el-button @click="handleExport">导出</el-button>
      <el-button @click="deleteSelected">删除</el-button>

      <el-popover
        placement="bottom-end"
        trigger="click"
      >
        <template #reference>
          <el-button size="" link>
            <img style="width: 17px;" src="@/assets/svg/sx.svg" alt="">
          </el-button>
        </template>
        <template #default>
          <el-checkbox-group v-model="columns_selected">
              <ul>
                  <li class="s-checkbox_item" v-for="i in columns" :key="i"><el-checkbox :label="i" :value="i">{{i}}</el-checkbox></li>
              </ul>
          </el-checkbox-group>
        </template>
      </el-popover>
    </div>
    <div class="s-flex-auto" style="min-height: 0;">
      <el-table ref="tableRef" :data="tableData" border table-layout="fixed" height="100%" show-overflow-tooltip
        header-row-class-name="s-table-header">
        <el-table-column type="selection" width="42" />
        <el-table-column v-if="columns_is_selected('ID')" prop="id" label="ID" width="50" />
        <el-table-column v-if="columns_is_selected('展馆号')" prop="hallCode" label="展馆号" />
        <el-table-column v-if="columns_is_selected('展位号')" prop="positionCode" label="展位号" />
        <el-table-column v-if="columns_is_selected('标摊/元')" prop="standardPrice" label="标摊/元" min-width="120" />
        <el-table-column v-if="columns_is_selected('特装/元')" prop="specialPrice" label="特装/元" min-width="120" />
        <el-table-column v-if="columns_is_selected('特装/㎡/个')" prop="specialUnit" label="特装/㎡/个"  min-width="120"/>
        <el-table-column v-if="columns_is_selected('长')" prop="length" label="长" />
        <el-table-column v-if="columns_is_selected('宽')" prop="width" label="宽" />
        <el-table-column v-if="columns_is_selected('备注')" prop="remark" label="备注" />
        <el-table-column v-if="columns_is_selected('参展商')" prop="exhibitor" label="参展商" />
        <el-table-column v-if="columns_is_selected('创建时间')" prop="time" label="创建时间" min-width="120" />
        <el-table-column v-if="columns_is_selected('操作')" fixed="right" label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button link type="danger" @click="handleDelete([scope.row.id])">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="s-table-pagination">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[10, 20, 50]" :total="1000" />
    </div>
  </div>

  <el-dialog v-model="addShow" :title="isEdit?'编辑':'新增展位信息'" width="500" draggable @close="() => formRef.resetFields()">
    <el-form ref="formRef" :model="addForm" :rules="rules" label-width="auto" label-position="left">
      <el-form-item label="展馆号" prop="hallCode">
        <!-- <el-input v-model="addForm.hallCode" autocomplete="off" /> -->
        <el-select v-model="addForm.hallCode" placeholder="请选择">
          <el-option v-for="item in zg" :key="item.code" :label="item.code" :value="item.code" />
        </el-select>
      </el-form-item>
      <el-form-item label="展位号" prop="positionCode">
        <el-input v-model="addForm.positionCode" autocomplete="off" />
      </el-form-item>
      <el-form-item label="标准展位" prop="standardPrice">
        <el-input v-model="addForm.standardPrice" autocomplete="off" type="number">
          <template #append>元/个</template>
        </el-input>
      </el-form-item>
      <el-form-item label="特装展位" prop="specialPrice">
        <el-input v-model="addForm.specialPrice" autocomplete="off" type="number">
          <template #append>
            <el-select v-model="addForm.specialUnit" placeholder="请选择" style="width: 120px;">
              <el-option label="元/㎡" :value="1" />
              <el-option label="元/个" :value="2" />
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="长" prop="length">
            <el-input v-model="addForm.length" autocomplete="off" type="number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="宽" prop="width">
            <el-input v-model="addForm.width" autocomplete="off" type="number"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="备注" >
        <el-input v-model="addForm.remark" autocomplete="off" type="textarea" />
      </el-form-item>
      <el-form-item label="参展商" prop="exhibitorId">
        <el-select v-model="addForm.exhibitorId" placeholder="请选择">
          <el-option label="无" value="" />
          <el-option v-for="item in exhibitorOptions" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="addShow = false">取消</el-button>
        <el-button type="primary" @click="addSub">确定</el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog 
    v-model="_import.show" 
    :title="`导入展位信息`" 
    width="500" 
    draggable
    @close="() => { 
      _import.loading = false
      uploadRef!.clearFiles()
    }">
    <el-button type="" @click="_import.dowModel" style="margin-bottom: 20px;">下载导入模板</el-button>
    <el-upload
        ref="uploadRef"
        v-model:file-list="_import.list"
        :before-upload="beforeUpload"
        :http-request="uploadFile"
        accept=".xls,.xlsx"
        :on-exceed="handleExceed"
        :limit="1"
        :multiple="false"
        :auto-upload="false">
        <el-button type="primary" >选择文件</el-button>
      </el-upload>
    <template #footer>
      <el-button @click="_import.show = false">取消</el-button>
      <el-button type="primary" @click="_import.sub" :loading="_import.loading">确定</el-button>
    </template>
  </el-dialog>
</template>