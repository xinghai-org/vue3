<template>
    <div>
        APP
        <About></About>
        <Home></Home>
    </div>
</template>




<script>
import About from './About.vue'
import Home from './Home.vue'

export default {
    components:{
        About,
        Home
    }
}
</script>



<style>
div{
    border:1px solid #ddd;
    width:400px;
    margin:10px;
}
</style>