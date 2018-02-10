<style lang="scss" scoped>
.vendor-list {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: $vendor-list-background-color;
  background-image: $vendor-list-background-image;
}

.vendor-list li {
  position: relative;
  cursor: pointer;
  border: 1px solid #a0ac92;
  background-color: #FFF;
  margin: 10px 10px;
  padding: 10px;
}

.vendor-list li.selected {
  margin: 10px 0 10px 20px;
  padding: 10px 0 10px 10px;
  border-right: none;
  background-color: $vendor-list-item-selected-background-color;
}

.vendor-list li:hover {
  background-color: $vendor-list-item-hover-background-color;
}

.vendor-name {
  vertical-align: middle;
  font-size: 1.5rem;
}
</style>

<template>
  <ul class="vendor-list list-unstyled">
    <li v-for="vendor in vendors" :key="vendor._id"
      :class="{selected: isSelected(vendor)}"
      @click="onVendorClick($event, vendor)">
      <div class="row vendor-list-item">
        <div class="col-sm-8 item-main">
          <div class="vendor-name">{{ vendor.name }}</div>
          <StateBadge :vendor="vendor" />
          <!-- <WatchVendorBadge :vendor="vendor" /> -->
        </div>
        <div class="col-sm-4 item-btns">
          <div @click="ignoreVendorClick($event)">
            <VendorActionButton :vendor="vendor"/>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Tooltip as ElTooltip } from 'element-ui';
import StateBadge from './StateBadge';
import VendorActionButton from './VendorActionButton';
import WatchVendorBadge from './WatchVendorBadge';

export default {
  components: {
    ElTooltip,
    StateBadge,
    VendorActionButton,
    WatchVendorBadge
  },
  computed: {
    ...mapGetters({
      selVendor: 'selVendor',
      vendors: 'sortedVendors'
    })
  },
  methods: {
    onVendorClick(event, vendor) {
      if (event !== this.ignoredVendorClick) {
        this.$store.commit('selVendorState', vendor);
        this.$store.dispatch('selVendor', vendor);
      }
    },
    ignoreVendorClick(event) {
      event.stopImmediatePropagation();
    },
    isSelected(vendor) {
      return this.selVendor && this.selVendor._id === vendor._id;
    }
  }
};
</script>
