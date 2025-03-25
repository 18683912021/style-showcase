import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx({
    include: [/\.jsx$/, /\.tsx$/, /\.js$/, /\.vue$/],
  })],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h } from 'vue';`,
  },
  build: {
    cssCodeSplit: false, // 启用 CSS 分离
    lib: {
      entry: 'src/index.js', // 指向组件库的入口文件
      name: 'StyleShowcase', // 组件库的全局变量名，用于 UMD 构建
      fileName: (format) => `style-showcase.${format}.js`, // 输出的文件名
    },
    rollupOptions: {
      // 确保外部化处理 Vue，不将其打包进组件库
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue', // 对应外部依赖 Vue 的全局变量名
          assetFileNames: '[name].[hash].js',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 确保 Less 文件能正确解析
      },
    },
  },
});
