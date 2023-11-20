# flex 布局

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

Demo:

<div class="flex-box" :style="{ flexDirection: flexDirection,flexWrap:flexWrap,justifyContent:justifyContent,alignItems:alignItems,alignContent:alignContent}">
<div class="item-1">item-1</div>
<div class="item-2">item-2</div>
<div class="item-3">item-3</div>
<div class="item-4">item-4</div>
<div class="item-5">item-5</div>
</div>

<div class="label-bottom">
    <label class="label-title">flex-direction: </label>
    <label v-for="item in directAtr" :key="index">
        <input type="radio" v-model="flexDirection" :value="item.value"> {{ item.value }}
    </label>
</div>

<div class="label-bottom">
    <label class="label-title">flex-wrap: </label>
    <label v-for="item in wrapAtr" :key="index">
        <input type="radio" v-model="flexWrap" :value="item.value"> {{ item.value }}
    </label>
</div>

<div class="label-bottom">
    <label class="label-title">justify-content: </label>
    <label v-for="item in justifyAtr" :key="index">
        <input type="radio" v-model="justifyContent" :value="item.value"> {{ item.value }}
    </label>
</div>

<div class="label-bottom">
    <label class="label-title">align-items: </label>
    <label v-for="item in alignItemsAtr" :key="index">
        <input type="radio" v-model="alignItems" :value="item.value"> {{ item.value }}
    </label>
</div>

<div class="label-bottom">
    <label class="label-title">align-content: </label>
    <label v-for="item in alignContentAtr" :key="index">
        <input type="radio" v-model="alignContent" :value="item.value"> {{ item.value }}
    </label>
</div>

<script setup>
import { ref } from "vue";

const flexDirection = ref("row")
const flexWrap = ref("nowrap")
const justifyContent = ref("flex-start")
const alignItems = ref("flex-start")
const alignContent = ref("flex-start")

// align-content:
const directAtr = ref([
    { value: "row" },
    { value: "row-reverse" },
    { value: "column" },
    { value: "column-reverse" },
])

const wrapAtr = ref([
    { value: "nowrap" },
    { value: "wrap" },
    { value: "wrap-reverse" },
])

const justifyAtr = ref([
    { value: "flex-start" },
    { value: "flex-end" },
    { value: "center" },
    { value: "space-between" },
    { value: "space-around" },
])


const alignItemsAtr = ref([
    { value: "flex-start" },
    { value: "flex-end" },
    { value: "center" },
    { value: "baseline" },
    { value: "stretch" },
])


const alignContentAtr = ref([
    { value: "flex-start" },
    { value: "flex-end" },
    { value: "center" },
    { value: "space-between" },
    { value: "space-around" },
])


</script>

<style scoped>
.flex-box {
    display: flex;
}

.item-1 {
    padding: 5px;
    background: red;
    height:70px;
    width:70px;
}

.item-2 {
    padding: 5px;
    background: orange;
    height:90px;
    width:90px;
}

.item-3 {
    padding: 5px;
    background: yellow;
    height:100px;
    width:100px;
}

.item-4 {
    padding: 5px;
    background: yellowgreen;
    height:120px;
    width:120px;
}

.item-5 {
    padding: 5px;
    background: purple;
    height:140px;
    width:140px;
}

.label-title{
    display:inline-block;
    width:120px;
}

.label-bottom{
  margin-top:10px
}
</style>
