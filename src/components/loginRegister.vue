<template>
  <Form ref="loginForm" :model="loginForm" :rules="loginValidate" label-position="left">
    <FormItem prop="username">
      <Input type="text" v-model="loginForm.username" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="loginForm.password" placeholder="password">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button :loading="loading" type="primary" long @click="subForm(true)" >登录</Button>
      <Button :loading="loading"  long @click="subForm(false)" >注册</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    name: 'login-register',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginValidate: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
        },
        loading: false,
      };
    },
    methods: {
      subForm(t) {
        this.loading = true;
        this.$store.dispatch(t ? 'postLogin' : 'postRegister', this.loginForm).then(() => {
          this.$emit('on-drawer', false);
          this.$refs['loginForm'].resetFields();
          this.loading = false;
        }).catch((err) => {
          this.loading = false;
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
