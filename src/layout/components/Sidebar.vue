<script lang="ts" setup>
  import { ref } from 'vue'
  import { getMenu } from '@/api/user'
  // import { asyncRouterMap } from '@/router/index'
  // const routers: any = ref([]);
  const menu: any = ref([]);
  getMenu().then(res => {
    menu.value = res.data;
  })
  // routers.value = asyncRouterMap
  // console.log(routers)
  const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath);
  }
  const handleClose =(key, keyPath) =>{
    // console.log(key, keyPath);
  }
  // menu.value = [
  //   {
  //     path:'/exhibition',
  //     meta:{
  //       title: '展会管理',
  //       icon: '',
  //     },
  //     child:[]
  //   },
  //   {
  //     path:'/market',
  //     meta: {
  //       title: '销售工作台',
  //       icon: '',
  //     },
  //     child: [
  //       {
  //         path:'/market/clues',
  //         meta: {
  //           title: '销售线索',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/market/will',
  //         meta: {
  //           title: '意向展商',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/market/shared',
  //         meta: {
  //           title: '线索公海',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/market/historical',
  //         meta: {
  //           title: '历史企业',
  //           icon: '',
  //         }
  //       },

  //     ]

  //   },
  //   {
  //     path:'/order',
  //     meta: {
  //       title: '订单管理',
  //       icon: '',
  //     },
  //     child: [
  //       {
  //         path:'/order/booth',
  //         meta: {
  //           title: '展位订单',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/order/goods',
  //         meta:{
  //           title: '物料订单',
  //           icon: '',
  //         }
  //       },
  //     ]
  //   },
  //   {
  //     path:'/finances',
  //     meta: {
  //       title: '财务管理',
  //       icon: '',
  //     },
  //     child: [
  //       {
  //         path:'/finances/order',
  //         meta: {
  //           title: '订单管理',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/finances/payment',
  //         meta: {
  //           title: '到款信息',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/finances/invoices',
  //         meta: {
  //           title: '发票管理',
  //           icon: '',
  //         }
  //       },
  //     ]
  //   },
  //   {
  //     title: '设置',
  //     path:'/settings',
  //     icon: '',
  //     meta:{
  //       title: '系统设置',
  //       icon: '',
  //     },
  //     child: [
  //       {
  //         path:'/settings/custom',
  //         meta: {
  //           title: '自定义字段',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/settings/org',
  //         meta: {
  //           title: '公司架构',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/settings/role',
  //         meta: {
  //           title: '角色管理',
  //           icon: '',
  //         }
  //       },
  //       {
  //         path:'/settings/exhibitors',
  //         meta: {
  //           title: '参展商账号管理',
  //           icon: '',
  //         }
  //       },
  //     ]
  //   },
  // ]

</script>
<template>
  <!-- <el-aside width="200px"> -->
    <el-scrollbar>
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#393d49"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item, index) in menu" :key="index">
            <el-sub-menu v-if="item.child.length" :index="item.path">
              <template #title> 
                <!-- <el-icon><Tools /></el-icon> -->
                <span>{{ item.meta.title }}</span>
              </template>
              <template v-for="(child, index) in item.child" :key="index">
                <el-menu-item
                  :index="child.path" 
                  :route="child.path">
                  <!-- <el-icon :class="child.meta.icon"></el-icon> -->
                  <span>{{ child.meta.title }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
            <el-menu-item v-else 
              :index="item.path" 
              :route="item.path">
                <!-- <el-icon :class="item.meta.icon"></el-icon> -->
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  <!-- </el-aside> -->
</template>
