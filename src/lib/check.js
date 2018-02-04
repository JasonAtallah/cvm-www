

module.exports = {
  profileComplete: (user) => {
    // Object.keys(user.profile.company).forEach((field) => {
    //   console.log(user.profile.company[field]);
    // });
    if (!user.profile.company.name) {
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
