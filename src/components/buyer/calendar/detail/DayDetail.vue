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
        <ElPopover ref="eventPopOver" :title="event.title" width="200" trigger="click">
          <hr>
          <div class="popoverContent">
            <div class="row">
              <div class="col-sm-2">
                <i class="el-icon-time"></i>
              </div>
              <div class="col-sm-10">
                <h5>{{ formatDate(date) }}</h5>
                <h6>{{ formatEventTimes(event) }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <i class="el-icon-location-outline"></i>
              </div>
              <div class="col-sm-10">
                <h5>{{ event.location }}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <i class="el-icon-date"></i>
              </div>
              <div class="col-sm-10">
                <h5>{{ buyerCalendar() }}</h5>
              </div>
            </div>
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

export default {
  components: {
    Detail,
    ElPopover,
    ElTooltip
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
    eventInfo(event) {
      return event;
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
    formatEventTimes(event) {
      return `${moment(event.startDate).format('h:mm A')} - ${moment(event.endDate).format('h:mm A')}`;
    },
    formatHour(hour) {
      return moment(hour, 'H').format('h:mm A');
    }
  }
};
</script>
