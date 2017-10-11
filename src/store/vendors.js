import vendorApi from '../api/vendors';

const state = {
  vendors: [],
  vendorFilter: {
    sort: 'Newest First',
    productType: null,
    sortOptions: [{
      label: 'Newest First',
      sortFn: (v1, v2) => {
        if (v1.created > v2.created) return -1;
        if (v2.created > v1.created) return 1;
        return 0;
      }
    },
    {
      label: 'Oldest First',
      sortFn: (v1, v2) => {
        if (v1.created < v2.created) return -1;
        if (v2.created < v1.created) return 1;
        return 0;
      }
    },
    {
      label: 'Alphabetical',
      sortFn: (v1, v2) => {
        if (v1.name < v2.name) return -1;
        if (v2.name < v1.name) return 1;
        return 0;
      }
    }],
    get selectedSort() {
      const selectedOptions = this.sortOptions.filter(o => o.label === this.sort);
      return selectedOptions[0];
    }
  },
  pendingAction: null,
  pendingActionData: null,
  pendingActionError: null
};

const getters = {
  vendors: state => state.vendors,
  vendorFilter: state => state.vendorFilter,
  sortedVendors: (state) => {
    let vendors = [...state.vendors];
    if (state.vendorFilter.productType) {
      vendors = vendors.filter((v) => {
        return v.products.map(p => p.type).indexOf(state.vendorFilter.productType) >= 0;
      });
    }
    vendors.sort(state.vendorFilter.selectedSort.sortFn);
    return vendors;
  },
  productTypes: (state) => {
    return [...state.vendors.reduce((types, vendor) => {
      vendor.products.forEach(p => types.add(p.type));
      return types;
    }, new Set())];
  }
};

const actions = {

  loadVendors({ commit, state }) {
    vendorApi.getVendors(
      (vendors) => {
        commit('setVendors', vendors);
      }
    );
  },

  rejectVendor({ commit, state }, vendor) {
    commit('rejectVendorRequest');
    vendorApi.rejectVendor(
      vendor,
      () => commit('rejectVendorSuccess', { vendor }),
      (err) => {
        commit('rejectVendorFailure', { err });
      }
    );
  }

};

// mutations
const mutations = {

  setVendorSort(state, value) {
    state.vendorFilter.sort = value;
  },

  setProductFilter(state, value) {
    state.vendorFilter.productType = value;
  },

  setVendors(state, vendors) {
    state.vendors = vendors;
  },

  rejectVendorRequest(state, data) {
    state.pendingAction = 'rejecting-vendor';
    state.pendingActionData = data;
  },

  rejectVendorSuccess(state, { vendor }) {
    state.pendingAction = null;
    state.pendingActionData = null;

    vendor.status = 'rejected';
  },

  rejectVendorFailure(state, { err }) {
    state.pendingActionError = err;
  },

  ackVendorFailure(state, { err }) {
    state.pendingAction = null;
    state.pendingActionData = null;
    state.pendingActionError = null;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
