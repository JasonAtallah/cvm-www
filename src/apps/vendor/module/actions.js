import api from './api';
import { getUrlParameter } from '../../../lib/url';

export const init = ({ dispatch, commit }) => {
  return Promise.all([
    dispatch('loadQuestionnaire')
  ]);
};

export const loadQuestionnaire = ({ dispatch, commit, state }) => {
  return api.getQuestionnaire(getUrlParameter('qid'))
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
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

export const submitResponseFileFields = ({ dispatch, commit }, response) => {
  const uploadFns = [];

  response.flowers.strains.forEach((strain, strainIndex) => {
    strain.testResults.forEach((fileData, fileIndex) => {
      uploadFns.push(() => {
        return dispatch('saveFile', {
          response,
          fileData,
          dummy: 1
        })
          .then((result) => {
            strain.testResults[fileIndex] = result;
            return result;
          });
      });
    });
  });

  return Promise.all(uploadFns.map(fn => fn()))
    .then(() => {
      return response;
    });
};
