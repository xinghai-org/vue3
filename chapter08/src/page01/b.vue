<template>
    <button @click="start">点击启动</button>
    {{ i }}
</template>
<script>
export default{
    name:'b',
    data(){
        return{
            i : 0
        }
    },
    methods:{
        start(){
            setInterval(()=>{this.i++},1000)
        }
    }
}
</script>