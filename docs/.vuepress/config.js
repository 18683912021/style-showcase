import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'style-showcase',
  description: 'my UI component library',
  base: "/style-showcase/",

  theme: defaultTheme({
    logo: '/images/logo.jpg',

    navbar: [
      // { text: '首页', link: '/' },  
      { text: '文档', link: '/Photo-scroller' },
    ],
    sidebar: [
      // { text: '首页', link: '/' },  
      { text: '滚动相册', link: '/Photo-scroller' },
    ],
  }),

  bundler: viteBundler(),
})
