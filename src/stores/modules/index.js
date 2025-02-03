import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块的pinia
export const useUserStore = defineStore('user', () => {
  // 定义一个state
  const loginUser = ref({
    userName: '未登录',
  })

  const updateUser = () => {
    loginUser.value.userName = '布布'
  }

  return {
    loginUser,
    updateUser,
  }
})
