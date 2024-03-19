# flex、grid 布局

### Flexbox：

1. **基本概念：**

   - 主轴和交叉轴的概念
   - flex 容器和 flex 项目的概念
     ![flex](/assets/images/learn/flex.png)
     在 flex 容器中默认存在两条轴，水平主轴(main axis) 和垂直的交叉轴(cross axis),
     在容器中的每个单元块被称之为 flex item，每个项目占据的主轴空间为 (main size), 占据的交叉轴的空间为 (cross size)。
     这里需要强调，不能先入为主认为宽度就是 main size，高度就是 cross size，这个还要取决于你主轴的方向，如果你垂直方向是主轴，那么项目的高度就是 main size。

2. **Flex 容器属性：**

   - `display: flex;` 定义一个 Flex 容器
   - `flex-direction` 控制主轴的方向
   - `justify-content` 控制主轴上的对齐方式
   - `align-items` 控制交叉轴上的对齐方式
   - `flex-wrap` 控制项目是否换行

3. **Flex 项目属性：**

   - `flex` 设置项目的放大比例
   - `order` 设置项目的排列顺序
   - `align-self` 控制单个项目在交叉轴上的对齐方式

4. **其他：**
   - Flexbox 的响应式设计
   - Flexbox 和 Grid 的结合使用

::: vue-playground Vue 交互演示

@file App.vue

```vue
<script setup>
import { ref } from "vue";

// const msg = ref("Hello World!");
</script>

<template>
  <div class="flex-box">
   <div>1<div>
   <div>2<div>
   <div>3<div>
   <div>4<div>
  </div>
</template>
<style>
.flex-box{
   display:flex
}
</style>
```

:::

### Grid：

1. **基本概念：**

   - 网格容器和网格项的概念

2. **网格容器属性：**

   - `display: grid;` 定义一个 Grid 容器
   - `grid-template-columns` 和 `grid-template-rows` 定义网格列和行的大小
   - `grid-template-areas` 定义网格区域
   - `grid-gap` 定义网格项之间的间隔

3. **网格项属性：**

   - `grid-column` 和 `grid-row` 定义网格项所占的列和行
   - `grid-area` 定义网格项的区域名称
   - `justify-self` 和 `align-self` 控制单个网格项在网格中的对齐方式

4. **其他：**
   - 自适应网格布局
   - Grid 的自动布局算法

### 练习和实践：

1. 创建一个使用 Flexbox 的简单布局，包括主轴和交叉轴的设置。
2. 创建一个使用 Grid 的网格布局，包括定义列和行。
3. 尝试使用 Flexbox 和 Grid 结合，实现更复杂的布局。

通过实际的代码练习，你将更好地理解 Flexbox 和 Grid 的用法，并能在面试时更自信地回答相关问题。
