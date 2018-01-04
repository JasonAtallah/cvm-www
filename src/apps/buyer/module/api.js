import * as http from '@/lib/http';

export default {
  approveVendor(vendor, email) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/approve`, email);
  },

  cancelMeeting(vendor) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/actions/BuyerCancelsAppt`);
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

  getVendor(vendor) {
    return http.get(`/buyer/v1/vendors/${vendor._id}`);
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
    return http.put('/buyer/v1/schedule', schedule);
  },

  sendApptProposal(vendor, suggestedTimes) {
    return http.post(`/buyer/v1/vendors/${vendor._id}/actions/BuyerSendsTimes`, suggestedTimes);
  },

  setGCalendar(calendar) {
    return http.put('/buyer/v1/gcalendar', calendar);
  },

  updateBuyerProfile(buyer) {
    return http.put('/buyer/v1/buyerProfile', buyer);
  },

  updateBuyerEmailTemplate(templateId, email) {
    return http.put(`/buyer/v1/emails/${templateId}`, email);
  },

  updateThreadAttribute(vendor, action) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/attributes/${action.value}`);
  }

};
