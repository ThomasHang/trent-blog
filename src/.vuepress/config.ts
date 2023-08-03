/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-08-02 14:36:29
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-08-03 17:24:42
 * @FilePath: \trent-blog\src\.vuepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Trent Blog",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
