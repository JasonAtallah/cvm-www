import Vue from 'vue';
import Router from 'vue-router';
import VendorsPage from '@/components/buyer/vendors/VendorsPage';
import CalendarPage from '@/components/buyer/calendar/CalendarPage';
import SettingsPage from '@/components/buyer/settings/SettingsPage';
import OnboardingPage from '@/components/buyer/onboarding/OnboardingPage';
import check from '@/lib/check';
import store from './store';

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
    },
    {
      path: '/settings/:settingName',
      name: 'Settings_setting',
      component: SettingsPage
    }
  ]
});

export default router;
