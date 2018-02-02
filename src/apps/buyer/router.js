import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import VendorsPage from './components/vendors/VendorsPage';
import CalendarPage from './components/calendar/CalendarPage';
import SettingsPage from './components/settings/SettingsPage';
import OnboardingPage from './components/onboarding/OnboardingPage';
import check from '../../lib/check';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Vendors',
      component: VendorsPage,
      beforeEnter: (to, from, next) => {
        store.dispatch('init')
          .then(() => {
            const buyer = store.state.buyer;
            if (!check.profileComplete(buyer) || !check.calendarSelected(buyer)) {
              next({
                path: '/onboarding',
                name: 'Onboarding',
                component: OnboardingPage
              });
            } else {
              next();
            }
          });
      }
    },
    {
      path: '/calendar',
      name: 'CalendarPage',
      component: CalendarPage
    },
    {
      path: '/onboarding',
      name: 'Onboarding',
      component: OnboardingPage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage
    }
  ]
});

export default router;
