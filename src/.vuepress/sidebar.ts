/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-08-02 14:36:29
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-08-03 16:53:32
 * @FilePath: \trent-blog\src\.vuepress\sidebar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    {
      text: "工作记录",
      icon: "laptop-code",
      children:["work/","work/gitlab_ci","work/react-window.md"]
    }
  ]
});
