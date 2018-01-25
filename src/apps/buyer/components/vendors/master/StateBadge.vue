<template>
  <span :class="getBadgeClass">{{ getBadge }}</span>
</template>

<script>
import { mapGetters } from 'vuex';
import { stateNameForDisplay } from '@/lib/filters';

export default {
  props: ['vendor'],
  computed: {
    ...mapGetters({
      buttons: 'vendorActionButtons',
      selVendorState: 'selVendorState',
      curVendor: null
    }),
    getBadge() {
      return this.stateNameForDisplay(this.getVendor().state.name);
    },
    getBadgeClass() {
      return `badge badge-${_.find(this.buttons, { status: this.getVendor().state.name }).badge}`;
    },
  },
  methods: {
    getVendor() {
      if (this.vendor) {
        return this.vendor;
      }
      return this.selVendorState;
    },
    stateNameForDisplay
  }
};
</script>
