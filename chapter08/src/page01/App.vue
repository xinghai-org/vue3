<template>
    <div>
        <button v-for="(tabName, index) in tabs" :key="index" :class="{ top: tabName === activeTab }"
            @click="activeTab = tabName">
            {{ tabName }}
        </button>
        <keep-alive>
            <component :is="activeTab" />
        </keep-alive>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import loding from './loding.vue';

// 异步组件
const a = defineAsyncComponent({loader:() => import('./a.vue'),loadingComponent:loding});
const b = defineAsyncComponent({loader:() => import('./b.vue'),loadingComponent:loding});
const c = defineAsyncComponent({loader:() => import('./c.vue'),loadingComponent:loding});
const d = defineAsyncComponent({loader:() => import('./d.vue'),loadingComponent:loding});

export default {
    components: { a, b, c, d, loding },
    data() {
        return {
            tabs: ["a", "b", "c", "d"],
            activeTab: "a"
        };
    }
};
</script>

<style scoped>
button {
    margin: 10px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
}

.top {
    background: red;
}
</style>
