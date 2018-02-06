

module.exports = {
  profileComplete: (user) => {
    if (!user.profile.company.name || !user.profile.company.city || !user.profile.contact.firstName || !user.profile.contact.email) {
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
