<template>
  <div class="blog">
    <div class="blog-title">
      <h3>
        <span>标题 </span>
        <Button @click="$router.go(-1)" style="float:right;background-color:#808695;color:#fff;" size="small" icon="md-close"></Button>
      </h3>
      <p class="blog-title-info">
        <span>发布时间：2018年11月21日 15:32:21</span>
        <a href="#">李潮水</a>
        <i>阅读数: 3232</i>
        <span>标签:</span><b>宅男</b><b>Golang</b></p>
    </div>
    <div class="blog-container" v-html="container"></div>
    <div class="blog-comment">
      <Input type="textarea" :maxlength="1000" :autosize="{minRow:1}" v-model="comment" placeholder="说点什么吧"/>
    </div>
    <div class="blog-length">
      <Button style="float:left" @click="subComment">发表评论</Button>
      <span style="float:right">还能输入{{1000-comment.length}}字符</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'Blog',
    components: {
    },
    data() {
      return {
        container: '<p>水电费水电费第三方</p><p>水电费水电费</p><h2><strong>水电费似懂非懂是的发送到</strong></h2>',
        comment: '',
        textRows:5
      };
    },
    mounted() {
    },
    methods: {
      subComment() {
        console.log(this.comment);
      }
    }
  }
</script>
<style scoped lang="less">
.blog{
  background:#fff;
  border-radius:4px;
  .blog-title{
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1.2;
    & > h3{
      font-size:24px;
      font-weight:600;
    }
    & > p.blog-title-info{
      margin-top:10px;
      font-size:16px;
      & a,& i,& b{
        display: inline-block;
        margin:0 10px;
        font-style: normal;
        font-weight: 400;
      }
      & b{
        border:1px solid #646464;
        border-radius: 3px;
        padding:2px 4px;
        font-size:14px;
      }
    }
  }
  .blog-container{
    padding:16px;
  }
  .blog-comment{
    padding:16px;
  }
  .blog-length{
    padding:0 16px;
  }
}


</style>