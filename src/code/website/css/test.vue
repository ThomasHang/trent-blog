<template>
 
</template>

<script setup>
import { h, ref } from 'vue'

const objectAtr = ref([
    { value: "fill" },
    { value: "contain" },
    { value: "cover" },
    { value: "none" },
    { value: "scale-down" },
])
const selectedValue = ref('none')


</script>

<style>
.red-div {
    color: red;
}

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
    display: flex;
    align-items: center;
}

.label-group label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
}

.line {
    border-right: 3px solid #383a42;
    margin: 0 5px
}



</style>
