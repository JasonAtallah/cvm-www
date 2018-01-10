<style scoped>

</style>

<template>
  <div>
    <h3 class="modal-title">Scheduled appointment with {{ vendor.name }}</h3>
      <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-12">
          <!-- {{ vendor.state.selectedTime }} -->
          Date {{ startDate }}
          From {{ startTime }} to {{ endTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import {
  Button as ElButton } from 'element-ui';

export default {
  components: {
    ElButton
  },
  props: ['params'],
  computed: {
    endTime() {
      return moment(this.vendor.state.selectedTime.startDate).add(this.vendor.state.selectedTime.duration, 'minutes').format('hh:mm A');
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
  }
};
</script>
