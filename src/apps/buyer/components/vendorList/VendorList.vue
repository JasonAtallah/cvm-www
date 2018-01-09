<style lang="scss" scoped>
.vendor-list {
  position: absolute;
  top: #{$vendor-list-filter-height * 2};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
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
  margin: 0;
}

.vendor-list .item-main {
  padding: 15px;
}

.vendor-list .item-btns {
  padding: 25px 15px 15px 15px;
}
</style>

<template>
  <ul class="vendor-list list-unstyled">
    <li v-for="vendor in vendors" :key="vendor._id"
      :class="{selected: isSelected(vendor)}"
      @click="onVendorClick($event, vendor)">
      <div class="row vendor-list-item">
        <div class="col-sm-8 item-main">
          <h5>{{ vendor.name }}</h5>
          <span class="badge badge-success">{{ stateNameForDisplay(vendor.state.name) }}</span>
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
import VendorActionButton from './VendorActionButton';

export default {
  components: {
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
    stateNameForDisplay
  }
};
</script>
