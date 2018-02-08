<style scoped>
.vendor-list-master {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px 40px calc(100% - 80px);
  grid-template-areas:
    "buttons"
    "filter"
    "list";
}

.vendor-list-buttons {
  grid-area: buttons;
}

.vendor-list-filter {
  grid-area: filter;
}

.vendor-list-items {
  grid-area: list;
}
</style>

<template>
  <div class="vendor-list-master">
    <div class="vendor-list-buttons">
      <Buttons />
    </div>
    <div class="vendor-list-filter">
      <Filters />
    </div>
    <div class="vendor-list-items">
      <VendorList @vendorClick="onVendorClick" />
    </div>
  </div>
</template>

<script>
import VendorList from './VendorList';
import Buttons from './headers/Buttons';
import Filters from './headers/Filters';

export default {
  components: {
    VendorList,
    Buttons,
    Filters
  },
  methods: {
    onVendorClick(vendor) {
      this.$store.dispatch('selVendor', vendor);
    }
  }
};
</script>
