<!-- v-model的实现原理 -->
<template>
    {{ value }}
    <input v-model="value" />
</template>

<script>

    export default{
        props:{e:String},
        emits:['update:e'],
        computed:{
            value:{
                get(){
                    return this.e
                },
                set(value){
                    this.$emit('update:e',value)
                }
            }
        }
    }
</script>