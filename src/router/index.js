import Vue from 'vue';
import Router from 'vue-router';
import Vendors from '@/components/Vendors';
import Calendar from '@/components/Calendar';
import Onboarding from '@/components/Onboarding';

Vue.use(Router);

export default new Router(
  {
    routes: [
      {
        path: '/',
        name: 'Vendors',
        component: Vendors
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: '/onboarding',
        name: 'Onboarding',
        component: Onboarding
      }
    ]
  }
 );
