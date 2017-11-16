export default {
  handleRequest(reject) {
    return (xhr, status, err) => {
      console.error(err.message); //eslint-disable-line
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
  },

  createCalendarEvent(values) {
    return this._post('events', values);
  },

  createVendor(values) {
    return this._post('vendors', values);
  },

  getCalendars() {
    return this._get('calendars');
  },

  getEvents() {
    return this._get('events')
      .then((events) => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        events.forEach((event) => {
          event.startDate = moment(event.startDate).tz(tz).toDate();
        });

        return events;
      });
  },

  getVendors() {
    return this._get('vendors');
  },

  loadBuyer() {
    return this._get('buyer');
  },

  loadSession() {
    return this._get('session');
  },

  rejectVendor(vendor) {
    return this._put(`vendors/${vendor._id}/reject`);
  },

  setGCalendar(calendar) {
    return this._put('buyer/gcalendar', calendar);
  }
};
