import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineUserConfig({
  lang: "zh-CN",
  title: "style-showcase",
  description: "my UI component library",
  base: "/style-showcase/",
  theme: defaultTheme({
    logo: "/images/logo.jpg",
    navbar: [
      { text: '首页', link: '/' },
      { text: "文档", link: "/Photo-scroller" },
    ],
    sidebar: [
      // { text: '首页', link: '/' },
      { text: "滚动相册", link: "/Photo-scroller" },
    ],
  }),
  themeConfig: {
    yuu: {
      // 禁用用户切换浅色主题（强制深色）
      disableDarkTheme: true, // 确保深色模式可用
      disableThemeIgnore: true, // 禁止用户忽略强制主题
      defaultDarkTheme: true, // 默认启用深色（部分主题版本支持）
      hideThemeButton: true,
      // 若主题不支持直接配置，可强制所有页面使用深色
      colorThemes: ["dark"], // 仅保留深色主题
    },
  },

  bundler: viteBundler({
    viteOptions: {
      plugins: [vueJsx()],
    },
  }),
});
