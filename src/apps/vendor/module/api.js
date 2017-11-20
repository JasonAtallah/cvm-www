import * as http from '@/lib/http';

export default {
  getQuestionnaire(questionnaireId) {
    return http.get(`/api/questionnaires/${questionnaireId}`);
  },

  saveResponse(buyerId, response) {
    return http.post(`/api/questionnaires/${buyerId}/responses`, response);
  },

  saveFile(buyerId, responseId, formData) {
    return http.file(`/api/questionnaires/${buyerId}/responses/${responseId}/files`, formData);
  }
};
