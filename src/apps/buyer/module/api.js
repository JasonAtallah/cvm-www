import * as http from '@/lib/http';

export default {
  approveVendor(vendor, email) {
    return http.put(`/api/vendors/${vendor._id}/approve`, email);
  },

  createCalendarEvent(values) {
    return http.post('/api/events', values);
  },

  createVendor(values) {
    return http.post('/api/vendors', values);
  },

  getCalendars() {
    return http.get('/api/calendars');
  },

  getEvents() {
    const params = {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    return http.get('/api/events', params);
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
