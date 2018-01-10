<style scoped>
.event-list {
  list-style: none;
  padding: 0;
  max-width: 500px;
}

.event-list li {
  margin: 1rem 0;
  padding: 1rem;
  background-color: rgba(102, 213, 187, 0.51);
}
</style>

<template>
<div>
  <h3>{{ formatDate(this.date) }}</h3>
  <br/>
  <ul class="event-list">
    <li v-for="event in visibleEvents" :key="event.id" class="card">
      <h5 class="card-title">{{ event.title }}</h5>
      <p>
        {{ formatEventTimes(event) }}
      </p>
    </li>
  </ul>
</div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['date', 'events'],
  computed: {
    visibleEvents() {
      return _.chain(this.events)
        .filter((event) => {
          return moment(event.startDate).isSame(this.date, 'day');
        })
        .sortBy('startDate')
        .value();
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('LL');
    },
    formatEventTimes(event) {
      return `${moment(event.startDate).format('h:mm A')} - ${moment(event.endDate).format('h:mm A')}`;
    }
  }
};
</script>
