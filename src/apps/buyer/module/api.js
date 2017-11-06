export default {
  handleRequest(reject) {
    return (xhr, status, err) => {
      reject(err);
      debugger;
      window.location.pathname = '/login';
    };
  },

  get(path) {
    return new Promise((res, rej) => {
      $.ajax({
        method: 'GET',
        url: `/data/${path}`,
        error: this.handleRequest(rej),
        success: res
      });
    });
  },

  post(path, data) {
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

  put(path, data) {
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

  getCalendars() {
    return this.get('calendars');
  },

  getEvents() {
    return this.get('events')
      .then((events) => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        events.forEach((event) => {
          event.startDate = moment(event.startDate).tz(tz).toDate();
        });

        return events;
      });
  },

  getVendors() {
    return this.get('vendors');
  },

  loadBuyer() {
    return this.get('buyer');
  },

  loadSession() {
    return this.get('session');
  },

  setGCalendar(calendar) {
    return this.put('buyer/gcalendar', calendar);
  }
};
