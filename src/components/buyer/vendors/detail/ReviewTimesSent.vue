<template>
  <Detail :title="genTitle" :showCancel="false" @save="cancel" saveLabel="Close">
    <div class="row">
      <div class="col-sm-6">
        <h3>Suggested Times</h3>
        <EventsList :eventsList='suggestedTimes' :showAddress="true" :breakupDateTime="true" :unstyled="true" />
      </div>
      <div v-if="rejectedTimes.length > 0" class="col-sm-6">
        <h3>Rejected Times</h3>
        <EventsList :eventsList='rejectedTimes' :showAddress="true" :breakupDateTime="true" :unstyled="true" />
      </div>
    </div>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '@/components/masterDetail/Detail';
import EventsList from '../../../calendar/EventsList';

export default {
  components: {
    Detail,
    EventsList
  },
  props: ['params'],
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    }),
    genTitle() {
      return `Times sent to ${this.vendor.company.name}`;
    },
    rejectedTimes() {
      return this.params.vendor.state.rejectedTimes;
    },
    suggestedTimes() {
      return this.params.vendor.state.suggestedTimes;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    }
  }
};
</script>
