import Vue from 'vue';
import Router from 'vue-router';
import VendorsPage from './components/VendorsPage';
import CalendarPage from './components/CalendarPage';
import SettingsPage from './components/SettingsPage';
import OnboardingPage from './components/OnboardingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vendors',
      component: VendorsPage
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
