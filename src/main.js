import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import '../theme/index.less';

Vue.use(iView);
Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  created() {
    this.$store.dispatch('getHomeData');
    this.$store.commit('SET_USER_INFO', window.localStorage.getItem('userInfo') ? JSON.parse(window.localStorage.getItem('userInfo')) : {});
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
