<template>
    <ele v-model="abc"></ele>
    {{ abc }}
    <button @click="add" >添加</button>
</template>

<script setup>
import ele from './ele.vue'
import {ref} from 'vue'
const age = ref(0)
const abc = ref("0")
function add(){
    age.value++
}
</script>