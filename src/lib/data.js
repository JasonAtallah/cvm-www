import store from '@/apps/buyer/store';

export const genId = () => {
  return Math.random().toString().slice(2);
};

export const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export const genVendorUrl = (vendor) => {
  /* leaving the below here because we might consolidate vendor and buyer apps */
  // const hashIndex = window.location.href.indexOf('#');
  // let url = window.location.href.slice(0, hashIndex);
  let url = store.getters.settings.vendorAppUrl;
  url += `?vid=${vendor._id}#`;
  return url;
};
