

module.exports = {
  profileComplete: (user) => {
    // Object.keys(user.profile.company).forEach((field) => {
    //   console.log(user.profile.company[field]);
    // });
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
