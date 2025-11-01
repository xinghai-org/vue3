<template>
    <div class="home-content" >
        HomeContent
    </div>
</template>




<script>
import emitter from './utils/enentbus'

export default {
    create(){
        emitter.on('why',(info)=>{
            console.log('why',info)
        });
        emitter.on('kobe',(info)=>{
            console.log('why',info)
        })
    }
}
</script>



<style>

</style>