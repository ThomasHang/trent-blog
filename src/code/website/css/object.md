---
title: object-fit、object-position用法
icon: code
star: true
sticky: 20
breadcrumb: false
---

### object-fit 是一个用于控制图像或视频在其容器中的尺寸和裁剪方式的 CSS 属性。

### object-position 用于指定图像或视频在其容器中的位置。

- fill: 默认值。图像将拉伸以填充容器，可能会导致图像变形。
- contain: 图像将按比例缩小或放大，以适应容器，保持纵横比。可能在容器内留-有空白。
- cover: 图像将按比例缩放，以填充容器，并可能被裁剪，以适应容器。
- none: 图像将保持其原始尺寸，可能会溢出容器。
- scale-down: 图像将按比例缩小，以适应容器，但不会放大图像，以保持其原始大小。

<div class="img-box">
    <img src="./../../../.vuepress/public/assets/code/css/01.jpg"
        :style="{ objectFit: selectedValue, objectPosition: `${leftSelectedValue} ${rightSelectedValue}` }" />
</div>
<div>
    <label class="label-group">object-fit: </label>
    <label v-for="item in objectAtr" :key="index">
        <input type="radio" v-model="selectedValue" :value="item.value"> {{ item.value }}
    </label>
</div>

<div class="label-bottom">
    <label class="label-group">object-position: </label>
    <label v-for="item in leftPos" :key="index">
        <input type="radio" v-model="leftSelectedValue" :value="item.value"> {{ item.value }}
    </label>
    <span class="line"></span>
    <label v-for="item in rightPos" :key="index">
        <input type="radio" v-model="rightSelectedValue" :value="item.value"> {{ item.value }}
    </label>
</div>

  <!-- <p>object-fit: {{ selectedValue }}</p>
  <p>object-position:{{leftSelectedValue}}</p> -->

<script setup>
import { h, ref,reactive,computed } from 'vue'

const objectAtr = ref([
    { value: "fill" },
    { value: "contain" },
    { value: "cover" },
    { value: "none" },
    { value: "scale-down" },
])

const leftPos=ref([
    { value: "left" },
    { value: "center" },
    { value: "right" },
])
const rightPos=ref([
   { value: "top" },
    { value: "center" },
    { value: "bottom" },
])

const selectedValue = ref('cover')
const leftSelectedValue= ref("left")
const rightSelectedValue= ref("top")


// const styleObject =computed(()=>({
//  objectFit: selectedValue.value
// })) 

</script>

<style scoped>

.img-box {
    width: 400px;
    /* margin:auto;
  overflow:hidden */
    margin: 0 auto 30px;

}

img {
    width: 200px;
    height: 200px;
    border: 4px solid #ddd;
}

.label-group {
    display:inline-block;
    width:120px;
}

/* .label-group {
    display: flex;
    align-items: center;
}

.label-group label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
} */
.label-bottom{
  margin-top:10px
}

.line {
    border-right: 3px solid #383a42;
    margin: 0 5px
}

</style>
