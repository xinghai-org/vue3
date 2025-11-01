<template>
    <div class="message" @click="Message">{{ message }}</div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
</template>




<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
    name: 'name',
    components: {
        Header,
        Main,
        Footer
    },
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