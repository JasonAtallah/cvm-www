

export const EdiblesProductTable = {
  vendorField: 'edibles',
  label: 'Edibles & Topicals',
  columns: [
    { header: 'Name', field: 'name', isName: true },
    { header: 'Units Available', field: 'unitsAvailable' },
    { header: 'THC (%)', field: 'thc' },
    { header: 'CBD (%)', field: 'cbd' },
    { header: 'Shelf Ready', field: 'shelfReady' }
  ]
};

export const FlowersProductTable = {
  vendorField: 'flowers',
  label: 'Flowers',
  columns: [
    { header: 'Strain Name', field: 'name', isName: true },
    { header: 'Weight Available', field: 'weightAvailable' },
    { header: 'THC (%)', field: 'thc' },
    { header: 'CBD (%)', field: 'cbd' },
    { header: 'Grow Style', field: 'growSize' },
    { header: 'Bud Size', field: 'budSize' },
    { header: 'Shelf Ready', field: 'shelfReady' }
  ]
};

export const ConcentratesProductTable = {
  vendorField: 'concentrates',
  label: 'Concentrates',
  columns: [
    { header: 'Name', field: 'name', isName: true },
    { header: 'Type', field: 'type' },
    { header: 'Units Available', field: 'unitsAvailable' },
    { header: 'THC (%)', field: 'thc' },
    { header: 'CBD (%)', field: 'cbd' },
    { header: 'Shelf Ready', field: 'shelfReady' }
  ]
};
