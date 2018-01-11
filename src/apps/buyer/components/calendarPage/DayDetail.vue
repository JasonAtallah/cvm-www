<style scoped>
.event-list {
  list-style: none;
  padding: 0;
}

.event-list li {
  position: relative;
  padding: 1rem 1rem;
  margin-left: 6rem;
  border-left: 1px solid #CCC;
  border-right: 1px solid #CCC;
  border-top: 1px solid #CCC;
  min-height: 45px;

}

.event-list li:last-of-type {
  border-bottom: 1px solid #CCC;
}

.event-list li label {
  position: absolute;
  top: 15px;
  left: -5rem;
}

.event-list li .event {
  display: inline;
  padding: .5rem;
  margin-right: 1rem;
  background-color: rgba(102, 213, 187, 0.51);
  border-radius: 3px;
}
</style>

<template>
<div>
  <h3>{{ formatDate(this.date) }}</h3>
  <br/>
  <ul class="event-list">
    <li v-for="hour in day" :key="hour">
      <label>{{ formatHour(hour) }}</label>
      <div class="event" v-for="event in eventsOfHour(hour)" :key="event.id">
        <span><strong>{{ event.title }}</strong></span>
        <span>{{ formatEventTimes(event) }}</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['date', 'events'],
  computed: {
    day() {
      return _.range(7, 21);
    }
  },
  methods: {
    eventsOfHour(hour) {
      return _.chain(this.events)
        .filter((event) => {
          return moment(event.startDate).isSame(this.date, 'day');
        })
        .filter((event) => {
          const start = new Date(event.startDate);
          return start.getHours() >= hour && start.getHours() < hour + 1;
        })
        .sortBy('startDate')
        .value();
    },
    formatDate(date) {
      return moment(date).format('LL');
    },
    formatEventTimes(event) {
      return `${moment(event.startDate).format('h:mm A')} - ${moment(event.endDate).format('h:mm A')}`;
    },
    formatHour(hour) {
      return moment(hour, 'H').format('h:mm A');
    }
  }
};
</script>
