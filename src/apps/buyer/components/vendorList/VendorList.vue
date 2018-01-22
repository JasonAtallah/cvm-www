<style lang="scss" scoped>
.vendor-list {
  height: 100%;
  margin: 4px 0px 0px 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #DEDEDE;
}

.vendor-list li {
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid $section-border-color;
  background-color: #EEE;
  border-right: 1px solid #EEE;
}

.vendor-list li:hover {
  background-color: #FFF;
}

.vendor-list li.selected {
  background-color: #FFF;
  border-right: 1px solid #FFF;
}

.vendor-list .vendor-list-item {
  padding: 5px;
}

.vendor-list .item-main {
  padding: 15px 0px 15px 25px
}

.vendor-list .item-btns {
    padding-top: 5px;
}

span.vendor-name {
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
          <span class="vendor-name">{{ vendor.name }}</span>
          <span class="badge badge-success">{{ stateNameForDisplay(vendor.state.name) }}</span>
          <ElTooltip content="Watching Vendor" placement="top">
            <i v-if="watchingVendor(vendor)" class="el-icon-view"></i>
          </ElTooltip>
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
import { stateNameForDisplay } from '@/lib/filters';
import {
  Tooltip as ElTooltip } from 'element-ui';
import VendorActionButton from './VendorActionButton';

export default {
  components: {
    ElTooltip,
    VendorActionButton
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
        this.$emit('vendorClick', vendor);
      }
    },
    ignoreVendorClick(event) {
      event.stopImmediatePropagation();
    },
    isSelected(vendor) {
      return this.selVendor && this.selVendor._id === vendor._id;
    },
    stateNameForDisplay,
    watchingVendor(vendor) {
      if (vendor.attributes) {
        return vendor.attributes.watchVendor;
      }
      return false;
    }
  }
};
</script>
