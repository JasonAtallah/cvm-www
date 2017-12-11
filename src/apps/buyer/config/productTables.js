

export const EdiblesProductTable = {
  vendorField: 'edibles',
  columns: [
    {
      header: 'Name',
      field: 'name',
      isName: true
    },
    {
      header: 'Units Available',
      field: 'unitsAvailable'
    },
    {
      header: 'THC (mg)',
      field: 'thc'
    },
    {
      header: 'CBD (mg)',
      field: 'cbd'
    },
    {
      header: 'Shelf Ready',
      field: 'shelfReady'
    }
  ]
};

export const FlowersProductTable = {
  vendorField: 'flowers',
  columns: [
    { header: 'Strain Name', field: 'name', isName: true },
    { header: 'Weight Available', field: 'weightAvailable' },
    { header: 'THC (mg)', field: 'thc' },
    { header: 'CBD (mg)', field: 'cbd' },
    { header: 'Grow Style', field: 'growSize' },
    { header: 'Bud Size', field: 'budSize' },
    { header: 'Shelf Ready', field: 'shelfReady' }
  ]
};

export const ConcentratesProductTable = {
  vendorField: 'concentrates',
  columns: [
    { header: 'Name', field: 'name', isName: true },
    { header: 'Type', field: 'type' },
    { header: 'Units Available', field: 'unitsAvailable' },
    { header: 'THC (mg)', field: 'thc' },
    { header: 'CBD (mg)', field: 'cbd' },
    { header: 'Shelf Ready', field: 'shelfReady' }
  ]
};
