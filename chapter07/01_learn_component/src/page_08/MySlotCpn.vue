<template>
    <div>
    <slot :name="slot1" >插槽1</slot>
    <br>
    <slot :name="slot2" >插槽2</slot>
    </div>
</template>




<script>

export default {
    props:{
        slot1:{
            type:String
        },
        slot2:{
            type:String
        }
    }
}
</script>



<style>

</style>