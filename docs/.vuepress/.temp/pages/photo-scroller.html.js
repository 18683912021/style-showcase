import comp from "F:/practice/style-showcase/docs/.vuepress/.temp/pages/Photo-scroller.html.vue"
const data = JSON.parse("{\"path\":\"/Photo-scroller.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1736436745000,\"contributors\":[{\"name\":\"wuyang\",\"username\":\"wuyang\",\"email\":\"1161547386@qq.com\",\"commits\":1,\"url\":\"https://github.com/wuyang\"}]},\"filePathRelative\":\"Photo-scroller.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
