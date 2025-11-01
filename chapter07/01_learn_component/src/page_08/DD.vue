<template>
  <div class="DD" >
    <div v-for="(value,key) in names" :key class="dd">{{ value }}</div>
  </div>
</template>




<script>
export default {
  props:{
    names:{
      type:Array,
      default:[]
    }
  }
}
</script>



<style scoped>
.DD{
  
  display:flex;
  flex-wrap:wrap;
  border:1px solid #ddd;
}
.dd {
  margin-right:10px;
  width:100px;
  background-color: #ddd;
}
</style>