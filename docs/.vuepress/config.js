/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2022-11-10 13:54:16
 * @LastEditors: ThomasHang 11939838031@qq.com
 * @LastEditTime: 2023-03-07 00:10:19
 * @FilePath: \trent-blog\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineUserConfig, defaultTheme } from 'vuepress';
// import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
// import {ss} from "vuepress-plugin-mermaidjs"

module.exports = {
  title: '加油， 打工人 ！',
  description: 'Hello, my friend!',
  base: '/trent-blog/',
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-mermaidjs',
    '@vuepress/plugin-medium-zoom',
  ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关于',
        link: '/about/',
      },
      {
        text: '随笔',
        link: '/essay/',
      },
      {
        text: '工作',
        link: '/work/',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
    ],
    sidebar: {
      '/essay/': [
        {
          text: '随便',
          children: ['/essay/title1.md', '/essay/title2.md'],
        },
      ],
      '/work/': [
        {
          children: [
            { text: 'react-window虚拟渲染', link: '/work/record/react-window' },
            { text: 'redux', link: '/work/learn/redux.md' },
          ],
        },
      ],
    },
  }),
};
