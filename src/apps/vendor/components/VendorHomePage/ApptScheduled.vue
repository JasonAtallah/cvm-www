<template>
  <div class="container">

    <h2>Appointment</h2>
    <table class="table">
      <tr>
        <th>Name</th>
        <td>{{ buyer.state.startTime.name }}</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>{{ buyer.state.startTime.location }}</td>
      </tr>
      <tr>
        <th>Date</th>
        <td>{{ buyer.state.startTime.startDate }}</td>
      </tr>
      <tr>
        <th>Time</th>
        <td>{{ buyer.state.startTime.startTime }}</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>{{ buyer.state.startTime.duration }}</td>
      </tr>
    </table>
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
