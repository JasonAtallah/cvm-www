
export default {

  load(cb, errCb) {
    $.get('/session', (session) => {
      cb(session);
    });
  },

  getProfile(client, accessToken, cb) {
    client.userInfo(accessToken, cb);
  }

};
