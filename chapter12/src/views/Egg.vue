<template>
    <div>
        <!-- 使用从 setup 返回的 router 变量 -->
        {{ dataEgg }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue'
import Egg from '../data.json'

const router = useRoute();
const dataEgg = computed({
    get() {
        return Egg.find((dataegg) => {
            return dataegg.type === router.params.egg
        })
    }
})



console.log(router); // 正确获取 router 实例
</script>