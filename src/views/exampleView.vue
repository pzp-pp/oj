<template>
  <div id="exampleView">
    <codeEditor :value="codeValue" :handle-change="onCodeChange"></codeEditor>
    <mdEditor :value="mdValue" :handle-change="onMdChange"></mdEditor>
  </div>
</template>
<script setup>
import codeEditor from '@/components/codeEditor.vue'
import mdEditor from '@/components/mdEditor.vue'
import { ref } from 'vue'

const mdValue = ref()
const codeValue = ref()

const onMdChange = (v) => {
  mdValue.value = v
}
const onCodeChange = (v) => {
  codeValue.value = v
}
</script>
<style></style>
