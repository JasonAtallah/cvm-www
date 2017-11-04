
export const setSession = (state, session) => {
  state.profile.imageUrl = session.profile.imageUrl;
};

export const setDummy = (state, session) => {
  state.profile.loaded = true;
};

export const setGcalendarId = (state, gcalendarId) => {
  state.profile.gcalendarId = gcalendarId;
};
