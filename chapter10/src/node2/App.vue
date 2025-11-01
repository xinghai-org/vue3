<template>
    <ele :value></ele>
    <button @click="add" >添加</button>
</template>

<script>
    import ele from './ele.vue'
    export default{
        components:{
            ele
        },
        data(){
            return{
                value:0
            }
        },
        methods:{
            add(){
                this.value++
            }
        }
    }
</script>