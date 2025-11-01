<template>
  <!-- 头部内容 -->
  <div class="header">
    <h4>Header</h4>
    <h4>NavBar</h4>
  </div>
  <!-- 页面中间内容 -->
  <div class="main">
    <h4>Banner轮播图内容</h4>
    <ul>
      <li
        v-for="(i, index) in 9"
        :key="index"
        @click.stop="
          function (event) {
            console.dir(event.target.remove());
          }
        "
      >
        商品信息{{ i }}
      </li>
    </ul>
  </div>
  <!-- 页面尾部内容 -->
  <div class="footer">
    <h4>Footer</h4>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      abc: "hahaha",
    };
  },
};
</script>

<style>
.header,
.main,
.footer {
  border: 1px solid #999;
  margin-bottom: 4px;
}
</style>