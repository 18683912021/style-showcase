// src/index.js
import type { App } from 'vue';
import PhotoScroller from './components/Photo-scroller';

// 按需导出
export { PhotoScroller};

// 全局安装插件（如果需要）
export default {
  install(app:App) {
    app.component('PhotoScroller', PhotoScroller);
  },
};
