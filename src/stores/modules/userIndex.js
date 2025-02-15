import accessControl from '@/accessControl/accessControl'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserControllerService } from '@/api/generated'

// 用户模块的pinia
export const useUserStore = defineStore('user', () => {
  // 定义一个state
  const loginUser = ref({
    userName: '未登录',
  })

  // 从远程请求获取登录信息
  const getLoginUser = async () => {
    const res = await UserControllerService.getLoginUserUsingGet()
    if (res.code === 0) {
      loginUser.value.userName = res.data.userName
    } else {
      loginUser.value = {
        ...loginUser.value,
        role: accessControl.NOT_LOGIN,
      }
    }
  }

  return {
    loginUser,
    getLoginUser,
  }
})
