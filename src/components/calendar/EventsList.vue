<style scoped>
ul.timesList {
  padding-left: 0;
}

ul.timesList li {
  background-color: #FFF;
  padding: 15px;
  border: 1px solid #DDD;
  margin-bottom: 1rem;
}

ul.timesList button {
  padding: 0;
}

div.event-detail {
  padding-left: 5px;
}
</style>
<template>
  <div class="row">
    <div class="col-12">
      <ul class="list-unstyled" :class="{ 'timesList': !unstyled}">
        <li v-for="(time, index) in eventsList" :key="index">
          <div class="row">
            <div class="col-sm-1">
              <i class="el-icon-time"></i>
            </div>
            <div class="col-sm-10 event-detail">
              <span>{{ formatDate(time.startDate) }}</span>
              <br v-if="breakupDateTime">
              <span>{{ formatTime(time.startDate) }} to {{ formatTime(getEndDate(time)) }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <i class="el-icon-location-outline"></i>
            </div>
            <div class="col-sm-10 event-detail">
              <span>{{ getLocation(time) }}</span>
              <br>
              <a v-if="showAddress" :href="mapLink(time.location)" target="_blank">{{ getAddress(time.location) }}</a>
            </div>
          </div>
          <div class="row" v-if="canRemove === true">
            <div class="col-sm-1">
              <i class="el-icon-delete"></i>
            </div>
            <div class="col-sm-10 event-detail">
              <button type="button" class="btn btn-link" @click.prevent="removeTime(index)">Remove</button>
            </div>
          </div>
          <hr v-if="unstyled && eventsList.length > 1">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['eventsList', 'canRemove', 'unstyled', 'showAddress', 'breakupDateTime'],
  methods: {
    formatDate(startDate) {
      return moment(startDate).format('MMMM DD, YYYY');
    },
    formatTime(time) {
      return moment(time).format('h:mm A');
    },
    getEndDate(time) {
      if (time.endDate) {
        return time.endDate;
      }
      return moment(time.startDate).add(time.duration, 'minutes').toDate();
    },
    getLocation(time) {
      if (time.location.name) {
        return time.location.name;
      }
      return time.location;
    },
    getAddress(location) {
      return `${location.address} ${location.city}, ${location.state} ${location.zip}`;
    },
    mapLink(location) {
      return `https://www.google.com/maps/place/${location.address},+${location.city},+${location.state}+${location.zip}`;
    },
    removeTime(index) {
      this.$emit('removeTime', index);
    }
  }
};
</script>
