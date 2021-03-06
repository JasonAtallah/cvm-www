import Vue from 'vue';
import Router from 'vue-router';
import Complete from '@/components/vendor/questionnaire/Complete';
import Home from '@/components/vendor/Home';
import Introduction from '@/components/vendor/questionnaire/Introduction';
import Loading from '@/components/vendor/Loading';
import Questionnaire from '@/components/vendor/questionnaire/Questionnaire';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/complete',
      name: 'Complete',
      component: Complete
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/intro',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    }
  ]
});
