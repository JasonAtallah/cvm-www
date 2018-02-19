<template>
  <Detail :title="detailHeader.title" :description="detailHeader.description"
    :showSave="true" :showCancel="false"
    saveLabel="Cancel Appt" @save="cancelAppt">
    <h3>You have the following meeting scheduled with {{ buyer.name }}</h3>
    <EventsList :eventsList="[buyer.state.selectedTime]" :unstyled="true" :breakupDateTime="true" :showAddress="true" />
    <div v-if="cancelling">
      <span>Are you sure you want to cancel your appointment?</span>
      <button type="button" class="btn btn-danger " @click.prevent="confirmCancel(true)">Yes</button>
      <button type="button" class="btn btn-secondary " @click.prevent="confirmCancel(false)">No</button>
    </div>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '../../masterDetail/Detail';
import EventsList from '../../calendar/EventsList';

export default {
  components: {
    Detail,
    EventsList
  },
  data() {
    return {
      cancelling: false
    };
  },
  props: ['detailHeader'],
  computed: {
    ...mapGetters({
      buyer: 'buyer'
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
