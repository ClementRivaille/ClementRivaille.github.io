import Vue from 'vue';
import Router from 'vue-router';
import Skills from '@/components/Skills';
import Creations from '@/components/Creations';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/creations',
      name: 'creations',
      component: Creations,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      alias: '/',
    },
  ],
});
