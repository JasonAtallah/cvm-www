

module.exports = {
  profileComplete: (user) => {
    if (!user.profile.company.namea) {
      return false;
    }
    return true;
  },

  calendarSelected: (user) => {
    if (!user.gcalendar.name) {
      return false;
    }
    return true;
  }
};
