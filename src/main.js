import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';

import '../theme/index.less';

Vue.use(iView);
Vue.config.productionTip = false;
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
//
// router.afterEach(() => {
//   iView.LoadingBar.finish();
// });
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
