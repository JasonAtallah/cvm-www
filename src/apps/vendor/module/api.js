import * as http from '@/lib/http';

export default {
  getQuestionnaire() {
    return http.get('/api/questionnaire');
  },

  loadSession() {
    return http.get('/session');
  },

  saveResponse(response) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          text: 'ariel'
        });
      }, 2000);
    });
  },

  uploadFile(formData) {
    return http.file('/api/files', formData);
  }
};
