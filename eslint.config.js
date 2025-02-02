const { flatVueConfig } = require('@vue/eslint-config-typescript')
const prettierConfig = require('@vue/eslint-config-prettier')

module.exports = [
  ...flatVueConfig,
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    rules: {
      // 通用 JavaScript 规则
      'no-unused-vars': 'warn',
      'consistent-return': 'error',
      // Vue 特定规则
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'error',
      // TypeScript 相关规则
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  ...prettierConfig,
]
