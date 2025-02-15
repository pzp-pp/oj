<template>
  <div id="userLogin">
    <h2 style="margin-bottom: 16px; text-align: center">用户注册</h2>
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
      <a-form-item
        field="checkPassword"
        tooltip="请输入1-16位的密码"
        label="确认密码"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再一次输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 120px; border-radius: 5px; margin: 0 auto"
        >
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
// 表单信息
import { UserControllerService } from '@/api/generated'
import { Message } from '@arco-design/web-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
})

const router = useRouter()
// 提交信息
const handleSubmit = async () => {
  if (form.userPassword === form.checkPassword) {
    const res = await UserControllerService.userRegisterUsingPost(form)
    // 登录成功跳转道主页
    if (res.code === 0) {
      Message.success('注册成功')
      router.push({
        path: '/user/login',
        replace: true,
      })
    } else {
      Message.error('注册失败,' + res.message)
    }
  } else {
    Message.error('两次密码输入不正确')
  }
}
</script>
<style></style>
