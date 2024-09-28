import { sidebar } from "vuepress-theme-hope";
import { code } from "./code";
import { software } from "./software";
import { website } from "./website";

export default sidebar({
  "/code/website/css/": "structure",
  "/code/website/javascript/": "structure",
  "/code/website/html/": "structure",
  "/code/website/": website,
  // "/code/work/": "structure",

  "/code/": code,
  "/code/work": "structure",


  "/software/": software,

  // "/": ["", "code/", "software/"],
});
