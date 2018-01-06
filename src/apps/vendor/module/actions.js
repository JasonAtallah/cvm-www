import traverse from 'traverse';
import { getUrlParameter } from '../../../lib/url';
import api from './api';
import router from '../router';

export const init = ({ dispatch, commit }) => {
  if (getUrlParameter('qid')) {
    return Promise.all([
      dispatch('loadQuestionnaire')
    ])
    .then(() => {
      router.push({ path: '/intro' });
    });
  } else if (getUrlParameter('vid')) {
    return Promise.all([
      dispatch('loadVendor'),
    ])
    .then(() => {
      router.push({ path: '/home' });
    });
  }
  return Promise.reject(new Error('Failed to init'));
};

export const loadQuestionnaire = ({ dispatch, commit, state }) => {
  return api.getQuestionnaire(getUrlParameter('qid'))
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const loadBuyer = ({ dispatch, commit, state }) => {
  return api.getBuyer(state.vendor._id)
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const loadVendor = ({ dispatch, commit, state }) => {
  return api.getVendor(getUrlParameter('vid'))
    .then((vendor) => {
      commit('vendor', vendor);
      dispatch('loadBuyer', vendor);
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
  const questionnaire = state.questionnaire;
  const uploadPromises = [];

  traverse(response).forEach(function (elem) {
    if (elem && elem.formData) {
      uploadPromises.push(dispatch('saveFile', {
        response,
        fileData: elem
      })
        .then((result) => {
          this.update(result, true);
          return result;
        }));
    }
  });

  return Promise.all(uploadPromises)
    .then(() => {
      return response;
    });
};
