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
</style>
<template>
  <div class="row">
    <div class="col-12">
      <ul class="list-unstyled" :class="{ 'timesList': !unstyled}">
        <li v-for="(time, index) in eventsList" :key="index">
          <div class="row">
            <div class="col-sm-12">
              <i class="el-icon-time"></i>
              <span>{{ genDateTimeDisplay(time) }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <i class="el-icon-location-outline"></i>
              <span>{{ getLocation(time) }}</span>
            </div>
          </div>
          <div class="row" v-if="canRemove === true">
            <div class="col-sm-2">
              <i class="el-icon-delete"></i>
              <button type="button" class="btn btn-link" @click.prevent="removeTime(index)">Remove</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['eventsList', 'canRemove', 'unstyled'],
  methods: {
    formatDate(date) {
      return moment(date).format('LLL');
    },
    formatTime(date) {
      return moment(date).format('h:mm A');
    },
    genDateTimeDisplay(time) {
      return `${this.formatDate(time.startDate)} to ${this.formatTime(this.getEndDate(time))}`;
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
    removeTime(index) {
      this.$emit('removeTime', index);
    }
  }
};
</script>
