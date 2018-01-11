<style >
.cancel-meeting-btn {
  width: 100%;
}
</style>

<template>
  <div>
    <h2 class="modal-title">Scheduled appointment with {{ vendor.name }}</h2>
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-md-4">
          <ElCard>
            <h3>{{ startDate }}</h3><br>
            <h3>{{ startTime }} - {{ endTime }}</h3><br>
            <h4>{{ location.address }}</h4>
            <h4>{{ location.city }}, {{ location.state }} {{ location.zip }}</h4>
          </ElCard>
          <br>
          <ElButton class="cancel-meeting-btn" type="danger" size="medium" @click="confirmCancel">Cancel Meeting</ElButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import {
  Button as ElButton,
  Card as ElCard } from 'element-ui';

export default {
  components: {
    ElButton,
    ElCard
  },
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
