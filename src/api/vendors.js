
export default {

  getVendors(auth, cb) {
    const url = 'http://localhost:8081/api/vendors';
    $.ajax(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
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
