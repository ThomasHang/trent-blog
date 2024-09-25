import { sidebar } from 'vuepress-theme-hope';
import { code } from './code';
import { software } from './software';
import { website } from './website';

export default sidebar({
  '/code/': code,
  "/code/website/css/": "structure",
  "/code/website/html/": "structure",
  "/code/website/": website,
  '/software/': software,
});


