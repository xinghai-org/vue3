<template>
    <div class="message" @click="Message">{{ message }}</div>
    <h3>总数:{{ const }}</h3>
    <B  @constChange="constChange"></B>

</template>




<script>
import B from './b.vue'

export default {
    name: 'name',
    components: {
        B
    },
    data() {
        return {
            message: 'hello Word',
            const:0
        }
    },
    methods: {
        Message(event){
            console.dir(event.target)
        },
        constChange(e,constAdd){
            switch (e){
                case 'add':
                    this.const++
                    break;
                case 'sub':
                    if (this.const >= 1){
                        this.const--
                    }
                    break;
                case 'addN':
                    this.const += constAdd
                    break;

            }
        }
    },
}
</script>



<style scoped>
.message {
    color: rgb(255, 0, 0);
    width:100px;
    margin:100px auto;
}
</style>