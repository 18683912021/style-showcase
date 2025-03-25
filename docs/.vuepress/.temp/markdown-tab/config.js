import { CodeTabs } from "F:/practice/style-showcase/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/practice/style-showcase/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/practice/style-showcase/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
