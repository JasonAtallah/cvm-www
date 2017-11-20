import api from './api';
import { getUrlParameter } from '../../../lib/url';

export const init = ({ dispatch, commit }) => {
  return Promise.all([
    dispatch('loadQuestionnaire')
  ]);
};

export const loadQuestionnaire = ({ dispatch, commit, state }) => {
  console.log(getUrlParameter('qid'));
  return api.getQuestionnaire(getUrlParameter('qid'))
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const saveFile = ({ dispatch, commit, state }, params) => {
  const formData = new FormData();
  formData.append('file', params.fileObj.file, params.fileObj.name);

  return api.saveFile(getUrlParameter('qid'), params.responseId, formData);
};

export const submitResponse = ({ dispatch, commit, state }, response) => {
  return api.saveResponse(getUrlParameter('qid'), response)
    .then((response) => {
      return dispatch('submitResponseFileFields', response);
    })
    .then((response) => {
      commit('finalResponse', response);
    });
};

export const submitResponseFileFields = ({ dispatch, commit }, response) => {
  const uploadFns = [];

  response.flowers.strains.forEach((strain, strainIndex) => {
    strain.testResults.forEach((fileObj, fileIndex) => {
      uploadFns.push(() => {
        return dispatch('saveFile', {
          fileObj,
          responseId: response._id
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
