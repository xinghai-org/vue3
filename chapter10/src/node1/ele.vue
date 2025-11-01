<template>
    <div>
        {{ value }}
        {{ message }}
        <h1 class="setup-context" >Hello, Vue!</h1>
        <p>This is a simple Vue component.</p>
        <button @click="message.age++">添加</button>
    </div>
</template>

<script>
import { ref,readonly,computed } from 'vue'

export default {
    props:{
        message:{
            type:Object,
            required: true
        }
    },

    setup(props){
        const value = computed(()=>{
            return `${props.message.name}，${props.message.age}岁`
        })

        return {
            value
        }
    }
};
</script>

<style scoped>

</style>
