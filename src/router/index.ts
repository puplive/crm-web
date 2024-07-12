import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { userStore } from "@/stores/user";

/* Layout */
export const Layout = () => import('@/layout/Layout.vue')

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    // component: Layout,
    redirect: '/exhibition/manage',
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/AboutView.vue')
  // },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      noTagsView: true
    }
  },
  {
    path: '/register',
    component: () => import('@/views/Login/Register.vue'),
    name: 'Register',
    meta: {
      
      title: '注册',
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      title: '404',
      noTagsView: true
    }
  }
]
export const asyncRouterMap: RouteRecordRaw[] = [
  {
    path: '/exhibition',
    component: Layout,
    redirect: '/exhibition/manage',
    name: 'Exhibition',
    meta: {
      title: '展会管理',
      icon: 'dashboard',
      isMenu: true,
    },
    children: [
      {
        path: '/exhibition/manage',
        name: 'Manage',
        component: () => import('@/views/Exhibition/Manage.vue'),
        meta: {
          isMenu: true,
          title: '展会管理',
          // icon: 'list'
        }
      },
      {
        path: '/exhibition/add',
        name: 'ExhibitionAdd',
        component: () => import('@/views/Exhibition/Add.vue'),
        meta: {
          isMenu: false,
          title: '新增展会',
          // icon: 'list'
        }
      },
      {
        path: '/exhibition/edit',
        name: 'ExhibitionEdit',
        component: () => import('@/views/Exhibition/Add.vue'),
        meta: {
          isMenu: false,
          title: '编辑展会',
          // icon: 'list'
        }
      },
      {
        path: '/exhibition/enroll',
        name: 'ExhibitionEnroll',
        component: () => import('@/views/Exhibition/Enroll.vue'),
        meta: {
          isMenu: true,
          title: '展会报名',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/booth',
    component: Layout,
    redirect: '/booth/manage',
    name: 'Booth',
    meta: {
      isMenu: true,
      title: '展位管理',
      // icon: 'dashboard'
    },
    children: [
      {
        path: 'manage',
        name: 'BoothManage',
        component: () => import('@/views/Booth/Manage.vue'),
        meta: {
          isMenu: true,
          title: '展位管理',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/market',
    component: Layout,
    redirect: '/market/clues',
    name: 'Market',
    meta: {
      isMenu: true,
      title: '销售工作台',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/market/clues',
        name: 'Clues',
        component: () => import('@/views/Market/Clues.vue'),
        meta: {
          isMenu: true,
          title: '销售线索',
        }
      },
      { 
        path: '/market/clues/add',
        name: 'CluesAdd',
        component: () => import('@/views/Market/CluesAdd.vue'), 
        meta: {
          isMenu: false,
          title: '新增线索',
        }
      },
      { 
        path: '/market/clues/info',
        name: 'CluesInfo',
        component: () => import('@/views/Market/CluesInfo.vue'), 
        meta: {
          isMenu: false,
          title: '公司信息',
        }
      },
      {
        path: '/market/will',
        name: 'Will',
        component: () => import('@/views/Market/Will.vue'),
        meta: {
          isMenu: true,
          title: '意向展商',
          // icon: 'list'
        }
      },
      {
        path: '/market/shared',
        name: 'Shared',
        component: () => import('@/views/Market/Shared.vue'),
        meta: {
          isMenu: true,
          title: '线索公海',
          // icon: 'list'
        }
      },
      {
        path: '/market/historical',
        name: 'Historical',
        component: () => import('@/views/Market/Historical.vue'),
        meta: {
          isMenu: true,
          title: '历史企业',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/booth',
    name: 'Order',
    meta: {
      isMenu: true,
      title: '订单管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/order/booth',
        name: 'OrderBooth',
        component: () => import('@/views/Order/Booth.vue'),
        meta: {
          isMenu: true,
          title: '展位订单',
          // icon: 'list'
        }
      },
      {
        path: '/order/goods',
        name: 'OrderGoods',
        component: () => import('@/views/Order/Goods.vue'),
        meta: {
          isMenu: true,
          title: '物料订单',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/contract',
    component: Layout,
    redirect: '/contract/manage',
    name: 'Contract',
    meta: {
      isMenu: true,
      title: '合同管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/contract/manage',
        name: 'ContractManage',
        component: () => import('@/views/Contract/Manage.vue'),
        meta: {
          isMenu: true,
          title: '合同管理',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/finances',
    component: Layout,
    redirect: '/finances/contract',
    name: 'Finances',
    meta: {
      isMenu: true,
      title: '财务管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/finances/contract',
        name: 'FinancesContract',
        component: () => import('@/views/Finances/Contract.vue'),
        meta: {
          isMenu: true,
          title: '合同录款',
          // icon: 'list'
        }
      },
      {
        path: '/finances/invoices',
        name: 'FinancesInvoices',
        component: () => import('@/views/Finances/Invoices.vue'),
        meta: {
          isMenu: true,
          title: '收款发票',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/baoguan',
    component: Layout,
    redirect: '/baoguan/consult',
    name: 'Baoguan',
    meta: {
      isMenu: true,
      title: '报馆查询',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/baoguan/consult',
        name: 'BaoguanConsult',
        component: () => import('@/views/Baoguan/Consult.vue'),
        meta: {
          isMenu: true,
          title: '报馆查询',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/custom',
    name: 'Settings',
    meta: {
      isMenu: true,
      title: '设置',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/settings/custom',
        name: 'Custom',
        component: () => import('@/views/Settings/Custom.vue'),
        meta: {
          isMenu: true,
          title: '自定义字段',
          // icon: 'list'
        }
      },
      {
        path: '/settings/custom/field',
        name: 'CustomField',
        component: () => import('@/views/Settings/FieldDetail.vue'),
        meta: {
          // isMenu: true,
          title: '',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/manage',
    name: 'Goods',
    meta: {
      isMenu: true,
      title: '物料',
      icon: 'dashboard'
    },
    children: [
      {
        path: '/goods/manage',
        name: 'GoodsManage',
        component: () => import('@/views/Goods/index.vue'),
        meta: {
          isMenu: true,
          title: '物料',
          // icon: 'list'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL
  routes: [...constantRouterMap,...asyncRouterMap] as RouteRecordRaw[],
})

router.beforeEach((to, from) => {
  // 登录判断
  if (!userStore().Authorization && to.name!== "Login" && to.name!== "Register") {
    return { name: 'Login' }
    
  } else {
    // if (to.meta.isAdmin) {
    //   // 权限判断
    //   // if (useStore().userData.role === "root") {
    //   // } else {
    //   // }      
    // } else {
    // }
  }
  
});

router.afterEach((to, from, next) => {
  // 跳转后滚动条在顶部
  window.scrollTo(0, 0);
});

export default router
  