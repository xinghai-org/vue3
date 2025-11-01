<template>
<div>
  <DD>
      <template :="slotProps">
        <span >{{ slotProps.key }}</span>
      </template>
  </DD>
</div>
</template>




<script>
import DD from './DD.vue'

export default {
  components:{
    DD
  },
  data(){
    return{
      names:['haha','ee','aa','oo','hh','qq']
    }
  }
}
</script>



<style>

</style>

