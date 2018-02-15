
<template>
  <Detail :title="genTitle" @save="confirmCancel" @cancel="cancel" saveLabel="Cancel Meeting">
    <h5>
      <EventsList :eventsList="[vendor.state.selectedTime]" :unstyled="true" :breakupDateTime="true" :showAddress="true" />
    </h5>
  </Detail>
</template>

<script>
import moment from 'moment';
import Detail from '@/components/masterDetail/Detail';
import EventsList from '../../../calendar/EventsList';

export default {
  components: {
    Detail,
    EventsList
  },
  props: ['params'],
  computed: {
    genTitle() {
      return `Scheduled appointment with ${this.vendor.name}`;
    },
    vendor() {
      return this.params.vendor;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    confirmCancel() {
      this.$store.commit('takeAction', {
        type: 'cancelMeeting'
      });
    }
  }
};
</script>
