export default {
  handleRequest(reject) {
    return (xhr, status, err) => {
      console.error(err.message);
      reject(err);
    };
  },

  _get(path) {
    return new Promise((res, rej) => {
      $.ajax({
        method: 'GET',
        url: `/data/${path}`,
        error: this.handleRequest(rej),
        success: res
      });
    });
  },

  _post(path, data) {
    return new Promise((res, rej) => {
      $.ajax({
        method: 'POST',
        url: `/data/${path}`,
        data,
        error: this.handleRequest(rej),
        success: res
      });
    });
  },

  _put(path, data) {
    return new Promise((res, rej) => {
      $.ajax({
        method: 'PUT',
        url: `/data/${path}`,
        data,
        error: this.handleRequest(rej),
        success: res
      });
    });
  },

  approveVendor(vendor) {
    return this._put(`vendors/${vendor._id}/approve`);
  }
};
