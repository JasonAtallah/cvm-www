<template>
  <span class="badge badge-success">{{ getBadge }}</span>
</template>

<script>
import { mapGetters } from 'vuex';
import { stateNameForDisplay } from '@/lib/filters';

export default {
  props: ['vendor'],
  computed: {
    ...mapGetters({
      selVendorState: 'selVendorState'
    }),
    getBadge() {
      if (this.vendor) {
        return this.stateNameForDisplay(this.vendor.state.name);
      }
      return this.stateNameForDisplay(this.selVendorState.state.name);
    }
  },
  methods: {
    stateNameForDisplay
  }
};
</script>
