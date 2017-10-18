export default {

  getVendors(session, cb) {
    const url = `${session.mgmtApi.rootUrl}/vendors`;
    $.ajax(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.auth.accessToken}`
      },
      error: (xhr, status, err) => {

      },
      success: (data, status, xhr) => {
        cb(null, data);
      }
    });
  },

  rejectVendor(vendor, cb) {

  }

};
