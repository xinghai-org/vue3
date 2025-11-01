<template>
    <Table @changeIndex="changeIndex" :titles="titles"></Table>
    <h2>{{ page[pageIndex] }}</h2>
    <button @click="this.titles.push('啥')" >Add</button>
</template>




<script>
import Table from './TableContral.vue'
export default {
    components:{
        Table
    },
    data(){
        return{
            pageIndex:0,
            titles:['衣服','鞋子','裤子'],
            page:['页面1','页面2','页面3','页面4']
        }
    },
    methods:{
        changeIndex(index){
            this.pageIndex = index
        }
    }
}
</script>



<style>


</style>