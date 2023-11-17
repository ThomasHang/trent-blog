### css

**输出**

<!-- _你好， {{ msg }}_

_当前计数为： {{ count }}_

<div class="red-div">
{{ count }}
</div>

<button @click="increment">点我！</button> -->
<div class="img-box">
<img src="./../../.vuepress/public/assets/code/css/ValDiFunes_3840x2160.webp" 
:style="{ objectFit: selectedValue }"/>
</div>
<div>
<label>object-fit: </label>
<label v-for="item in objectAtr" :key="index">
  <input type="radio" v-model="selectedValue" :value="item.value"> {{item.value}}
</label>
</div>

  <p>Selected Option: {{ selectedValue }}</p>

<script setup>
import { h, ref,reactive,computed } from 'vue'

const objectAtr = ref([
    { value: "fill" },
    { value: "contain" },
    { value: "cover" },
    { value: "none" },
    { value: "scale-down" },
])
const selectedValue = ref('cover')

// const styleObject =computed(()=>({
//  objectFit: selectedValue.value
// })) 

</script>

<style>

.img-box{
  height:300px;
  width:300px;
  margin:auto;
} 

</style>
