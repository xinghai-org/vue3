<template>
    <div class="APP">
        APP
        <Home1 class="div"></Home1>
        <button @click="addFriend">addFriend</button>
        <Home4></Home4>
    </div>
</template>

<script>
import Home1 from './Home1.vue'
import { computed } from 'vue'
import Home4 from './Home4.vue'
export default {
    data() {
        return {
            aaa: ['a', 'b', 'c'],
        }
    },
    components: {
        Home1,
        Home4
    },
    provide() {
        return {
            li: this.aaa,
            leng: computed(() => this.aaa.length)
        }
    },
    methods: {
        addFriend() {
            this.aaa.push('tony')
        }
    }
}
</script>
