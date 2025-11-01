<template>
    <ele :message="value"></ele>
    <button @click="value.age++">添加</button>
</template>

<script>
import ele from './ele.vue'
export default{
    components:{
        ele
    },
    data(){
        return{
            value:{
                'name':"小明",
                'age':18
            }
        }
    }
}

</script>