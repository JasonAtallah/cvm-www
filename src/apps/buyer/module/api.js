import * as http from '@/lib/http';

export default {
  approveVendor(vendor, email) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/approve`, email);
  },

  createCalendarEvent(values) {
    return http.post('/buyer/v1/events', values);
  },

  createVendor(values) {
    return http.post('/buyer/v1/vendors', values);
  },

  getCalendars() {
    return http.get('/buyer/v1/calendars');
  },

  getEvents() {
    const params = {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    return http.get('/buyer/v1/events', params);
  },

  getVendors() {
    return http.get('/buyer/v1/vendors');
  },

  loadBuyer() {
    return http.get('/buyer/v1/buyer');
  },

  rejectVendor(vendor, email) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/reject`, email);
  },

  saveSchedule(schedule) {
    return http.put('/buyer/v1/buyer/schedule', schedule);
  },

  setGCalendar(calendar) {
    return http.put('/buyer/v1/buyer/gcalendar', calendar);
  },

  updateBuyerEmailTemplate(templateId, email) {
    return http.put(`/buyer/v1/buyer/emails/${templateId}`, email);
  }
};
