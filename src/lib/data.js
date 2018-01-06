export const genId = () => {
  return Math.random().toString().slice(2);
};

export const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export const genVendorUrl = (vendor) => {
  return window.location.href.replace('#', `?vid=${vendor._id}#`);
};
