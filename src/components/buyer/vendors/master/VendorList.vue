<style lang="scss" scoped>
.vendor-list {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #e0e5db;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23a0ac92' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
        this.$emit('vendorClick', vendor);
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
