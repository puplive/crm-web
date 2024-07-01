import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/* Layout */
export const Layout = () => import('@/layout/Layout.vue')

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    // component: Layout,
    redirect: '/exhibition/manage',
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: '登录',
      noTagsView: true
    }
  },
  {
    path: '/register',
    component: () => import('@/views/Login/Register.vue'),
    name: 'Register',
    meta: {
      hidden: true,
      title: '注册',
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
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
      icon: 'dashboard'
    },
    children: [
      {
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/Exhibition/Manage.vue'),
        meta: {
          title: '展会管理',
          // icon: 'list'
        }
      },
      {
        path: 'add',
        name: 'ExhibitionAdd',
        component: () => import('@/views/Exhibition/Add.vue'),
        meta: {
          hidden: true,
          title: '新增展会',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/market',
    component: Layout,
    name: 'Market',
    meta: {
      title: '销售工作台',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'clues',
        name: 'Clues',
        component: () => import('@/views/Market/Clues.vue'),
        meta: {
          title: '销售线索',
          // icon: 'list'
        }
      },
      {
        path: 'will',
        name: 'Will',
        component: () => import('@/views/Market/Will.vue'),
        meta: {
          title: '意向展商',
          // icon: 'list'
        }
      },
      {
        path: 'shared',
        name: 'Shared',
        component: () => import('@/views/Market/Shared.vue'),
        meta: {
          title: '线索公海',
          // icon: 'list'
        }
      },
      {
        path: 'historical',
        name: 'Historical',
        component: () => import('@/views/Market/Historical.vue'),
        meta: {
          title: '历史企业',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: 'Order',
    meta: {
      title: '订单管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'booth',
        name: 'OrderBooth',
        component: () => import('@/views/Order/Booth.vue'),
        meta: {
          title: '展位订单',
          // icon: 'list'
        }
      },
      {
        path: 'material',
        name: 'OrderMaterial',
        component: () => import('@/views/Order/Material.vue'),
        meta: {
          title: '物料订单',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/contract',
    component: Layout,
    name: 'Contract',
    meta: {
      title: '合同管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'manage',
        name: 'ContractManage',
        component: () => import('@/views/Contract/Manage.vue'),
        meta: {
          title: '合同管理',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/finances',
    component: Layout,
    name: 'Finances',
    meta: {
      title: '财务管理',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'contract',
        name: 'FinancesContract',
        component: () => import('@/views/Finances/Contract.vue'),
        meta: {
          title: '合同录款',
          // icon: 'list'
        }
      },
      {
        path: 'invoices',
        name: 'FinancesInvoices',
        component: () => import('@/views/Finances/Invoices.vue'),
        meta: {
          title: '收款发票',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/exhibition/enroll',
    component: Layout,
    name: 'ExhibitionEnroll',
    meta: {
      title: '展会报名',
      icon: 'dashboard'
    },
    children: [
      {
        path: '',
        name: 'ExhibitionEnroll',
        component: () => import('@/views/Exhibition/Enroll.vue'),
        meta: {
          title: '展会报名',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/baoguan',
    component: Layout,
    name: 'Baoguan',
    meta: {
      title: '报馆查询',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'consult',
        name: 'BaoguanConsult',
        component: () => import('@/views/Baoguan/Consult.vue'),
        meta: {
          title: '报馆查询',
          // icon: 'list'
        }
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    name: 'Settings',
    meta: {
      title: '设置',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'custom',
        name: 'SettingsCustom',
        component: () => import('@/views/Settings/Custom.vue'),
        meta: {
          title: '自定义字段',
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

export default router
