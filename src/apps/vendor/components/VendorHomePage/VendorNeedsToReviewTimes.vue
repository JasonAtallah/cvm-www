
<template>
  <div class="container">
    <h3>Please select a time to meet</h3>
    <br>
    <form>
      <div class="form-group">
        <span v-for="appt in buyer.state.suggestedTimes" :key="appt.startTime">
          <input type="radio" name="selectedTime" :value="appt" v-model="selectedTime"> {{ appt.name }} - {{ appt.startDate }} at {{ appt.startTime }} for {{ appt.duration }} minutes at {{ appt.location }}<br><br>
        </span>
        <input type="radio" name="selectedTime" value="None" v-model="selectedTime"> None of those times work for me<br><br>
        <button type="button" class="btn btn-primary btn-block" @click.prevent="send">Send</button>
      </div>
    </form>

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
      if (this.selectedTime) {
        if (this.selectedTime === 'None') {
          this.$store.dispatch('rejectAllTimes');
        } else {
          this.$store.dispatch('confirmAppt', this.selectedTime);
        }
      }
    }
  }
};
</script>
