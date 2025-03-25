import { defineClientConfig } from '@vuepress/client';
import PhotoScroller from '../../src/components/Photo-scroller/index.tsx';

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component('PhotoScroller', PhotoScroller);
  },
});