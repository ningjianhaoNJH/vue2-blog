<template>
  <div class="left-aside">
    <Card style="width:100%">
      <div class="left-aside-avatar" style="text-align:center">
        <img :src="userInfo.avatar">
        <div class="left-aside-avatar-badge">
          <span>原创</span>
          <span>喜欢</span>
          <span>评论</span>
          <span>访问</span>
        </div>
        <div class="left-aside-avatar-badge">
          <span>{{userInfo.total}}</span>
          <span>{{userInfo.fans}}</span>
          <span>{{userInfo.comment}}</span>
          <span>{{userInfo.access}}</span>
        </div>
      </div>
    </Card>
    <Card class="left-aside-classification">
      <div slot="title">个人分类</div>
      <div class="left-aside-classification-item">
        <span>Content of card</span>
        <p>1篇</p>
      </div>
      <div class="left-aside-classification-item">
        <span>Content of card</span>
        <p>1篇</p>
      </div>
      <div class="left-aside-classification-item">
        <span>Content of card</span>
        <p>1篇</p>
      </div>
      <div class="left-aside-classification-item">
        <span>Content of card</span>
        <p>1篇</p>
      </div>
      <div class="left-aside-classification-item">
        <span>Content of card</span>
        <p>1篇</p>
      </div>

    </Card>
    <Card class="left-aside-hot">
      <div slot="title">热门文章</div>
      <div v-for="(v,k) in hotArticle" :key="k" v-if="k <= 4 || typeFlag" class="left-aside-hot-item">
        <span>{{v.context}}</span>
        <p>阅读量{{v.count}}</p>
      </div>
      <Button style="margin-top:10px;" long @click="articleFlag = true" v-show="!articleFlag && hotArticle.length>4">
        展开
      </Button>
    </Card>
    <Card class="left-aside-classification">
      <div slot="title">归档</div>
      <div v-for="(v,k) in archiveList" :key="k" v-if="k <= 4 || archiveFlag" class="left-aside-classification-item">
        <span>2018年1月</span>
        <p>1篇</p>
      </div>
      <Button style="margin-top:10px;" long @click="archiveFlag = true" v-show="!archiveFlag && archiveList.length>4">
        展开
      </Button>
    </Card>
    <Card class="left-aside-classification">
      <div slot="title">个人分类</div>
      <div v-for="(v,k) in typeList" :key="k" v-if="k <= 4 || typeFlag" class="left-aside-classification-item">
        <span>{{v.name}}</span>
        <span>{{v.count}}篇</span>
      </div>
      <Button style="margin-top:10px;" long @click="typeFlag = true" v-show="!typeFlag && typeList.length>4">展开</Button>
    </Card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "left-aside",
    data() {
      return {
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
        archiveFlag: false,
        typeFlag: false,
        hotArticle: [
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          },
          {
            context: 'Content of card',
            count: 232
          }
        ],
        articleFlag: false,
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
      })
    },
  }
</script>

<style lang="less" scoped>
  .left-aside {
    .left-aside-avatar {
      & img {
        width: 70%;
        border-radius: 50%;
      }
      & .left-aside-avatar-badge {
        display: flex;
        justify-content: space-around;
        & span {
          padding: 2px 5px;
        }
      }
    }
    .left-aside-classification {
      width: 100%;
      margin-top: 5px;
      .left-aside-classification-item {
        padding: 2px 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        & span:first-child {
          color: #2d8cf0;

        }
      }
    }
    .left-aside-hot {
      & .left-aside-hot-item {
        & span {
          cursor: pointer;
          color: #2d8cf0;
        }
        & p {
          font-size: 12px;
          color: #969696;
        }
      }
    }
  }
</style>
