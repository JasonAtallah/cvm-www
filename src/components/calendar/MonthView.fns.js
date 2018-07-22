import moment from 'moment';
import momentTimezone from 'moment-timezone';

export const daysInMonth = (month, year) => {
  const m = month + 1;
  if (m === 2) {
    if ((year & 3) || (!(year % 25) && year & 15)) {
      return 28;
    }
    return 29;
  }

  return 30 + (m + (m >> 3) & 1);
};

export const daysMatch = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
};

export const monthsMatch = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth();
};

export const daysOfMonth = (month, year) => {
  const dayQty = daysInMonth(month, year);
  const today = new Date();
  const days = [];

  for (let dayNumber = 1; dayNumber <= dayQty; dayNumber++) {
    const dayDate = new Date(year, month, dayNumber, 0, 0, 0, 0);
    days.push({
      date: dayDate,
      isToday: (daysMatch(dayDate, today))
    });
  }

  return days;
};

export const padFirstWeek = (week) => {
  if (week.days.length === 7) return;

  const firstDate = week.days[0].date;
  const firstDay = firstDate.getDay();
  const firstDateM = moment(firstDate);

  for (let i = firstDay - 1; i >= 0; i--) {
    week.days.unshift({
      date: firstDateM.add(-1, 'days').toDate(),
      blank: true
    });
  }
};

export const padLastWeek = (week) => {
  if (week.days.length === 7) return;

  const lastDate = week.days[week.days.length - 1].date;
  const lastDay = lastDate.getDay();
  const lastDateM = moment(lastDate);

  for (let i = lastDay + 1; i <= 6; i++) {
    week.days.push({
      date: lastDateM.add(1, 'days').toDate(),
      blank: true
    });
  }
};

export const daysToWeeks = (days) => {
  const weeks = days.reduce((weeks, day) => {
    const week = weeks.length > 0 ? weeks[weeks.length - 1] : null;
    if (week === null || day.date.getDay() === 0) {
      weeks.push({
        index: weeks.length,
        days: [day]
      });
    } else {
      week.days.push(day);
    }

    return weeks;
  }, []);

  padFirstWeek(weeks[0]);
  padLastWeek(weeks[weeks.length - 1]);

  return weeks;
};

export const populateEvents = (days, events) => {
  days.forEach((day) => {
    const dayM = moment(day.date);
    day.events = events.filter((event) => {
      return dayM.isSame(event.startDate, 'day');
    });
  });

  return days;
};
