<template>
  <ElTooltip content="Watching Vendor" placement="top">
    <i v-if="watchingVendor(vendor)" class="el-icon-view"></i>
    {{ selVendorState }}
  </ElTooltip>
</template>

<script>
import { mapGetters } from 'vuex';
import { Tooltip as ElTooltip } from 'element-ui';

export default {
  components: {
    ElTooltip
  },
  props: ['vendor'],
  computed: {
    ...mapGetters({
      selVendorState: 'selVendorState'
    })
  },
  methods: {
    watchingVendor(vendor) {
      if (this.vendor) {
        if (this.vendor.attributes) {
          return this.vendor.attributes.watchVendor;
        }
        return false;
      } else if (this.selVendorState.attributes) {
        return this.selVendorState.attributes.watchVendor;
      }
      return false;
    }
  }
};
</script>

<style>

</style>
