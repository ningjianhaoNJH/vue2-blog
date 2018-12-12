<template>
  <div class="right-aside2">
    <div class="right-aside2-comment">
      <h3>推荐阅读</h3>
    </div>
    <div slot="top" class="aside-split-pane" style="padding-top: 0;">
      <div class="comment-container" v-for="(v, k) in commentList" :key="k">
        <h3 class="recommend-title">标题标题标题标题标题标题标题标题标题标题标题标题</h3>
        <p>阅读量：1231</p>
      </div>
    </div>
    <div slot="bottom" class="aside-split-pane">
      今日标签
    </div>
  </div>

</template>

<script>
  export default {
    name: "right-aside2",
    data () {
      return {
        split: 0.7,
        commentList: [
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            name: '李朝金',
            avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            msg: 'Lorem dit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          }
        ]
      }
    },
  }
</script>

<style  lang="less" scoped>
  
  .right-aside2{
    height: 100vh;
    border: 1px solid #dcdee2;
    padding: 16px;
    border-radius: 4px;
    padding-top:0;
    background:#fff;
    .right-aside2-comment{
      padding: 14px 0;
      border-bottom:1px solid #e8eaec
    }
    
    .aside-split-pane{
      padding: 10px;
      .comment-container{
        border-bottom: 1px dashed #dcdee2;
        padding:10px 0;
        .comment-msg{
          word-break: break-all;
          color: #797979;
        }
        .comment-name{
          font-weight: 600;
        }
        .comment-avatar{
          width: 20px;
          height: 20px;
          vertical-align: bottom;
        }
        .recommend-title{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor:pointer;
          
        }
       
      }
    }
    
    
  }

</style>
