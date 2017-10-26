import buyerApi from '../../../api/buyer';

export const loadVendors = ({ rootState, commit }) => {
  buyerApi.getVendors()
    .then((vendors) => {
      commit('setVendors', vendors);
    });
};

export const loadEvents = ({ rootState, commit }) => {
  buyerApi.getEvents()
    .then((events) => {
      commit('setEvents', events);
    });
};
