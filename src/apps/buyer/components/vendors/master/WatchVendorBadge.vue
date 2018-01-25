<template>
  <ElTooltip content="Watching Vendor" placement="top">
    <i v-if="watchingVendor(vendor)" class="el-icon-view"></i>
  </ElTooltip>
</template>

<script>
import { Tooltip as ElTooltip } from 'element-ui';

export default {
  props: ['vendor'],
  components: {
    ElTooltip
  },
  methods: {
    watchingVendor(vendor) {
      if (vendor.attributes) {
        return vendor.attributes.watchVendor;
      }
      return false;
    }
  }
};
</script>

<style>

</style>
