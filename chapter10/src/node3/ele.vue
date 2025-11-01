<template>
    <input v-model="change"/>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    modelValue:String
})

const emit = defineEmits(['update:modelValue'])

const change = computed({
    get(){
        return props.modelValue
    },
    set(value){
        
        emit('update:modelValue',value)
    }
})

</script>