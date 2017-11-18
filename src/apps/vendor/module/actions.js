import api from './api';

export const loadQuestionnaire = ({ dispatch, commit }) => {
  return api.getQuestionnaire()
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};
