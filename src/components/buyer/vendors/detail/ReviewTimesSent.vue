<template>
  <Detail :title="genTitle" :showCancel="false" @save="cancel" saveLabel="Close">
    <div class="row">
      <div class="col-sm-6">
        <h3>Suggested Times</h3>
        <div v-for="time in suggestedTimes" :key="time.date">
          <div class="row">
            <div class="col-sm-1">
              <i class="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div class="col-sm-10">
              <h5>{{ time.location.name }}</h5>
              <h6>{{ time.location.address }} {{ time.location.city }}, {{ time.location.state }}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <i class="fa fa-calendar" />
            </div>
            <div class="col-sm-10">
              <h5>{{ formatDate(time.startDate) }}</h5>
              <h6>{{ formatTime(time) }}</h6>
            </div>
          </div>
          <hr v-if="suggestedTimes.length > 1">
        </div>
      </div>
      <div v-if="rejectedTimes.length > 0" class="col-sm-6">
        <h3>Rejected Times</h3>
        <div v-for="time in rejectedTimes" :key="time.date">
          <div class="row">
            <div class="col-sm-1">
              <i class="fa fa-map-marker" aria-hidden="true" />
            </div>
            <div class="col-sm-10">
              <h5>{{ time.location.name }}</h5>
              <h6>{{ time.location.address }} {{ time.location.city }}, {{ time.location.state }}</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <i class="fa fa-calendar" />
            </div>
            <div class="col-sm-10">
              <h5>{{ formatDate(time.startDate) }}</h5>
              <h6>{{ formatTime(time) }}</h6>
            </div>
          </div>
          <hr v-if="rejectedTimes.length > 1">
        </div>
      </div>
    </div>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '@/components/masterDetail/Detail';
import moment from 'moment';

export default {
  components: {
    Detail,
  },
  props: ['params'],
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    }),
    genTitle() {
      return `Times sent to ${this.vendor.company.name}`;
    },
    rejectedTimes() {
      return this.params.vendor.state.rejectedTimes;
    },
    suggestedTimes() {
      return this.params.vendor.state.suggestedTimes;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
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
