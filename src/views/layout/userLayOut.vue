<template>
  <div id="userLayOut">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img class="logo" src="/src/assets/布布头像.jpeg" />
          <div><span>布布-oj</span></div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">
        <span>布布oj</span>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup></script>

<style scoped>
#userLayOut {
  text-align: center;
  background-image: url(/src/assets/布布一二背景图.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#userLayOut .logo {
  height: 48px;
  width: 48px;
}

#userLayOut .header {
  margin-top: 16px;
  margin-bottom: 16px;
}

#userLayOut .content {
  padding: 24px;
  margin-bottom: 16px;
}

#userLayOut .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
