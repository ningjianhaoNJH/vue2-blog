<template>
  <div class="reg-login">
    <div class="reg-login-container">
      <h2 style="margin-bottom:15px;text-align: center">登录</h2>
      <Form :model="loginForm" label-position="left" >
        <FormItem prop="user">
          <Input type="text" v-model="loginForm.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="user">
          <Input type="password" v-model="loginForm.password" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long>登录</Button>
          <Button long>注册</Button>
        </FormItem>
      </Form>
    </div>
    <div class="m-left-dialog">
      <div>
        <Button type="primary" long>登录</Button>
        <Button style="margin-top:15px;" type="primary" long>注册</Button>
      </div>
      <Card v-show="false" style="width:100%">
        <div class="left-aside-avatar" style="text-align:center">
          <img class="avatar-style" src="../../../assets/logo.png">
          <div class="left-aside-avatar-badge">
            <span>原创</span>
            <span>喜欢</span>
            <span>评论</span>
            <span>访问</span>
          </div>
          <div class="left-aside-avatar-badge">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>
      </Card>
      <Collapse style="margin-top:15px;" v-model="collVal" accordion>
        <Panel name="1">
          个人分类
          <div slot="content" v-for="(v,k) in typeList" :key="k"  class="left-aside-classification-item">
            <span>{{v.name}}</span>
            <span>{{v.count}}篇</span>
          </div>
        </Panel>
        <Panel name="2">
          热门文章
          <div slot="content" v-for="(v,k) in hotArticle" :key="k"  class="left-aside-classification-item">
            <span>{{v.context}}</span>
            <span>阅读量{{v.count}}</span>
          </div>
        </Panel>
        <Panel name="3">
          归档
          <div  slot="content"  v-for="(v,k) in archiveList" :key="k"  class="left-aside-classification-item">
            <span>2018年1月</span>
            <p>1篇</p>
          </div>

        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
  export default {
    name: "reg-login",
    props: {
      drawerType: String
    },
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        collVal: '1',
        archiveList: [
          {
            dateRange: '2018年11月',
            count: 132
          },
          {
            dateRange: '2018年12月',
            count: 152
          },
          {
            dateRange: '2018年1月',
            count: 122
          },
          {
            dateRange: '2018年2月',
            count: 13
          },
          {
            dateRange: '2018年5月',
            count: 11
          },
          {
            dateRange: '2018年6月',
            count: 12
          },
          {
            dateRange: '2018年7月',
            count: 13
          }
        ],
        typeList: [
          {
            name: 'node.js',
            count: 11
          },
          {
            name: 'Linux',
            count: 12
          },
          {
            name: 'docker',
            count: 13
          },
          {
            name: 'nginx',
            count: 14
          },
          {
            name: 'Ethereum',
            count: 15
          },
          {
            name: 'BitCoin',
            count: 16
          },
          {
            name: 'Golang',
            count: 17
          }

        ],
        hotArticle: [
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          },
          {
            context: 'Content of card',
            count:232
          }
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
  .reg-login {
    .reg-login-container{
      padding:15px 0 0 0;
    }
    .avatar-style{
      width:100%;
    }
    & .left-aside-avatar-badge {
      display: flex;
      justify-content: space-around;
      & span {
        padding: 2px 5px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .m-left-dialog{
      display: none;
    }
    .reg-login-container{
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    .m-left-dialog{
      display: block;
      padding-top:15px;
      .left-aside-classification-item{
        padding:2px 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        & span:first-child{
          color:#2d8cf0;

        }
      }
    }
    .reg-login-container{
      display: none;
    }
  }
</style>
