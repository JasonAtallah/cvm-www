import Vue from 'vue';
import Router from 'vue-router';
import Questionnaire from './components/Questionnaire';
import Complete from './components/Complete';

Vue.use(Router);

export default new Router(
  {
    routes: [
      {
        path: '/',
        name: 'Questionnaire',
        component: Questionnaire
      },
      {
        path: '/complete',
        name: 'Complete',
        component: Complete
      }
    ]
  }
);
