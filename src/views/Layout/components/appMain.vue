<template>
  <main class="pc-main">
    <aside>
      <left-aside></left-aside>
    </aside>
    <section>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <aside>
      <right-aside v-if="$route.path === '/blog'"></right-aside>
      <right-aside2 v-else></right-aside2>
    </aside>
  </main>
</template>

<script>
  import leftAside from './leftAside'
  import rightAside from './rightAside'
  import rightAside2 from './rightAside2'

  export default {
    name: "app-main",

    components: {
      leftAside,
      rightAside,
      rightAside2
    },

    methods: {}
  }
</script>

<style lang="less" scoped>
  .pc-main {
    display: flex;
    justify-content: center;

    aside {
      width: 250px;
    }
    section {
      max-width: 1000px;
      flex: 1;
      margin: 0 5px;
      background: #fff;
      padding-bottom: 16px;
    }
  }

  @media screen and (max-width: 1200px) {
    .pc-main {
      section {
        flex: 2;
      }

    }
  }

  @media screen and (max-width: 768px) {
    aside {
      display: none;
    }
  }
</style>
