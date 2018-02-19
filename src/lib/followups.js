import store from '@/apps/buyer/store';

export const notifySuccess = (message) => {
  return (location) => {
    const notificationInfo = {
      title: 'Success',
      message,
      type: 'success',
      duration: 2000
    };
    store.commit('notificationInfo', notificationInfo);
  };
};

export const notifyError = (message) => {
  return (location) => {
    const notificationInfo = {
      title: 'Error',
      message,
      type: 'error',
      duration: 2000
    };
    store.commit('notificationInfo', notificationInfo);
  };
};
