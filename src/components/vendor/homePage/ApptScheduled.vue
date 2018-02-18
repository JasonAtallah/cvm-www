<template>
  <div class="container">
    <h3>You have the following meeting scheduled with {{ buyer.name }}</h3>
    <EventsList :eventsList="[buyer.state.selectedTime]" :unstyled="true" :breakupDateTime="true" :showAddress="true" />
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
import EventsList from '../../calendar/EventsList';

export default {
  components: {
    EventsList
  },
  data() {
    return {
      cancelling: false
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    })
  },
  methods: {
    confirmCancel(confirm) {
      if (confirm === true) {
        this.$store.dispatch('cancelAppt');
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
