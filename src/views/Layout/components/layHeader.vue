<template>
    <header>
        <Row>
            <Col :xs="24" :sm="0" :md="0" :lg="0">
                <div  class="mobile-head">
                    <img :src="logImg" alt="avatar" class="avatar">
                    <Icon type="md-menu" size="50" color="#fff" @click="drawerFlag = true"/>
                </div>
            </Col>
            <Col :sm="24" :xs="0" :md="24" :lg="24">
                <div class="pc-head">
                    <div class="pc-head-search"><Input search enter-button placeholder="输入博客文章" class="pc-head-search-input"/></div>
                    <div class="pc-head-nav">
                        <ul>
                            <li>
                                <span @click="$router.push('/write')">写博客</span>
                            </li>
                            <li>
                                <span @click="loginFun('login')">登录</span>
                                <span @click="loginFun('register')">注册</span>
                            </li>
                            <li> <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /></li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
        <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="drawerFlag">
            <left-aside v-if="false"></left-aside>
            <reg-login :drawerType="drawerType"></reg-login>
        </Drawer>
    </header>
</template>

<script>
    import leftAside from './leftAside';
    import regLogin from './regLogin';
    import logImg from '../../../assets/logo.png';
    export default {
      name: "lay-header",
      data() {
        return {
          logImg: logImg,
          drawerFlag: false,
          drawerType: ''
        }
      },
      components: {
        leftAside,
        regLogin
      },
      methods: {
        loginFun(n) {
          this.drawerType = n;
          this.drawerFlag = true;
        }
      }
    }
</script>

<style  lang="less" scoped>
    header{
        .mobile-head{
            display: flex;
            justify-content: space-between;
            padding:8px 25px;
            .avatar{
                width:45px;
                height:45px;
                position: relative;
            }
        }
        .pc-head{
            max-width:1000px;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            line-height: 66px;
            .pc-head-search{
                line-height: 66px;
                .pc-head-search-input{
                    top:17px;
                }
            }
            .pc-head-nav{
                & li{
                    display: inline-block;
                    color:#fff;
                    & span{
                        font-size:16px;
                        padding:3px 5px;
                        cursor: pointer;
                    }
                }
            }
        }

    }
    @media screen and (max-width: 1200px) {
        .pc-head{
           padding:0 20px;
        }
    }
</style>
