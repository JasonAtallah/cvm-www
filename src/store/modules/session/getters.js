export const auth = state => state.auth;
export const isAuthenticated = (state) => {
  if (!state.auth) return false;
  const expiresAt = JSON.parse(state.auth.expiresAt);
  return new Date().getTime() < expiresAt;
};
export const profile = state => state.profile;
