
<style scoped>
.monthly-header-title, .monthly-header-link {
  display: inline-block;
}
.monthly-is-other-month {
  background-color: #F9F9F9;
}
</style>

<template>
<div class="monthview monthly">
  <div class="monthly-header">
    <div class="monthly-header-title">
      <a href="#" class="monthly-header-title-date" onclick="return false">{{ monthFormatted }}</a>
    </div>
    <div class="monthly-header-link" v-if="!isToday">
      <a href="#" class="monthly-header-title-date" @click="gotoToday()">Today</a>
    </div>
    <a href="#" class="monthly-prev" @click="decrementMonth"></a>
    <a href="#" class="monthly-next" @click="incrementMonth"></a>
  </div>

  <div class="monthly-day-title-wrap">
    <div>Sun</div>
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
  </div>
  <div class="monthly-day-wrap">
    <div class="monthly-week" v-for="week in weeks">
      <div class="m-d" v-for="day in week.days" :key="day.date.getTime()"
        :data-number="day.date.getDate()"
        :class="{ 'monthly-day': true, 'monthly-day-event': true, 'monthly-is-other-month': isOtherMonth(day), 'monthly-today': day.isToday === true }">

        <div class="monthly-day-number">
          <a href="#" @click.prevent="onDayClick(day)">{{ day.date.getDate() }}</a>
        </div>

        <div v-for="(event,i) in eventsForDay(day)" :key="getKeyForEvent(event, i)">
          <a href="#" @click.prevent="onClickEvent(event)">{{ event.summary }}</a>
        </div>

        <div class="monthly-indicator-wrap"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { daysOfMonth, daysToWeeks, populateEvents, daysMatch, monthsMatch } from './MonthView.fns';

export default {
  props: ['events', 'eventDateField'],
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };
  },
  computed: {
    isToday() {
      return monthsMatch(new Date(), this.curMonth);
    },
    curMonth() {
      return new Date(this.year, this.month);
    },
    weeks() {
      return daysToWeeks(daysOfMonth(this.month, this.year));
    },
    monthFormatted() {
      return moment(this.curMonth).format('MMM YYYY');
    }
  },
  methods: {
    isOtherMonth(day) {
      return day.date.getMonth() !== this.month || day.date.getFullYear() !== this.year;
    },
    onDayClick(day) {
      this.$emit('clickDay', day);
    },
    onClickEvent(event) {
      this.$emit('clickEvent', event);
    },
    eventsForDay(day) {
      if (!this.events) return [];
      return this.events.filter((event) => {
        return daysMatch(event[this.eventDateField], day.date);
      });
    },
    getKeyForEvent(event, index) {
      return `${event[this.eventDateField].getTime()}.${index}`;
    },
    decrementMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
    },
    incrementMonth() {
      this.month++;
      if (this.month === 12) {
        this.month = 0;
        this.year++;
      }
    },
    gotoToday() {
      const today = new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
    }
  },
  beforeMount() {
    this.$emit('changeMonth', this.curMonth);
  }
};
</script>
