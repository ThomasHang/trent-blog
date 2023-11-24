---
title: gird 布局
tag: css
---

## 基本概念

Grid 布局是二维的排版方式，一次能控制两个方向，通过将容器分成行和列，便可定义容器内元素的位置。

- 显式网格属性
  - grid-template-rows 属性：定义每一行的行高
  - grid-template-columns 属性：定义每一列的列宽
- 隐式网格属性
  - grid-auto-rows
  - grid-auto-columns
  - grid-auto-flow
- 间距属性
  - grid-column-gap
  - grid-row-gap
<!-- - grid-gap: 设置网格项之间的间隙。
- grid-template-areas: 允许通过指定命名的区域来创建布局。这可以使布局更易读和维护。 -->

### repeat()函数

如果觉得定义行高（grid-template-rows）以及列宽（grid-template-columns）的时候重复书写某个值很麻烦，那么就可以考虑使用 repeat()函数。

语法： repeat(`length`, [`value` | `mode`])

- 参数 1length：需要重复的次数
- 参数 2[`value` | `mode`]：需要重复的值，可以是百分比、具体的值或者是某种模式

### fr 关键字

fr 表示比例，1fr 表示占 1 份。

### auto-fill 关键字

有时，单元格的大小是固定的，但是容器的大小不确定。
如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用 auto-fill 关键字表示自动填充。

<div class="container">
  <div v-for="item in gridArr" :key="item" class="item">{{ item }}</div>
</div>

<div>
  <label>
     div数量：
  </label>
  <label>
   <input v-model="gridListLength" />
  </label>
</div>

<div>
  <label>
    repeat：
  </label>
  <label>
   <input v-model="repeatValue" />
  </label>
</div>

<script setup>
import {ref,watchEffect } from "vue"

const gridListLength = ref("5");
const repeatValue=ref()
const gridArr = ref([]);

watchEffect(() => {
  const length = parseInt(gridListLength.value);
  gridArr.value = Array.from({ length }, (_, index) => index + 1);
});

</script>

<style scoped>
 .container {
      display: grid;
      /* grid-template-columns: repeat(3, 1fr); */
      grid-gap: 20px;
    }

    .item {
      background-color: #3498db;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
</style>
