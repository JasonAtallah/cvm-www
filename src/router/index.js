import Vue from 'vue';
import Router from 'vue-router';
import Vendors from '@/components/Vendors';
import CalendarPage from '@/components/CalendarPage';
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
        name: 'CalendarPage',
        component: CalendarPage
      },
      {
        path: '/onboarding',
        name: 'Onboarding',
        component: Onboarding
      }
    ]
  }
 );
