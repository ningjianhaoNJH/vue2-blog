<template>
  <div class="home">
    <div>
      <Card class="pc-main-blog" :bordered="false" v-for="(v,k) in msgList" :key="k">
        <p class="pc-main-blog-title" @click="toBlog(v.id)" slot="title">{{v.title}}{{k}}</p>
        <p style="word-break: break-all;">{{v.msg}}</p>
      </Card>
    </div>
    <Button type="success" long>加载更多</Button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Home',
    data() {
      return {
        msgList: [
          {
            id: 1,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 2,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 3,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 4,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 5,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 6,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 7,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
          {
            id: 8,
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.',
          },
        ],
      };
    },
    methods: {
      toBlog(id) {
        this.$router.push({path: 'blog', query: {id: id}});
      },
    },
  };
</script>
<style scoped lang="less">
  .home {
    & .pc-main-blog {
      margin-bottom: 10px;
      & p.pc-main-blog-title {
        cursor: pointer;
      }
    }
  }
</style>
