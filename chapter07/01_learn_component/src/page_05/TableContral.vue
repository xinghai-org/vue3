<template>
    <div class='tab'>
        <div v-for="(value, key) in titles" :key class="item" :class="{ active: cIndex == key }"
            @click="itemClick(key)"><span>{{ value }}</span></div>

    </div>
</template>




<script>
export default {
    emits: ['changeIndex'],
    props: {
        titles: {
            type: Array,
            required:true,
            default: ['a', 'b', 'c']
        }
    },
    data() {
        return {
            cIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.cIndex = index
            this.$emit('changeIndex', index)
        }
    }
}
</script>



<style>
.tab {
    display: flex;
}
.item{
    flex:1;
    text-align:center;
}
.item.active{
    color:red;
}
.item.active span{
    border-bottom:2px solid red;
}
</style>