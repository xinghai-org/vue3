<template>
    <ul>
        <li v-for="(i,index) in 9" key="index" @click="function(event){event.target.remove()}" >商品信息{{ i }}</li>
    </ul>
</template>




<script>
export default {}
</script>



<style>
</style>