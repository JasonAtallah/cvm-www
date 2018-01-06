
<template>
  <div class="container">
    <h2>Vendor reviews times</h2>
    <h3>Please select meeting time</h3>
    <form>
      <span v-for="appt in buyer.state.suggestedTimes">
        <input type="radio" name="selectedTime" :value="appt" v-model="selectedTime"> {{ appt.name }} - {{ appt.startDate }} at {{ appt.startTime }} for {{ appt.duration }} minutes at {{ appt.location }}<br>
      </span>
      <input type="radio" name="selectedTime" value="None" v-model="selectedTime"> None of the above work for me<br>

      <button type="button" class="btn btn-primary" @click.prevent="send">Send</button>
    </form>
{{ scheduleAppt }}

  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      scheduledAppt: 'scheduledAppt',
      vendor: 'vendor'
    })
  },
  date() {
    return {
      selectedTime: null
    };
  },
  methods: {
    send() {
      if (this.selectedTime === 'None') {
        this.$store.dispatch('rejectAllTimes', this.vendor._id);
      } else {
        this.$store.dispatch('confirmAppt', {
          selectedTime: this.selectedTime,
          vendorId: this.vendor._id
        });
      }
    }
  }
};
</script>
