import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from "vite-plugin-dts";
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: { // 修复Vue文件中的资源路径
          includeAbsolute: false
        }
      }
    }),
    vueJsx(),
    dts({
      outputDir: 'dist/types', // 明确类型文件输出路径
      insertTypesEntry: true
    })
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h } from 'vue';`,
  },
  build: {
    cssCodeSplit: true, // 启用CSS分离
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // 主入口文件
      name: 'StyleShowcase',
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: 'styles/[name][extname]'
      }
    },
    minify: 'terser', // 启用代码压缩
    sourcemap: true, // 生成sourcemap
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
});