<template>
  <div id="userLogin">
    <h2 style="margin-bottom: 16px; text-align: center">用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" tooltip="请输入用户名" label="用户名">
        <a-input v-model="form.userAccount" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item
        field="userPassword"
        tooltip="请输入1-16位的密码"
        label="用户密码"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 120px; border-radius: 5px; margin: 0 auto"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
// 表单信息
import { UserControllerService } from '@/api/generated'
import { useUserStore } from '@/stores'
import { Message } from '@arco-design/web-vue'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const form = reactive({
  userAccount: '',
  userPassword: '',
})

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
// 提交信息
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form)
  // 登录成功跳转道主页
  if (res.code === 0) {
    Message.success('登录成功')
    await userStore.getLoginUser()
    const redirect = route.query.redirect || '/'
    router.push({
      path: redirect,
      replace: true,
    })
  } else {
    Message.error('登录失败,' + res.message)
  }
}
</script>
<style></style>
