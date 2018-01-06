import * as http from '@/lib/http';

export default {
  getQuestionnaire(questionnaireId) {
    return http.get(`/vendor/v1/questionnaires/${questionnaireId}`);
  },

  getBuyer(vendorId) {
    return http.get(`/vendor/v1/vendors/${vendorId}/buyer`);
  },

  getVendor(vendorId) {
    return http.get(`/vendor/v1/vendors/${vendorId}`);
  },

  saveResponse(questionnaireId, values) {
    return http.post(`/vendor/v1/questionnaires/${questionnaireId}/responses`, values);
  },

  saveFile(questionnaireId, response, data) {
    return http.file(`/vendor/v1/questionnaires/${questionnaireId}/responses/${response._id}/files`, data);
  },

  updateResponse(questionnaireId, response) {
    return http.put(`/vendor/v1/questionnaires/${questionnaireId}/responses/${response._id}`, response);
  }
};
