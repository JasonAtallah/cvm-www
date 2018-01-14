import Vue from 'vue';
import Router from 'vue-router';
import Complete from './components/Complete';
import Home from './components/Home';
import Introduction from './components/Introduction';
import Loading from './components/Loading';
import Questionnaire from './components/Questionnaire';

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
