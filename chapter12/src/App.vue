<script setup >
import { RouterView } from 'vue-router';
import dataEgg from "./data.json"

</script>

<template>
  <nav>
    <RouterLink to="/" >主页</RouterLink> |
    <RouterLink 
    v-for="dataEgg in dataEgg"
    :key="dataEgg.id"
    :to="`/eggs/${dataEgg.type}`"
    >
  {{ dataEgg.name }} |
  </RouterLink>
  </nav>
  <RouterView></RouterView>
</template>