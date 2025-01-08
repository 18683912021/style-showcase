import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'style-showcase',
  description: 'my UI component library',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      // { text: '首页', link: '/' },  
       { text: '指南', link: '/get-started' },
      ],
      sidebar: [
        { text: '首页', link: '/' },  
         { text: '指南', link: '/get-started' },
        ],
  }),

  bundler: viteBundler(),
})
