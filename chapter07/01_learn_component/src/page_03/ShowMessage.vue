<template>
    <div class="show-message">
        <h4>{{ title }}</h4>
        <div>{{ content }}</div>
    </div>
</template>




<script>
export default {
    name: 'name',
    components: {},
    data() {
        return {
            props:['title','content']
        }
    },
}
</script>



<style>
.message {
    color: rgb(255, 0, 0);
    width:100px;
    margin:100px auto;
}
</style>