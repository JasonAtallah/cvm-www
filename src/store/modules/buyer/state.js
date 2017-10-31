
import vendorSorts from './metadata/vendorSorts';

export default {
  vendors: [],
  vendorFilter: {
    productType: null,
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
  ],
  selVendor: null,
  events: []
};
