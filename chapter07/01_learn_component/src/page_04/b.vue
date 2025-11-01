<template>
    <button @click="this.$emit('constChange','sub')" >-1</button>
    <button @click="this.$emit('constChange','add')" >+1</button>
    <input type='text' v-model.number="constAdd">
    <button @click="emit_const" >+n</button>
</template>




<script>
export default {
    emits:['constChange'],
    components: {},
    data() {
        return {
            message: 'hello Word',
            constAdd:''
        }
    },
    methods: {
        Message(event){
            console.dir(event.target)
        },
        emit_const(){
            if(typeof this.constAdd == 'number'){
                this.$emit('constChange','addN',this.constAdd)
            }
            this.constAdd=''
        }
    },
}
</script>



<style>
</style>