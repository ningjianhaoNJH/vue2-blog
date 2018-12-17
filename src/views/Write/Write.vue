<template>
  <div class="write">
    <div class="write-title">
      <Row>
        <Col span="20"><Input v-model="formBlog.title" placeholder="输入博客标题"  /></Col>
        <Col span="4">
          <Button @click="$router.go(-1)" style="float:right;background-color:#808695;color:#fff;" size="small" icon="md-close"></Button>
        </Col>
      </Row>
    </div>
    <div class="editor-container">
      <div id="toolbar-container"></div>
      <div id="editor"></div>
    </div>
    <div class="writer-container">
      <Form ref="formBlog" :model="formBlog"  :label-width="80">
        <FormItem label="文章标签" prop="label">
          <div v-for="(v,k) in labelList" :key="k" class="writer-label">
            <span @blur="loseFocus(k, $event, 'labelList')"  v-focus="labelActive === k" contenteditable="true" v-text="v"></span>
            <Icon @click="closeTag('labelList', k)" type="ios-close" />
          </div>
          <div><Button class="writer-label-btn" @click="addLabelFun('labelList')" type="text" icon="ios-add-circle">添加标签</Button></div>
        </FormItem>
        <FormItem label="个人分类" prop="label">
          <div v-for="(v,k) in classList" :key="k" class="writer-label">
            <span @blur="loseFocus(k, $event, 'classList')" v-focus="labelActive === k" contenteditable="true" v-text="v"></span>
            <Icon @click="closeTag('classList', k)" type="ios-close" />
          </div>
          <div><Button class="writer-label-btn" @click="addLabelFun('classList')" type="text" icon="ios-add-circle">添加分类</Button></div>
        </FormItem>
        <FormItem label="文章类型" prop="type">
          <Select v-model="formBlog.type" style="width:200px">
            <Option v-for="item in articleList" :value="item.id" :key="item.id">{{ item.name }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formBlog')">发布博客</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
  import  '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
  import {mapGetters} from 'vuex';
  export default{
    name: 'Write',
    computed: {
      ...mapGetters({
        userClass: 'userClass'
      })
    },
    data() {
      return {
        editor: null,
        labelActive: 0,
        classActive:0,
        formBlog: {
          title: '',
          content: '',
          label: '',
          type: '',
          classic: '',
        },
        labelList: [],
        classList: [],
        articleList: [
          {
            id: 0,
            name: '请选择'
          },
          {
            id: 1,
            name: '原创'
          },
          {
            id: 2,
            name: '转载'
          },
          {
            id: 3,
            name: '翻译'
          }
        ]
      };
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          language: 'zh-cn',
          height: 800
        }).then(editor => {
          const toolbarContainer = document.querySelector('#toolbar-container');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor;
//          this.editor.setData('<p>水电费水电费第三方</p><p>水电费水电费</p><h2><strong>水电费似懂非懂是的发送到</strong></h2>')
        }).catch(error => {
          console.error(error);
        });
      },
      handleSubmit() {
        this.formBlog.content = this.editor.getData();
        this.formBlog.label = this.labelList.toString();
        this.formBlog.classic = this.classList.toString();
        this.$store.dispatch('postBlog', this.formBlog).then(() => {
          this.$Message.success('提交成功');
          this.$router.go(-1);
        }).catch()
      },
      addLabelFun(name) {
        if (this[name].length> 4) return;
        this[name].push('');
        if (name === 'labelList') {
          this.labelActive = this[name].length - 1;
        } else {
          this.classActive =  this[name].length - 1;
        }
      },
      loseFocus(k, e, arr) {
        let val = e.target.innerText.trim();
        if (!val) {
          this[arr].splice(this[arr].length-1,1);
        } else {
          this[arr][k] = val;
        }
        this[arr] = [...new Set(this[arr])];
      },
      closeTag(n,k) {
        this[n].splice(k,1)
      }
    }
  }
</script>
<style scoped lang="less">
  .write{
    border-radius:4px;
    .write-title{
      border-bottom: 1px solid #e8eaec;
      padding: 14px 16px;
      line-height: 1;
      & > h3{
        font-size:24px;
        font-weight:600;
      }
      & > p.write-title-info{
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
    .editor-container{
      padding:15px;
      #editor{
        margin-top:15px;
        border: 1px solid #e8eaec;
        height:500px;
      }
    }
    .writer-container{
      padding:15px;
      .writer-label{
        margin: 5px 5px 0 0;
        display: inline-block;
        padding: 3px 8px;
        font-size: 12px;
        max-width: 480px;
        background: #e9e9e9;
        border-radius: 2px;
        line-height: 15px;
        height: 21px;
        color: #4f4f4f;
        overflow: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        outline: none;
        word-wrap: break-word;
      }
      .writer-label-btn{
      }
    }
  }
</style>
