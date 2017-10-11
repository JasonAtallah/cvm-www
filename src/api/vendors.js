
export default {

  getVendors(cb, errCb) {
    cb([{
      id: 1,
      created: new Date(2017, 9, 1),
      name: 'Marijuana Supply Co.',
      city: 'Needles',
      state: 'CA',
      products: [{
        type: 'flower'
      }],
      status: null
    },
    {
      id: 2,
      created: new Date(2017, 10, 1),
      name: 'Cannabis Ventures',
      city: 'California City',
      state: 'CA',
      products: [{
        type: 'flower'
      },
      {
        type: 'edible'
      }],
      status: null
    }]);
  },

  rejectVendor(vendor, cb, errCb) {
    if (vendor.status !== 'rejected') cb();
    else errCb();
  }

};
