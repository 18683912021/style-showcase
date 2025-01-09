import { defineClientConfig } from '@vuepress/client';
import PhotoScroller from '../../src/components/Photo-scroller/Photo-scroller.vue';

export default defineClientConfig({
  enhance({ app }) {
    // 全局注册组件
    app.component('PhotoScroller', PhotoScroller);
  },
});