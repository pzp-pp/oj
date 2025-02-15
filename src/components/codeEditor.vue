<template>
  <div id="code-editor" ref="codeEditorRef" style="height: 400px"></div>
</template>
<script setup>
import * as monaco from 'monaco-editor'
import { onMounted, ref, toRaw } from 'vue'

const codeEditorRef = ref()
const codeEditor = ref()

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

const fillValue = () => {
  if (!codeEditor.value) return
  toRaw(codeEditor.value).setValue('hello world')
}
onMounted(() => {
  if (!codeEditorRef.value) return
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value || '',
    language: 'javascript' || 'java',
    minimap: {
      enabled: true,
      scale: 5,
    },
    colorDecorators: true, //颜色装饰器
    readOnly: false, //是否开启已读功能
    theme: 'vs-dark', //主题
  })
  codeEditor.value.onDidChangeModelContent(() => {
    props.handleChange(toRaw(codeEditor.value).getValue())
  })
})
</script>
<style scoped></style>
