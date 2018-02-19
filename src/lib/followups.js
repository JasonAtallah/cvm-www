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
      message: 'Something Went Wrong',
      type: 'error',
      duration: 2000
    };
    if (message) {
      notificationInfo.message = message;
    }
    store.commit('notificationInfo', notificationInfo);
  };
};
