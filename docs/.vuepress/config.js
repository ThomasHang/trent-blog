/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2022-11-10 13:54:16
 * @LastEditors: ThomasHang 11939838031@qq.com
 * @LastEditTime: 2023-03-22 00:04:03
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
    // '@vuepress/plugin-back-to-top',
    // 'vuepress-plugin-mermaidjs',
    // '@vuepress/plugin-medium-zoom',
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
        text: '工作记录',
        link: '/work/',
      },
      {
        text: '前端',
        // link: '/front/',
        link: '/front/react/01.md',
      },
      {
        text: '阅读',
        link: '/read/',
      },
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
    ],
    sidebar: {
      '/essay/': [
        {
          // text: '随便',
          children: [
            {
              text: '2023年计划',
              link: '/essay/2023_plan.md',
            },
          ],
        },
      ],
      '/work/': [
        {
          children: [
            { text: 'react-window虚拟渲染', link: '/work/record/react-window' },
            // { text: 'redux', link: '/work/learn/redux.md' },
            // { text: '聊天室', link: '/work/record/chat.md' },
          ],
        },
      ],
      '/front/': [
        {
          text: 'html',
        },
        {
          text: 'css',
        },
        {
          text: 'es6',
        },
        {
          text: 'react',
          collapsible: true,
          children: [
            { text: '生命周期', link: '/front/react/01.md' },
            { text: 'redux', link: '/front/react/02.md' },
          ],
        },
        {
          text: 'vue',
        },
        {
          text: '前端部署',
        },
        {
          text: 'typescript',
        },
      ],
      '/read/': [
        { children: [{ text: '认识觉醒', link: '/read/renzhijuexing.md' }] },
      ],
    },
  }),
};
