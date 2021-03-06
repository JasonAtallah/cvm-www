import _ from 'lodash';
import traverse from 'traverse';
import { getUrlParameter } from '../../../lib/url';
import api from './api';
import router from '../router';

export const cancelAppt = ({ commit, state }) => {
  return api.cancelAppt(state.vendorId)
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const confirmAppt = ({ commit, state }, selectedTime) => {
  return api.confirmAppt(state.vendorId, selectedTime)
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const init = ({ dispatch, commit }) => {
  if (getUrlParameter('qid')) {
    return Promise.all([
      dispatch('loadQuestionnaire')
    ])
      .then(() => {
        router.push({ path: '/intro' });
      });
  } else if (getUrlParameter('vid')) {
    commit('vendorId', getUrlParameter('vid'));
    return Promise.all([
      dispatch('loadVendor'),
      dispatch('loadBuyer')
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
  return api.getBuyer(state.vendorId)
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const loadVendor = ({ dispatch, commit, state }) => {
  return api.getVendor(state.vendorId)
    .then((vendor) => {
      commit('vendor', vendor);
    });
};

export const rejectAllTimes = ({ commit, state }) => {
  return api.rejectAllTimes(state.vendorId)
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const saveFile = ({ dispatch, commit, state }, params) => {
  return api.saveFile(getUrlParameter('qid'), params.response, params.fileData.formData);
};

export const submitResponse = ({ dispatch, commit, state }, response) => {
  const responseCopy = _.cloneDeep(response);

  traverse(responseCopy).forEach(function (elem) {
    if (elem && elem.length && elem[0].formData) {
      this.update([], true);
    }
  });

  return api.saveResponse(getUrlParameter('qid'), responseCopy)
    .then((savedResponse) => {
      response._id = savedResponse._id;
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
  const { questionnaire } = state;
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
