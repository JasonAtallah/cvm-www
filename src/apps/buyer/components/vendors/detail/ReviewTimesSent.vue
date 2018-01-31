<template>
  <div>
    <h3>Times sent to {{ vendor.company.name }}</h3>
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-6">
          <ElCard>
            <div slot="header" class="clearfix">
              <h3>Suggested Times</h3>
            </div>
            <div v-for="time in suggestedTimes" :key="time.date">
              <div class="row">
                <div class="col-sm-1">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="col-sm-10">
                  <h5>{{ time.location.name }}</h5>
                  <h6>{{ time.location.address }} {{ time.location.city }}, {{ time.location.state }}</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-1">
                  <i class="fa fa-calendar"></i>
                </div>
                <div class="col-sm-10">
                  <h5>{{ formatDate(time.startDate) }}</h5>
                  <h6>{{ formatTime(time) }}</h6>
                </div>
              </div>
              <hr>
            </div>
          </ElCard>
        </div>
        <div v-if="rejectedTimes.length > 0" class="col-sm-6">
          <ElCard>
            <div slot="header" class="clearfix">
              <h3>Rejected Times</h3>
            </div>
            <div v-for="time in rejectedTimes" :key="time.date">
              <div class="row">
                <div class="col-sm-1">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="col-sm-10">
                  <h5>{{ time.location.name }}</h5>
                  <h6>{{ time.location.address }} {{ time.location.city }}, {{ time.location.state }}</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-1">
                  <i class="fa fa-calendar"></i>
                </div>
                <div class="col-sm-10">
                  <h5>{{ formatDate(time.startDate) }}</h5>
                  <h6>{{ formatTime(time) }}</h6>
                </div>
              </div>
              <hr>
            </div>
          </ElCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import {
  Card as ElCard } from 'element-ui';

export default {
  components: {
    ElCard
  },
  props: ['params'],
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    }),
    rejectedTimes() {
      return this.params.vendor.state.rejectedTimes;
    },
    suggestedTimes() {
      return this.params.vendor.state.suggestedTimes;
    }
  },
  methods: {
    formatDate(startDate) {
      return moment(startDate).format('MMMM DD, YYYY');
    },
    formatTime(time) {
      const startTime = moment(time.startDate).format('hh:mm');
      const endTime = moment(time.startDate).add('30', 'minutes').format('hh:mm A');
      return `${startTime} - ${endTime}`;
    }
  }
};
</script>
