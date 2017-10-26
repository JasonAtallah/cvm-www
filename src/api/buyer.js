export default {

  typicalRequest(path) {
    return $.get(path)
      .catch((err) => {
        console.dir(err);
        debugger;
        window.location.pathname = '/login';
      });
  },

  getVendors(cb) {
    return this.typicalRequest('/vendors');
  },

  getEvents(cb) {
    return this.typicalRequest('/events');
  }

};
