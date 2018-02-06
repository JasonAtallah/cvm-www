<style scoped>
.appt-card {
  max-width: 300px;
}
</style>

<template>
  <div>
  <h3>Scheduled appointment with {{ vendor.name }}</h3>
  <div class="card card-body bg-light">
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
      <div class="modal-footer">
        <button id="cancel-meeting" type="button" class="btn btn-danger" @click="confirmCancel">Cancel Meeting</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['params'],
  computed: {
    endTime() {
      return moment(this.vendor.state.selectedTime.startDate).add(this.vendor.state.selectedTime.duration, 'minutes').format('hh:mm A');
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
    confirmCancel() {
      this.$store.commit('takeAction', {
        type: 'cancelMeeting'
      });
    }
  }
};
</script>
