import * as http from '@/lib/http';

export default {
  getQuestionnaire() {
    return http.get('/data/questionnaire');
  }
};
