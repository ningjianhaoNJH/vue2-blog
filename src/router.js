import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout/layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      hidden: true,
      component: Layout,
      redirect: 'home',
      meta: {
        title: '',
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home/Home.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import(/* webpackChunkName: "about" */ './views/Blog/Blog'),
        },
        {
          path: 'write',
          name: 'Write',
          component: () => import(/* webpackChunkName: "about" */ './views/Write/Write.vue'),
        },
      ],
    },
  ],
});
// component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
