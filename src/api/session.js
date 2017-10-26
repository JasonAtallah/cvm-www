
export default {

  load(cb, errCb) {
    $.get('/session', (session) => {
      cb(session);
    });
  }

};
