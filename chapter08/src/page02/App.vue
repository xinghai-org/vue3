<template>
    <button>启动</button>
    <ele v-model:e="message"></ele>
</template>

<script>
import ele from './ele1.vue'
export default{
    data(){
        return{
            message:'abc'
        }
    },
    components:{
        ele
    }
}
</script>