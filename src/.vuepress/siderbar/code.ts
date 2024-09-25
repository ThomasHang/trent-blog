import { arraySidebar } from 'vuepress-theme-hope';

export const code = arraySidebar([
  '',
  {
    text: '工作记录',
    icon: 'laptop-code',
    prefix: 'work/',
    children: [
      // "work",
      // 'gitlab_ci',
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
  {
    text: '面试记录',
    prefix: 'interview/',
    children: ['面试总结', '面试自我介绍'],
  },
  {
    text: '前端开发',
    children: [
      "website/",
    ]
  },
  // {
  //   text: '前端开发',
  //   icon: 'language',
  //   prefix: 'language/',
  //   children: [
  //     "website/",

  //     'js/',
  //     'js/basic',
  //     'js/interview',
  //     'js/promise',
  //     'node/',
  //     'node/buffer',
  //     'node/fs模块',
  //   ],
  // },
  // "css",
  // {
  //   text: "css",
  //   icon: "language",
  //   // prefix: "css/",
  //   children: ["object"],
  // },

  // "code/work/": "structure",
]);

// '/code/website/css/': [
//   '',
//   'object/',
//   'flex/',
//   'grid/',
//   // {
//   //   text: '快速上手',
//   //   icon: 'creative',
//   //   collapsible: false,
//   //   prefix: 'guide/',
//   //   children: [
//   //     '',
//   //     'selector',
//   //     'declaration',
//   //     'import',
//   //     'cascade',
//   //     'box',
//   //     'common',
//   //   ],
//   // },
// ],
