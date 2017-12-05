import vendorSorts from '../config/vendorSorts';

export default {
  buyer: null,
  calendars: null,
  events: [],
  gcalendar: null,
  pageMenuItems: [
    {
      name: 'Vendors',
      href: '/'
    },
    {
      name: 'Calendar',
      href: '/calendar'
    },
    // {
    //   name: 'Onboarding',
    //   href: '/onboarding'
    // }
  ],
  pendingAction: {
    type: null
  },
  profile: {
    givenName: null,
    familyName: null,
    imageUrl: null
  },
  selVendor: null,
  setSchedule: false,
  vendorDetailsTab: 'company',
  vendors: [],
  vendorFilter: {
    productType: null,
    status: null,
    sort: vendorSorts[0].label,
    sortOptions: vendorSorts,
    get selectedSort() {
      const selectedOptions = this.sortOptions.filter(o => o.label === this.sort);
      return selectedOptions[0];
    }
  },
  vendorActions: [
    {
      label: 'Approve',
      value: 'approveVendor'
    },
    {
      label: 'Reject',
      value: 'rejectVendor'
    }
  ]
};
