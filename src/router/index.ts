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
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/Exhibition/Manage.vue'),
        meta: {
          isMenu: true,
          title: '展会管理',
          // icon: 'list'
        }
      },
      {
        path: 'add',
        name: 'ExhibitionAdd',
        component: () => import('@/views/Exhibition/Add.vue'),
        meta: {
          isMenu: false,
          title: '新增展会',
          // icon: 'list'
        }
      },
      {
        path: 'edit',
        name: 'ExhibitionEdit',
        component: () => import('@/views/Exhibition/Add.vue'),
        meta: {
          isMenu: false,
          title: '编辑展会',
          // icon: 'list'
        }
      },
      {
        path: 'enroll',
        name: 'ExhibitionEnroll',
        component: () => import('@/views/Exhibition/Enroll.vue'),
        meta: {
          isMenu: false,
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
      isMenu: false,
      title: '展位管理',
      // icon: 'dashboard'
    },
    children: [
      {
        path: 'manage',
        name: 'BoothManage',
        component: () => import('@/views/Booth/Manage.vue'),
        meta: {
          isMenu: false,
          title: '展位管理',
          // icon: 'list'
        }
      },
      {
        path: 'reserve',
        name: 'BoothReserve',
        component: () => import('@/views/Booth/Reserve.vue'),
        meta: {
          isMenu: false,
          title: '展位预定',
          // icon: 'list'
        }
      },
      {
        path: 'create/order',
        name: 'BoothCreateOrder',
        component: () => import('@/views/Booth/CreateOrder.vue'),
        meta: {
          isMenu: false,
          title: '展位下单',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/manage',
    name: 'Goods',
    meta: {
      isMenu: false,
      title: '物料',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'manage',
        name: 'GoodsManage',
        component: () => import('@/views/Goods/Manage.vue'),
        meta: {
          isMenu: false,
          title: '物料设置',
          // icon: 'list'
        }
      },
      {
        path: 'reserve',
        name: 'GoodsReserve',
        component: () => import('@/views/Goods/Reserve.vue'),
        meta: {
          isMenu: false,
          title: '物料预定',
          // icon: 'list'
        }
      }
      // {
      //   path: 'reserve',
      //   name: 'GoodsReserve',
      //   component: () => import('@/views/Goods/Reserve.vue'),
      //   meta: {
      //     isMenu: true,
      //     title: '物料预定',
      //     // icon: 'list'
      //   }
      // }
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
        path: 'clues',
        name: 'Clues',
        component: () => import('@/views/Market/Clues.vue'),
        meta: {
          isMenu: true,
          title: '销售线索',
        }
      },
      {
        path: 'clues/add',
        name: 'CluesAdd',
        component: () => import('@/views/Market/CluesAdd.vue'),
        meta: {
          isMenu: false,
          title: '新增线索',
        }
      },
      {
        path: 'clues/edit',
        name: 'CluesEdit',
        component: () => import('@/views/Market/CluesAdd.vue'),
        meta: {
          isMenu: false,
          title: '编辑线索',
        }
      },
      {
        path: 'clues/import',
        name: 'CluesImport',
        component: () => import('@/views/Market/CluesImport.vue'),
        meta: {
          isMenu: false,
          title: '线索导入',
        }
      },
      {
        path: 'clues/info',
        name: 'CluesInfo',
        component: () => import('@/views/Market/CluesInfo.vue'),
        meta: {
          isMenu: false,
          title: '公司信息',
        }
      },
      {
        path: 'will',
        name: 'Will',
        component: () => import('@/views/Market/Will.vue'),
        meta: {
          isMenu: true,
          title: '意向展商',
          // icon: 'list'
        }
      },
      {
        path: 'shared',
        name: 'Shared',
        component: () => import('@/views/Market/Shared.vue'),
        meta: {
          isMenu: true,
          title: '线索公海',
          // icon: 'list'
        }
      },
      {
        path: 'historical',
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
        path: 'booth',
        name: 'OrderBooth',
        component: () => import('@/views/Order/Booth.vue'),
        meta: {
          isMenu: true,
          title: '展位订单',
          // icon: 'list'
        }
      },
      {
        path: 'goods',
        name: 'OrderGoods',
        component: () => import('@/views/Order/Goods.vue'),
        meta: {
          isMenu: true,
          title: '物料订单',
          // icon: 'list'
        }
      },
      {
        path: 'booth/detail',
        name: 'OrderBoothDetail',
        component: () => import('@/views/Order/BoothDetail.vue'),
        meta: {
          isMenu: false,
          title: '展位订单详情',
          // icon: 'list'
        }
      },
      {
        path: 'goods/detail',
        name: 'OrderGoodsDetail',
        component: () => import('@/views/Order/GoodsDetail.vue'),
        meta: {
          isMenu: false,
          title: '物料订单详情',
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
        path: 'manage',
        name: 'ContractManage',
        component: () => import('@/views/Contract/Manage.vue'),
        meta: {
          isMenu: true,
          title: '合同模板',
          // icon: 'list'
        }
      },
      {
        path: 'templates',
        name: 'ContractTemplates',
        component: () => import('@/views/Contract/Templates.vue'),
        meta: {
          isMenu: false,
          title: '合同模板',
          // icon: 'list'
        }
      },
      {
        path: 'conclude',
        name: 'ContractConclude',
        component: () => import('@/views/Contract/Conclude.vue'),
        meta: {
          isMenu: false,
          title: '签订合同',
          // icon: 'list'
        }
      },
      {
        path: 'detail',
        name: 'ContractDetail',
        component: () => import('@/views/Contract/Conclude.vue'),
        meta: {
          isMenu: false,
          title: '合同详情',
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
        path: 'order',
        name: 'FinancesOrder',
        component: () => import('@/views/Finances/Order.vue'),
        meta: {
          isMenu: true,
          title: '订单管理',
          // icon: 'list'
        }
      },
      {
        path: 'payment',
        name: 'FinancesPayment',
        component: () => import('@/views/Finances/Payment.vue'),
        meta: {
          isMenu: true,
          title: '到款信息',
          // icon: 'list'
        }
      },
      {
        path: 'invoices',
        name: 'FinancesInvoices',
        component: () => import('@/views/Finances/Invoices.vue'),
        meta: {
          isMenu: true,
          title: '发票管理',
          // icon: 'list'
        }
      },
      {
        path: 'recording',
        name: 'FinancesRecording',
        component: () => import('@/views/Finances/Recording.vue'),
        meta: {
          isMenu: false,
          title: '录入到款',
          // icon: 'list'
        }
      },
      {
        path: 'order/detail',
        name: 'FinancesOrderDetail',
        component: () => import('@/views/Order/BoothDetail.vue'),
        meta: {
          isMenu: false,
          title: '订单详情',
          // icon: 'list'
        }
      },
      {
        path: 'payment/detail',
        name: 'FinancesPaymentDetail',
        component: () => import('@/views/Finances/PaymentDetail.vue'),
        meta: {
          isMenu: false,
          title: '到款详情',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/baoguan',
    component: Layout,
    redirect: '/baoguan/consult',
    name: 'Baoguan',
    meta: {
      isMenu: false,
      title: '报馆查询',
      icon: ''
    },
    children: [
      {
        path: 'consult',
        name: 'BaoguanConsult',
        component: () => import('@/views/Baoguan/Consult.vue'),
        meta: {
          isMenu: false,
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
        path: 'custom',
        name: 'Custom',
        component: () => import('@/views/Settings/Custom.vue'),
        meta: {
          isMenu: true,
          title: '自定义字段',
          // icon: 'list'
        }
      },
      {
        path: 'custom/field',
        name: 'CustomField',
        component: () => import('@/views/Settings/FieldDetail.vue'),
        meta: {
          // isMenu: true,
          title: '',
          // icon: 'list'
        }
      },
      {
        path: 'org',
        name: 'Org',
        component: () => import('@/views/Settings/Org.vue'),
        meta: {
          isMenu: true,
          title: '公司架构',
          // icon: 'list'
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/Settings/Role.vue'),
        meta: {
          isMenu: true,
          title: '角色权限',
          // icon: 'list'
        }
      },
      {
        path: 'exhibitors',
        name: 'Exhibitors',
        component: () => import('@/views/Settings/Exhibitors.vue'),
        meta: {
          isMenu: true,
          title: '参展商账号管理',
          // icon: 'list'
        }
      },
      {
        path: 'exhibitors/detail',
        name: 'ExhibitorsDetail',
        component: () => import('@/views/Settings/ExhibitorsDetail.vue'),
        meta: {
          isMenu: false,
          title: '参展商详情',
          // icon: 'list'
        }
      },
    ]
  },
  {
    path: '/hall',
    component: Layout,
    redirect: '/hall/layout',
    name: 'Hall',
    meta: {
      isMenu: false,
      title: '展馆',
      icon: ''
    },
    children: [
      {
        path: 'layout',
        name: 'HallLayout',
        component: () => import('@/views/Hall/Layout.vue'),
        meta: {
          isMenu: false,
          title: '展馆示意图',
          // icon: 'list'
        }
      },

    ]
  },
]
const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL
  routes: [...constantRouterMap, ...asyncRouterMap] as RouteRecordRaw[],
})

router.beforeEach((to, from) => {
  // console.log(to)
  // 页面标题
  document.title = to.meta.title || '招展管理系统';

  // 登录判断
  const _userStore = userStore()
  const token = _userStore ? _userStore.TOKEN : ''
  if (token) {

  } else {
    // token不存在，跳转到登录页面
    if (to.name !== "Login" && to.name !== "Register") {
      return { name: 'Login' }
    }
  }

});

router.afterEach((to, from, next) => {
  // 跳转后滚动条在顶部
  window.scrollTo(0, 0);
});

export default router
