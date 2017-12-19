<style>

</style>

<template>
  <div class="action-button">
    <DropdownButton v-if="vendor.state.name === 'NewVendor'" class="actionMenu text-right" label="Action" :vendor="vendor" :options="actionsByStatus()" @selection="onActionSelect(vendor, $event)" />
    <DropdownButton v-else-if="vendor.state.name === 'VendorApproved'" class="actionMenu text-right" label="Schedule" :vendor="vendor" :options="actionsByStatus()" @selection="onActionSelect(vendor, $event)" />
    <DropdownButton v-else-if="vendor.state.name === 'VendorRejected'" class="actionMenu text-right" label="Watch" :vendor="vendor" :options="actionsByStatus()" @selection="watch(vendor, $event)" />
    <DropdownButton v-else-if="vendor.state.name === 'ApptScheduled'" class="actionMenu text-right" label="Reschedule" :vendor="vendor" :options="actionsByStatus()" @selection="onActionSelect(vendor, $event)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DropdownButton from '@/components/form/DropdownButton';

export default {
  components: {
    DropdownButton
  },
  props: ['vendor'],
  computed: {
    ...mapGetters({
      actions: 'vendorActions'
    })
  },
  methods: {
    actionsByStatus() {
      return this.actions.filter(action => action.status === this.vendor.state.name);
    },
    onActionSelect(vendor, action) {
      this.$store.commit('takeAction', {
        type: action.value,
        vendor
      });
    },
    watch(vendor, action) {
      this.$store.dispatch('watchVendor', {
        vendor,
        action
      });
    }
  }
};
</script>
