<template>
    <HelloWord :="message" ></HelloWord>
    <HelloWord :title="title" :content="content" ></HelloWord>
    <HelloWord title="我是标题" content="我是内容" ></HelloWord>
</template>




<script>
import HelloWord from './HelloWorld.vue'
export default {
    components: {
        HelloWord
    },
    data() {
        return {
            title:'我是标题,title',
            content:'我是内容,content',
            message: {
                title:'我是标题,message.title',
                content:123
            },
        }
    },
}
</script>