
<template>
  <Detail :title="detailHeader.title" :description="detailHeader.description"
    :showSave="true" :canSave="selectedTime !== null" :showCancel="false"
    saveLabel="Send" @save="send">
    <h3>Please select a time to meet.</h3>
    <form>
      <div class="form-group">
        <div class="row" v-for="(time, index) in buyer.state.suggestedTimes" :key="index">
          <div class="col-sm-1">
            <input type="radio" name="selectedTime" :value="time" v-model="selectedTime">
          </div>
          <div class="col-sm-8">
            <EventsList :eventsList="[time]" :unstyled="true" :showAddress="true" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1">
            <input type="radio" name="selectedTime" value="None" v-model="selectedTime">
          </div>
          <div class="col-sm-8">
            None of those times work for me<br><br>
          </div>
        </div>
      </div>
    </form>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import Detail from '../../masterDetail/Detail';
import EventsList from '../../calendar/EventsList';

export default {
  components: {
    Detail,
    EventsList
  },
  data() {
    return {
      selectedTime: null
    };
  },
  props: ['detailHeader'],
  computed: {
    ...mapGetters({
      buyer: 'buyer'
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
