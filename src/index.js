// src/index.js
import PhotoScroller from './components/Photo-scroller.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';

// 按需导出
export { ComponentA, ComponentB, ComponentC };

// 全局安装插件（如果需要）
export default {
  install(Vue) {
    Vue.component('PhotoScroller', PhotoScroller);
  },
};
