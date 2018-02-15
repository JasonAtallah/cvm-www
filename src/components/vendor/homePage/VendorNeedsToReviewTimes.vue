
<template>
  <div class="container">
    <h3>Please select a time to meet</h3>
    <br>
    <form>
      <div class="form-group">
        <div v-for="(time, index) in buyer.state.suggestedTimes" :key="index">
          <div class="row">
            <div class="col-sm-1">
              <input type="radio" name="selectedTime" :value="time" v-model="selectedTime">
            </div>
            <div class="col-sm-8">
              <EventsList :eventsList="[time]" :unstyled="true" :showAddress="true" />
            </div>
          </div>
        </div>
        <input type="radio" name="selectedTime" value="None" v-model="selectedTime"> None of those times work for me<br><br>
        <button type="button" class="btn btn-primary btn-block" @click.prevent="send">Send</button>
      </div>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import EventsList from '../../calendar/EventsList';

export default {
  components: {
    EventsList
  },
  data() {
    return {
      selectedTime: null
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      scheduledAppt: 'scheduledAppt',
      vendor: 'vendor'
    })
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
