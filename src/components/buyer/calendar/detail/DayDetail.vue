<style scoped>
.event-list {
  list-style: none;
  padding: 0;
}

.event-list li {
  position: relative;
  margin-left: 6rem;
  border-left: 1px solid #CCC;
  border-right: 1px solid #CCC;
  border-top: 1px solid #CCC;
  min-height: 45px;
  background-color: #FFF;
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
  display: inline-flex;
  padding: .5rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  background-color: rgba(102, 213, 187, 0.51);
  border-radius: 3px;
  cursor: pointer;
}
</style>

<template>
<Detail :title="formatDate(this.date)" description=""
  :showSave="false" :showCancel="false">

  <ul class="event-list">
    <li v-for="hour in day" :key="hour">
      <label>{{ formatHour(hour) }}</label>
      <div class="event" v-for="event in eventsOfHour(hour)" :key="event.id">
        <ElPopover ref="eventPopOver" :title="event.title" trigger="click">
          <hr>
          <div class="popoverContent">
            <EventsList :eventsList="[event]" :unstyled="true" :breakupDateTime="true" />
          </div>
          <span slot="reference"><strong>{{ event.title }}</strong></span>
        </ElPopover>
      </div>
    </li>
  </ul>
</Detail>
</template>

<script>
import moment from 'moment';
import {
  Popover as ElPopover,
  Tooltip as ElTooltip } from 'element-ui';
import Detail from '@/components/masterDetail/Detail';
import EventsList from '../../../calendar/EventsList';

export default {
  components: {
    Detail,
    ElPopover,
    ElTooltip,
    EventsList
  },
  props: ['date', 'events'],
  computed: {
    day() {
      return _.range(0, 24);
    }
  },
  methods: {
    buyerCalendar() {
      return this.$store.getters.buyer.gcalendar.name;
    },
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
    formatHour(hour) {
      return moment(hour, 'H').format('h:mm A');
    }
  }
};
</script>
