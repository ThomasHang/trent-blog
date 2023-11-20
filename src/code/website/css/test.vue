<template>
    <div class="container">
        <div v-for="item in gridArr" :key="item" class="item">{{ item }}</div>
    </div>

    <label>
        div数量：
        <input v-model="gridListLength" />
    </label>
</template>

<script setup>
import { ref, watchEffect } from 'vue'


const gridListLength = ref("5");
const gridArr = ref([]);

// Watch for changes in gridListLength
watchEffect(() => {
    const length = parseInt(gridListLength.value);
    gridArr.value = Array.from({ length }, (_, index) => index + 1);
});


</script>

<style>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.item {
    background-color: #3498db;
    color: #fff;
    padding: 20px;
    text-align: center;
}
</style>
