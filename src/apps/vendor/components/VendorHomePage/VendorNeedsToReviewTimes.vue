
<template>
  <div class="container">
    <h3>Please select a time to meet</h3>
    <br>
    <form>
      <div class="form-group">
        <span v-for="appt in buyer.state.suggestedTimes" :key="appt.startTime">
          <div class="row">
            <div class="col-sm-1">
              <input type="radio" name="selectedTime" :value="appt" v-model="selectedTime">
            </div>
            <div class="col-sm-8">
              {{ startDate(appt) }}
              <br>
              {{ startTime(appt) }} to {{ endTime(appt) }}
              <br>
              <a :href="mapLink(appt.location)" target="_blank">{{ location(appt.location) }}</a>
            </div>        
          </div>
           
          <br><br>
        </span>
        <input type="radio" name="selectedTime" value="None" v-model="selectedTime"> None of those times work for me<br><br>
        <button type="button" class="btn btn-primary btn-block" @click.prevent="send">Send</button>
      </div>
    </form>

  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

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
    apptDateTime(appt) {
      const date = moment(appt.startDate, 'YYYY-MM-DD');
      const month = moment().month(date.month()).format('MMMM');
      const startTime = moment(appt.startTime, 'hh:mm');
      const endTime = startTime.add(appt.duration, 'minutes').format('hh:mm A');
      return `${month} ${date.day()}, ${date.year()} ${startTime.format('h:mm a')} to ${endTime}`;
    },
    endTime(appt) {
      return moment(appt.startDate).add(appt.duration, 'minutes').format('hh:mm A');
    },
    location(location) {
      return `${location.address} ${location.city}, ${location.state} ${location.zip}`;
    },
    mapLink(location) {
      return `https://www.google.com/maps/place/${location.address},+${location.city},+${location.state}+${location.zip}`;
    },
    send() {
      if (this.selectedTime) {
        if (this.selectedTime === 'None') {
          this.$store.dispatch('rejectAllTimes');
        } else {
          this.$store.dispatch('confirmAppt', this.selectedTime);
        }
      }
    },
    startDate(appt) {
      return moment(appt.startDate).format('MMMM DD, YYYY');
    },
    startTime(appt) {
      return moment(appt.startDate).format('hh:mm A');
    },
  }
};
</script>
