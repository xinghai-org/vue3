<template>
    {{ props.value }}
    {{ aa }}
    <div ref="title">哈哈哈</div>
</template>

<script>

import { computed, ref, watchEffect, watch } from 'vue'

export default {
    props: {
        value: Number
    },
    
    setup(props) {
        const aa = ref({ 'name': 'xiaoming', 'age': 18 })
        const bb = ref({ 'name': 'xiaohong', 'age': 18 })
        const cc = ref({ 'name': 'xiaolan', 'age': 18 })

        watch([aa.value,bb.value,cc.value],()=>{
            console.log('修改过')
        })

        const title = ref(null)
        const wach = watchEffect((
        ) => {
            console.log(title.value)
            console.log(props.value)
        })
        setInterval(() => {
            aa.value.age++; // 这里会触发 watch 监听
        }, 1000);
        return {
            props,
            title,
            aa,
            bb,
            cc
        }
    }
}
</script>