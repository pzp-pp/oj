<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view></router-view>
    </template>
    <template v-else>
      <baseLayout></baseLayout>
    </template>
  </div>
</template>

<script setup>
import baseLayout from '@/views/layout/baseLayOut.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// // 全局初始化函数，有全局单次调用的代码，都可以写到这里
// const doInt = () => {
//   console.log('全局初始化函数')
// }

// onMounted(() => {
//   doInt()
// })
</script>
<style></style>
