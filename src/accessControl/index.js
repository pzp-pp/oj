import router from '@/router'
import { useUserStore } from '@/stores'
import pinia from '@/stores'
import accessControl from './accessControl'
import accessCheck from './accessCheck'

// 定义 routerGuard 对象
const routerGuard = {
  setup() {
    const userStore = useUserStore(pinia)
    router.beforeEach(async (to, from, next) => {
      // 如果之前没登陆过，自动登录
      const autologin = userStore.loginUser
      if (!autologin || !autologin.role) {
        console.log('用户未登录，自动登录')
        // 加上await，等待登录成功后再跳转，在执行后续的代码
        await userStore.getLoginUser()
      }
      const needAccess = to.meta?.access ?? accessControl.NOT_LOGIN
      // 要跳转的页面需要登录
      if (needAccess !== accessControl.NOT_LOGIN) {
        // 如果没登陆，跳转到登录页面
        if (!autologin || !autologin.role) {
          next(`/user/login?redirect=${to.fullPath}`)
          return
        }
        // 如果登录了，权限不足，跳转到无权限页面
        if (accessCheck(autologin, needAccess)) {
          next('/NoAuth')
          return
        }
      }
      next()
    })
  },
}

// 导出 routerGuard 对象
export default routerGuard
