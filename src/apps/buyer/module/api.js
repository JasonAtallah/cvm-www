import * as http from '@/lib/http';

export default {
  approveVendor(vendor) {
    return http.put(`/api/vendors/${vendor._id}/approve`);
  },

  createCalendarEvent(values) {
    return http.post('/api/events', values)
      .then((event) => {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        event.startDate = moment(event.start.dateTime).tz(tz).toDate();
        return event;
      });
  },

  createVendor(values) {
    return http.post('/api/vendors', values);
  },

  getCalendars() {
    return http.get('/api/calendars');
  },

  getEvents() {
    return http.get('/api/events')
      .then((result) => {
        const events = result.items;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        events.forEach((event) => {
          event.startDate = moment(event.start.dateTime).tz(tz).toDate();
        });

        return events;
      });
  },

  getVendors() {
    return http.get('/api/vendors');
  },

  loadBuyer() {
    return http.get('/api/buyer');
  },

  loadSession() {
    return http.get('/session');
  },

  rejectVendor(vendor) {
    return http.put(`/api/vendors/${vendor._id}/reject`);
  },

  setGCalendar(calendar) {
    return http.put('/api/buyer/gcalendar', calendar);
  }
};
