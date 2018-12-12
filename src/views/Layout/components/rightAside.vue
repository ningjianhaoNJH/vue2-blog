<template>
    <div class="right-aside">
        <div class="right-aside-comment">
            <h3>文章评论</h3>
        </div>
        <Split v-model="split" mode="vertical">
            <div slot="top" class="aside-split-pane" style="padding-top:0;">
                <div class="comment-container" v-for="(v, k) in commentList" :key="k">
                    <Avatar class="comment-avatar" size="small" :src="v.avatar" />
                    <span class="comment-name">{{v.name}}：</span>
                    <span class="comment-msg">{{v.msg}}</span>
                    <div><Time :time="time" /></div>
                </div>
                
            </div>
            <div slot="bottom" class="aside-split-pane">
                作者其他博客
            </div>
        </Split>
    </div>
    
</template>

<script>
    export default {
        name: "right-aside",
      data () {
        return {
          time: (new Date()).getTime() - 60 * 3 * 1000,
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
    
    .right-aside{
        height: 100vh;
        border: 1px solid #dcdee2;
        padding: 16px;
        border-radius: 4px;
        padding-top:0;
        background:#fff;
        .right-aside-comment{
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
            }
        }
        
        
    }
   
</style>
