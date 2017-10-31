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

export const takeVendorAction = ({ commit }, { vendor, action }) => {
  switch (action.label) {
    case 'Approve':
      // eslint-disable-next-line
      console.log('approve vendor');
      break;

    case 'Reject':
      // eslint-disable-next-line
      console.log('reject vendor');
      break;

    default:

  }
};
