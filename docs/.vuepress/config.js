/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2022-11-10 13:54:16
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-02-07 15:50:08
 * @FilePath: \trent-blog\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineUserConfig, defaultTheme } from "vuepress";

// export default defineUserConfig({
//   lang: "zh-CN",
//
//   // theme: defaultTheme({
//   //   // 默认主题配置
//   //   navbar: [
//   //     {
//   //       text: "首页",
//   //       link: "/",
//   //     },
//   //   ],
//   //   sidebar: [
//   //     {
//   //       text: "home",
//   //       link: "/home",
//   //     },
//   //   ],
//   // }),
// });

module.exports = {
  title: "你好， VuePress ！",
  description: "Hello, my friend!",
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      // {
      //   text: "首页",
      //   link: "/",
      // },
      {
        text: "首页",
        link: "/",
      },
      {
        text: "关于",
        link: "/about/",
      },
      // NavbarGroup
      {
        text: "Group",
        children: ["/group/foo.md", "/group/bar.md"],
      },
      // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
    sidebar: [
      // SidebarItem
      {
        text: "Foo",
        link: "/foo/",
        children: [
          // SidebarItem
          {
            text: "github",
            link: "https://github.com",
            children: [],
          },
          // 字符串 - 页面文件路径
          // '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
  }),
};
