<template>
  <Layout class="layout">
    <layout-header class="layout-head"></layout-header>
    <app-main class="layout-main"></app-main>
    <layout-footer class="layout-foot"></layout-footer>
    <BackTop class="to-top">
      <Icon type="ios-arrow-up" color="#fff"/>
      <div class="top">返回顶端</div>
    </BackTop>
  </Layout>
</template>

<script>
  import {AppMain, layoutHeader, layoutFooter} from './components/index.js';
  export default {
    name: "layout",
    components: {
      AppMain,
      layoutHeader,
      layoutFooter
    },

    data() {
      return {
        uname: ''
      }
    },
    created() {
      this.$store.commit('SET_USER_INFO', window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : null)
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    flex-wrap: wrap;
    padding-top: 65px;
    .layout-head {
      height: 65px;
      top: 0;
      position: fixed;
      z-index: 8888;
      width: 100vw;
      background: #2db7f5;
    }
    .layout-main {
      flex: 10
    }
    .layout-foot {
      height: 65px;
    }
    .to-top {
      background: rgba(80, 90, 110, .5);
      transform: scale(0.8, 0.85);
      padding: 3px 4px;
      .top {
        color: #fff;
      }
    }
  }
</style>
