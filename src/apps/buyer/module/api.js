import * as http from '@/lib/http';

export default {
  approveVendor(vendor) {
    return http.put(`/data/vendors/${vendor._id}/approve`);
  },

  createCalendarEvent(values) {
    return http.post('/data/events', values);
  },

  createVendor(values) {
    return http.post('/data/vendors', values);
  },

  getCalendars() {
    return http.get('/data/calendars');
  },

  getEvents() {
    return http.get('/data/events')
      .then((result) => {
        const events = result.items;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        events.forEach((event) => {
          event.startDate = moment(event.startDate).tz(tz).toDate();
        });

        return events;
      });
  },

  getVendors() {
    return http.get('/data/vendors');
  },

  loadBuyer() {
    return http.get('/data/buyer');
  },

  loadSession() {
    return http.get('/session');
  },

  rejectVendor(vendor) {
    return http.put(`/data/vendors/${vendor._id}/reject`);
  },

  setGCalendar(calendar) {
    return http.put('/data/buyer/gcalendar', calendar);
  }
};
