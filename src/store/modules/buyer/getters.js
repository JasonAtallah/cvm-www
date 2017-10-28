

export const events = state => state.events;
export const vendors = state => state.vendors;
export const vendorFilter = state => state.vendorFilter;
export const vendorActions = state => state.vendorActions;
export const sortedVendors = (state) => {
  let vendors = [...state.vendors];
  // eslint-disable-next-line
  console.dir(state.vendorFilter.productType);
  if (state.vendorFilter.productType) {
    vendors = vendors.filter((vendor) => {
      if (!vendor.products) {
        return false;
      }
      return vendor.products.map(p => p.type).indexOf(state.vendorFilter.productType) >= 0;
    });
  }
  vendors.sort(state.vendorFilter.selectedSort.sortFn);
  return vendors;
};

export const productTypes = (state) => {
  return [...state.vendors.reduce((types, vendor) => {
    if (Array.isArray(vendor.products)) {
      vendor.products.forEach(p => types.add(p.type));
    }
    return types;
  }, new Set())];
};