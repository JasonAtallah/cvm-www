import * as http from '@/lib/http';

export default {
  approveVendor(vendor, email) {
    return http.put(`/api/vendors/${vendor._id}/approve`, email);
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

  getVendor(vendorId) {
    return http.get(`api/vendors/${vendorId}`);
  },

  getVendors() {
    return http.get('/api/vendors');
  },

  loadBuyer() {
    return http.get('/api/buyer');
  },

  rejectVendor(vendor, email) {
    return http.put(`/api/vendors/${vendor._id}/reject`, email);
  },

  saveSchedule(schedule) {
    return http.put('/api/buyer/schedule', schedule);
  },

  setGCalendar(calendar) {
    return http.put('/api/buyer/gcalendar', calendar);
  },

  updateBuyerEmailTemplate(templateId, email) {
    return http.put(`/api/buyer/emails/${templateId}`, email);
  }
};
