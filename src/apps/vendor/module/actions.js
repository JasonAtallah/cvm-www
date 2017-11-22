import { getUrlParameter } from '../../../lib/url';
import api from './api';
import { pullFileFields } from './fns';

export const init = ({ dispatch, commit }) => {
  return Promise.all([
    dispatch('loadQuestionnaire')
  ]);
};

export const loadQuestionnaire = ({ dispatch, commit, state }) => {
  return api.getQuestionnaire(getUrlParameter('qid'))
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
      const fileFields = pullFileFields(questionnaire);
      console.dir(fileFields);
    });
};

export const saveFile = ({ dispatch, commit, state }, params) => {
  return api.saveFile(getUrlParameter('qid'), params.response, params.fileData.formData);
};

export const submitResponse = ({ dispatch, commit, state }, response) => {
  return api.saveResponse(getUrlParameter('qid'), response)
    .then((newResp) => {
      response._id = newResp._id;
      return dispatch('submitResponseFileFields', response);
    })
    .then((response) => {
      return api.updateResponse(getUrlParameter('qid'), response);
    })
    .then((response) => {
      commit('finalResponse', response);
    });
};

export const submitResponseFileFields = ({ dispatch, commit, state }, response) => {
  const uploadPromises = [];
  const questionnaire = state.questionnaire;
  const pages = ['flowers', 'edibles', 'concentrates'];
  const questions = ['photo', 'testResults'];

  pages.forEach((page) => {
    response[page].products.forEach((product) => {
      questions.forEach((question) => {
        for (let i = 0; i < product[question].length; i++) {
          uploadPromises.push(dispatch('saveFile', {
            response,
            fileData: product[question][i],
            dummy: 1
          })
            .then((result) => {
              product[question][i] = result;
              return result;
            }));
        }
      });
    });
  });

  return Promise.all(uploadPromises)
    .then(() => {
      return response;
    });
};
