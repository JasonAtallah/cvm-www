import vendorSorts from '../config/vendorSorts';

export default {
  addCalendarEventModalIsVisible: false,
  addVendorModalIsVisible: false,
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
  profile: {
    givenName: null,
    familyName: null,
    imageUrl: null
  },
  selVendor: null,
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
      label: 'Approve'
    },
    {
      label: 'Reject'
    }
  ]
};
