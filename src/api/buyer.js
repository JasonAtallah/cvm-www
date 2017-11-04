export default {

  typicalRequest(path) {
    return $.get(path)
      .catch((err) => {
        // eslint-disable-next-line
        console.dir(err);
        // eslint-disable-next-line
        debugger;
        window.location.pathname = '/login';
      }, 'json');
  },

  getVendors() {
    return this.typicalRequest('/vendors');
  },

  getEvents() {
    return this.typicalRequest('/events')
      .then((events) => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        events.forEach((event) => {
          event.startDate = moment(event.startDate).tz(tz).toDate();
        });

        return events;
      });
  },

  getGCalendarList() {
    return this.typicalRequest('/gcalendarlist');
  }

};
