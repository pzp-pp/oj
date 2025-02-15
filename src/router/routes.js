import accessControl from '@/accessControl/accessControl'

export const routes = [
  {
    path: '/user',
    name: '用户',
    component: () => import('@/views/layout/userLayOut.vue'),
    children: [
      {
        path: '/user/login',
        name: '用户登录',
        component: () => import('@/views/user/userLogin.vue'),
      },
      {
        path: '/user/register',
        name: '用户注册',
        component: () => import('@/views/user/userRegister.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '浏览题目',
    component: () => import('@/views/exampleView.vue'),
  },
  {
    path: '/admin',
    name: '管理题目',
    component: () => import('@/views/Admin.vue'),
    meta: {
      access: accessControl.ADMIN,
    },
  },
  {
    path: '/NoAuth',
    name: '无权限',
    component: () => import('@/views/NoAuth.vue'),
  },
  {
    path: '/hide',
    name: '隐藏页面',
    component: () => import('@/views/Hide.vue'),
    meta: {
      hideInMenu: true,
    },
  },
]
