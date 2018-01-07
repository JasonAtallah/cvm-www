import * as http from '@/lib/http';

export default {

  approveVendor(vendor, email, scheduleUrl) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/actions/ApproveVendor`, {
      email,
      scheduleUrl
    });
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
    return http.put(`/buyer/v1/vendors/${vendor._id}/actions/RejectVendor`, {
      email
    });
  },

  saveSchedule(schedule) {
    return http.put('/buyer/v1/schedule', schedule);
  },

  sendTimes(vendor, suggestedTimes, vendorUrl) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/actions/BuyerSendsTimes`, {
      suggestedTimes,
      vendorUrl
    });
  },

  setGCalendar(calendar) {
    return http.put('/buyer/v1/gcalendar', calendar);
  },

  updateBuyerProfile(profile) {
    return http.put('/buyer/v1/profile', profile);
  },

  updateBuyerEmailTemplate(templateId, email) {
    return http.put(`/buyer/v1/emails/${templateId}`, email);
  },

  updateThreadAttribute(vendor, action) {
    return http.put(`/buyer/v1/vendors/${vendor._id}/attributes/${action.value}`);
  }

};
