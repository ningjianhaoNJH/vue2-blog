<template>
  <header>
    <Row>
      <Col :xs="24" :sm="0" :md="0" :lg="0">
      <div class="mobile-head">
        <img :src="logImg" alt="avatar" class="avatar">
        <Icon type="md-menu" size="50" color="#fff" @click="drawerFlag = true"/>
      </div>
      </Col>
      <Col :sm="24" :xs="0" :md="24" :lg="24">
        <div class="pc-head">
          <div class="pc-head-search"><Input search enter-button placeholder="输入博客文章" class="pc-head-search-input"/></div>
          <div class="pc-head-nav">
            <ul>
              <li class="nav-item" style="margin-right:20px;">
                <span @click="$router.push('/write')">写博客</span>
              </li>
              <li class="nav-item" v-if="!userInfo">
                <span @click="drawerFlag = true">登录/注册</span>
              </li>
              <li class="nav-item" v-else>
                <Dropdown  @on-click="logoutFun">
                  <a href="javascript:void(0)" style="color:#fff;">
                    {{userInfo.username}}
                    <Avatar style="width:42px;" :src="userInfo.avatar"/>
                  </a>
                  <DropdownMenu slot="list">
                    <DropdownItem name="1">退出登录</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
    <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="drawerFlag">
      <reg-login @loginSucc="drawerTypeFun"></reg-login>
    </Drawer>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import leftAside from './leftAside.vue';
import regLogin from './regLogin.vue';
import logImg from '../../../assets/logo.png';

export default {
  name: 'lay-header',
  computed: {
    ...mapGetters({
      userInfo: 'userInfo',
    }),
  },
  data() {
    return {
      logImg,
      drawerFlag: false,
    };
  },
  components: {
    leftAside,
    regLogin,
  },
  methods: {
    drawerTypeFun(v) {
      this.drawerFlag = v
    },
    logoutFun(n) {
      switch (n) {
        case '1':
          this.$store.dispatch('logoutHandler');
          break;
        default:
          console.log('默认')
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
  header {
    .mobile-head {
      display: flex;
      justify-content: space-between;
      padding: 8px 25px;
      .avatar {
        width: 45px;
        height: 45px;
        position: relative;
      }
    }
    .pc-head {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      line-height: 66px;
      .pc-head-search {
        line-height: 66px;
        .pc-head-search-input {
          top: 17px;
        }
      }
      .pc-head-nav {
        & li.nav-item {
          display: inline-block;
          color: #fff;
          & span {
            font-size: 16px;
            padding: 3px 8px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .pc-head {
      padding: 0 20px;
    }
  }
  /*@media screen and (min-width: 768px) {*/

  /*}*/
</style>
