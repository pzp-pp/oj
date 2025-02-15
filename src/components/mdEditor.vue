<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<script setup>
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor } from '@bytemd/vue-next'
import { ref, defineProps } from 'vue'

const plugins = [gfm(), highlight()]

// 给组件一个初始值
const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  handleChange: {
    type: Function,
    default: (v) => {
      console.log(v)
    },
  },
})
</script>

<style scoped></style>
