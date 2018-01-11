<style scoped>
i.fa.fa-star {
    float: left;
    margin: .2rem;
    color: #CC9E61;
}

.monthly-day.monthly-day-selected {
  background-color: rgba(102, 213, 187, 0.51);
}

.monthly-today .monthly-day-number {
  font-weight: bold;
  background-color: #DEDEDE;
  padding: .1rem .3rem;
}

.monthly-day:hover {
	cursor: pointer;
  background-color: rgba(112, 236, 207, 0.51);
	color: #000;
}
</style>

<template>
<div class="monthview monthly">
  <div class="monthly-header">
    <div class="monthly-header-title">
      <span>{{ monthFormatted }}</span>
      <a v-if="!isToday" href="#" class="monthly-header-title-date" @click="gotoToday()">Today</a>
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
      <div class="monthly-day" v-for="day in week.days" :key="day.date.getTime()"
        :data-number="day.date.getDate()"
        :class="getMonthlyDayClass(day)"
        @click="selectDay(day)">

        <div class="monthly-day-number">
          {{ day.date.getDate() }}
        </div>

        <div v-for="(event,i) in eventsForDay(day)" :key="getKeyForEvent(event, i)">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>

        <div class="monthly-indicator-wrap"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import { daysOfMonth, daysToWeeks, populateEvents, daysMatch, monthsMatch } from './MonthView.fns';

export default {
  props: ['events'],
  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      selectedDate: null
    };
  },
  computed: {
    curMonth() {
      return new Date(this.year, this.month);
    },
    isToday() {
      return monthsMatch(new Date(), this.curMonth);
    },
    monthFormatted() {
      return moment(this.curMonth).format('MMM YYYY');
    },
    weeks() {
      return daysToWeeks(daysOfMonth(this.month, this.year));
    }
  },
  methods: {
    decrementMonth() {
      this.month--;
      if (this.month < 0) {
        this.month = 11;
        this.year--;
      }
    },
    eventsForDay(day) {
      if (!this.events) return [];
      return this.events.filter((event) => {
        return daysMatch(moment(event.startDate).toDate(), day.date);
      });
    },
    getKeyForEvent(event, index) {
      return `${event.startDate}.${index}`;
    },
    getMonthlyDayClass(day) {
      return {
        'monthly-is-other-month': this.isOtherMonth(day),
        'monthly-today': day.isToday,
        'monthly-day-selected': day.date === this.selectedDate
      };
    },
    gotoToday() {
      const today = new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
    },
    incrementMonth() {
      this.month++;
      if (this.month === 12) {
        this.month = 0;
        this.year++;
      }
    },
    isOtherMonth(day) {
      return day.date.getMonth() !== this.month || day.date.getFullYear() !== this.year;
    },
    selectDay(day) {
      this.selectedDate = day.date;
      this.$emit('dayClick', day.date);
    }
  },
  beforeMount() {
    this.$emit('changeMonth', this.curMonth);
  }
};
</script>
