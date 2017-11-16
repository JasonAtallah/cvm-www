import api from './api';

export const loadQuestionnaire = ({ dispatch, commit }) => {
  return api.loadQuestionnaire()
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const init = ({ dispatch }) => {
};
