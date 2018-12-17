<template>
  <div id="app" style="height:100vh;">
    <router-view></router-view>
  </div>
</template>

<style>
  @import 'styles/common.css';
</style>
<script>
  export default {
    name: "app",
    mounted() {
      this.$Message.config({
        top: 100,
      });
    },
  }
</script>
