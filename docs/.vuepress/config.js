import { defineUserConfig, defaultTheme } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

module.exports = {
  title: "加油， 打工人 ！",
  description: "Hello, my friend!",
  base: "/trent-blog/",
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    mdEnhancePlugin({
      mermaid: true,
    }),
  ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "随笔",
        link: "/essay/",
      },
      {
        text: "工作记录",
        link: "/work/",
      },
      {
        text: "前端",
        // link: '/front/',
        link: "/front/react/01.md",
      },
      {
        text: "阅读",
        link: "/read/",
      },
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
    ],
    sidebar: {
      "/essay/": [
        {
          // text: '随便',
          children: [
            {
              text: "2023年计划",
              link: "/essay/2023_plan.md",
            },
          ],
        },
      ],
      "/work/": [
        {
          children: [
            "/work/record/react-window",
            "/work/record/canvas_images",
            "/work/gitlab_ci",
            // { text: 'redux', link: '/work/learn/redux.md' },
            // { text: '聊天室', link: '/work/record/chat.md' },
          ],
        },
      ],
      "/front/": [
        {
          text: "html",
        },
        {
          text: "css",
        },
        {
          text: "javascript",
          collapsible: true,
          children: ["/javascript/promise.md"],
        },
        {
          text: "es6",
        },
        {
          text: "react",
          collapsible: true,
          children: ["/front/react/01.md", "/front/react/02.md"],
        },
        {
          text: "vue",
        },
        {
          text: "前端部署",
        },
        {
          text: "typescript",
        },
      ],
      "/read/": [
        // {
        //   text: "读书笔记",
        //   link: "/read",
        // },

        {
          text: "测试",
          children: ["/read/renzhijuexing.md"],
        },
      ],
    },
  }),
};
