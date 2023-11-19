# flex 布局

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
