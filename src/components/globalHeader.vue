<template>
  <div>
    <!-- 通过arco的布局组件a-row和a-col实现页面布局 -->
    <a-row style="margin-bottom: 16px" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="handleClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/布布头像.jpeg" alt="" />
              <div class="title">布布-oj</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>
          <span>{{ userStore.loginUser?.userName ?? '未登录' }}</span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import accessCheck from '@/accessControl/accessCheck'
import { routes } from '@/router/routes'
import { useUserStore } from '@/stores'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const loginUser = userStore.loginUser

//默认主页
const selectedKeys = ref(['/'])

//路由跳转之后，动态更新菜单的选中状态，并且在刷新页面时确保当前路由对应的菜单项保持高亮显示
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

const handleClick = (key) => {
  router.push({
    path: key,
  })
}

//导航菜单的显示与隐藏
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false
    }
    // 根据权限过滤菜单
    if (!accessCheck(loginUser, item.meta?.access)) {
      return false
    }
    return true
  })
})
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  font-size: 16px;
  color: #444;
  margin-left: 10px;
}
.logo {
  height: 48px;
}
</style>
