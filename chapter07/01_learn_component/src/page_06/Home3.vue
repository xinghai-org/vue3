<template>
    <div>{{ li }}-{{ leng }}
        <Home4></Home4>
    </div>
    
</template>




<script>
import Home4 from './Home4.vue'
export default {
    components:{
        Home4
    },
    inject:['li','leng']
}
</script>



<style>

</style>