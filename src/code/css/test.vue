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
</style>
