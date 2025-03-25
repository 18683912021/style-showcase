import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'style-showcase',
  description: 'my UI component library',
  base: "/style-showcase/",

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      // { text: '首页', link: '/' },  
      { text: 'Photo-scroller', link: '/Photo-scroller' },
    ],
    sidebar: [
      // { text: '首页', link: '/' },  
      { text: '滚动相册', link: '/Photo-scroller' },
    ],
  }),

  bundler: viteBundler(),
})
