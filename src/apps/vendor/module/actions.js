import api from './api';

export const init = ({ dispatch, commit }) => {
  return api.loadSession()
    .then((session) => {
      commit('session', session);
    });
};

export const loadQuestionnaire = ({ dispatch, commit }) => {
  return api.getQuestionnaire()
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const saveFile = ({ dispatch, commit }, fileObj) => {
  const formData = new FormData();
  formData.append('file', fileObj.file, fileObj.name);

  return api.uploadFile(formData);
};

export const submitResponse = ({ dispatch, commit }, response) => {
  return dispatch('submitResponseFileFields', response)
    .then(() => {
      return api.saveResponse(response);
    })
    .then((receipt) => {
      commit('receipt', receipt);
    });
};

export const submitResponseFileFields = ({ dispatch, commit }, response) => {
  const uploadFns = [];

  response.flowers.strains.forEach((strain, strainIndex) => {
    strain.testResults.forEach((fileObj, fileIndex) => {
      uploadFns.push(() => {
        return dispatch('saveFile', fileObj)
          .then((result) => {
            strain.testResults[fileIndex] = result;
            return result;
          });
      });
    });
  });

  return Promise.all(uploadFns.map(fn => fn()));
};
