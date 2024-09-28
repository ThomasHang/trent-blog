import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  // "/demo/",
  {
    text: '代码笔记',
    icon: 'bijiben',
    children: [
      { text: '代码笔记', icon: 'code', link: '/code/' },
      // {
      //   text: "javascript",
      //   icon: "code",
      //   link: "/code/javascript/basic",
      // },
    ],
  },
  {
    text: '软件教程',
    icon: 'soft',
    prefix: '/software/',
    children: [
      {
        text: '软件教程',
        icon: 'software',
        link: '',
        activeMatch: '^/software/$',
      },
    ],
  },
  {
    text: '健身',
    icon: 'gym',
    prefix: '/gym/',
    children: [
      {
        text: '健身',
        icon: 'gym',
        link: '',
        activeMatch: '^/gym/$',
      },
    ],
  },
  {
    text: '随笔',
    icon: 'read',
    prefix: '/read/',
    children: [
      {
        text: '随笔',
        icon: 'read',
        link: '',
        activeMatch: '^/read/$',
      },
    ],
  },
  {
    text: 'todo',
    icon: 'todo',
    link: '/todo/',
  },
]);
