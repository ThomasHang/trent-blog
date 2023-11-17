import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": [
  //   "",
  //   {
  //     text: "如何使用",
  //     icon: "laptop-code",
  //     prefix: "demo/",
  //     link: "demo/",
  //     children: "structure",
  //   },
  //   {
  //     text: "文章",
  //     icon: "book",
  //     prefix: "posts/",
  //     children: "structure",
  //   },
  //   "intro",
  //   "slides",
  // ],
  "/code/": [
    "",
    "css",
    {
      text: "工作记录",
      icon: "laptop-code",
      prefix: "work/",
      children: [
        // "work",
        "gitlab_ci",
        "react_window",
        "clipbord",
        "react_toolkit",
        "浏览器",
        "flex和grid布局",
      ],
    },
    // {
    //   text: "前端开发",
    //   icon: "code",
    //   children: [],
    // },
    {
      text: "语言",
      icon: "language",
      prefix: "language/",
      children: ["js/", "js/basic"],
    },
    // {
    //   text: "css",
    //   icon: "language",
    //   prefix: "css/",
    //   // children: ["css/"],
    // },
  ],
  "/software/": [
    "",
    "ssh/",
    // "vscode/",
    // "chrome",
    "git/",
    // "comsol/",
    // {
    //   text: "工具软件",
    //   icon: "tool",
    //   prefix: "tool/",
    //   children: [
    //     "",
    //     "power-toys",
    //     "powershell",
    //     {
    //       text: "Terminal",
    //       icon: "shell",
    //       link: "terminal/",
    //       prefix: "terminal/",
    //       children: ["get-started", "settings"],
    //     },
    //   ],
    // },
    // "apache",
    // "nginx",
    // "mysql/",
  ],
  // "code/work/": "structure",
});
