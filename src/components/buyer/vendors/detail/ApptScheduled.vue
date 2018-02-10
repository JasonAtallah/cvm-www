<style scoped>
.appt-card {
  max-width: 300px;
}
</style>

<template>
  <Detail :title="genTitle" @save="confirmCancel" @cancel="cancel" saveLabel="Cancel Meeting">
    <div class="appt-card">
      <div class="row">
        <div class="col-sm-2">
          <i class="fa fa-calendar" />
        </div>
        <div class="col-sm-10">
          <div class="row">
            <div class="col-sm-12">
              <h5>{{ startDate }}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h6>{{ startTime }} - {{ endTime }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <i class="fa fa-map-marker" aria-hidden="true" />
        </div>
        <div class="col-sm-10">
          <div class="row">
            <div class="col-sm-12">
              <h5>{{ location.address }}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h5>{{ location.city }}, {{ location.state }} {{ location.zip }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Detail>
</template>

<script>
import moment from 'moment';
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail
  },
  props: ['params'],
  computed: {
    endTime() {
      return moment(this.vendor.state.selectedTime.startDate).add(this.vendor.state.selectedTime.duration, 'minutes').format('hh:mm A');
    },
    genTitle() {
      return `Scheduled appointment with ${this.vendor.name}`;
    },
    location() {
      return this.vendor.state.selectedTime.location;
    },
    startDate() {
      return moment(this.vendor.state.selectedTime.startDate).format('MMMM DD, YYYY');
    },
    startTime() {
      return moment(this.vendor.state.selectedTime.startDate).format('hh:mm A');
    },
    vendor() {
      return this.params.vendor;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    confirmCancel() {
      this.$store.commit('takeAction', {
        type: 'cancelMeeting'
      });
    }
  }
};
</script>
