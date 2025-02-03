<template>
  <div id="basicLayOut">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <globalHeader></globalHeader>
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

<script setup>
import globalHeader from '@/components/globalHeader.vue'
</script>

<style scoped>
#basicLayOut {
}

#basicLayOut .header {
  margin-bottom: 16px;
  box-shadow: gray 1px 1px 5px;
}

#basicLayOut .content {
  background: lightblue;
  padding: 24px;
  margin-bottom: 16px;
}

#basicLayOut .footer {
  background: red;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
