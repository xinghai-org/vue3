<template>
    <div class="message" @click="Message">{{ message }}</div>
</template>




<script>
export default {
    name: 'name',
    components: {},
    data() {
        return {
            message: 'hello Word',
        }
    },
    methods: {
        Message(event){
            console.dir(event.target)
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