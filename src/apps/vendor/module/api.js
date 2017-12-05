import * as http from '@/lib/http';

export default {
  getQuestionnaire(questionnaireId) {
    return http.get(`/api/questionnaires/${questionnaireId}`);
  },

  getVendor(vendorId) {
    return http.get(`/api/vendors/${vendorId}`);
  },

  saveResponse(questionnaireId, values) {
    return http.post(`/api/questionnaires/${questionnaireId}/responses`, values);
  },

  saveFile(questionnaireId, response, data) {
    return http.file(`/api/questionnaires/${questionnaireId}/responses/${response._id}/files`, data);
  },

  updateResponse(questionnaireId, response) {
    return http.put(`/api/questionnaires/${questionnaireId}/responses/${response._id}`, response);
  }
};
