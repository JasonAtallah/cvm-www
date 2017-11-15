import vendorSorts from './metadata/vendorSorts';

export default {
  addVendorModalIsVisible: false,
  buyer: null,
  calendars: [],
  events: [],
  gcalendar: null,
  profile: {
    givenName: null,
    familyName: null,
    imageUrl: null
  },
  selVendor: null,
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
