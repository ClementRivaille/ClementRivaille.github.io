import Vue from 'vue';
import Router from 'vue-router';
import Skills from '@/components/Skills';
import Creations from '@/components/Creations';
import Experiences from '@/components/Experiences';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
      alias: '/',
    },
    {
      path: '/creations',
      name: 'creations',
      component: Creations,
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: Experiences,
    },
  ],
});
