/*
 * @Author: ThomasHang 11939838031@qq.com
 * @Date: 2023-11-18 19:39:48
 * @LastEditors: ThomasHang 11939838031@qq.com
 * @LastEditTime: 2023-12-07 23:08:34
 * @FilePath: /trent-blog/src/.vuepress/sidebar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sidebar } from 'vuepress-theme-hope';

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
  '/code/': [
    '',
    {
      text: '工作记录',
      icon: 'laptop-code',
      prefix: 'work/',
      children: [
        // "work",
        'gitlab_ci',
        'react_window',
        'clipbord',
        'react_toolkit',
        '浏览器',
        'flex和grid布局',
        'shortcut',
        '前端网页打开电脑exe应用',
        'antd3自定义表单',
      ],
    },
    // {
    //   text: "前端开发",
    //   icon: "code",
    //   children: [],
    // },
    {
      text: '面试记录',
      prefix: 'interview/',
      children:[
        "面试总结",
        "面试自我介绍"
      ]
    },
    {
      text: '语言',
      icon: 'language',
      prefix: 'language/',
      children: [
        'js/',
        'js/basic',
        'js/interview',
        'js/promise',
        'node/',
        'node/buffer',
        'node/fs模块',
      ],
    },
    // "css",
    // {
    //   text: "css",
    //   icon: "language",
    //   // prefix: "css/",
    //   children: ["object"],
    // },
  ],

  '/code/website/css/': [
    '',
    'object/',
    'flex/',
    'grid/',
    // {
    //   text: '快速上手',
    //   icon: 'creative',
    //   collapsible: false,
    //   prefix: 'guide/',
    //   children: [
    //     '',
    //     'selector',
    //     'declaration',
    //     'import',
    //     'cascade',
    //     'box',
    //     'common',
    //   ],
    // },
  ],
  '/software/': [
    '',
    'ssh/',
    // "vscode/",
    // "chrome",
    'git/',
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
