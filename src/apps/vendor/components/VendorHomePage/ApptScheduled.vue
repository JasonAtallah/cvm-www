<template>
  <div class="container">
    <h2>Appointment</h2>
    <h4>Name: {{ buyer.state.startTime.name }}</h4>
    <h4>Location: {{ buyer.state.startTime.location }}</h4>
    <h4>Date: {{ buyer.state.startTime.startDate }}</h4>
    <h4>Time: {{ buyer.state.startTime.startTime }}</h4>
    <h4>Duration: {{ buyer.state.startTime.duration }}</h4>
    <button v-if="!cancelling" type="button" class="btn btn-danger btn-block" @click.prevent="cancelAppt">Cancel Appointment</button>
    <div v-if="cancelling">
      <span>Are you sure you want to cancel your appointment?</span>
      <button type="button" class="btn btn-danger " @click.prevent="confirmCancel(true)">Yes</button>
      <button type="button" class="btn btn-secondary " @click.prevent="confirmCancel(false)">No</button>
    </div>
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    })
  },
  data() {
    return {
      cancelling: false
    };
  },
  methods: {
    confirmCancel(confirm) {
      if (confirm === true) {
        this.$store.dispatch('cancelAppt', this.vendor._id);
      } else {
        this.cancelling = false;
      }
    },
    cancelAppt() {
      this.cancelling = true;
    }
  }
};
</script>
