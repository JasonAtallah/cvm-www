<template>
  <div>
    <VendorListButtons />
    <VendorListFilter />
    <VendorList @vendorClick="onVendorClick" />
  </div>
</template>

<script>
import VendorList from '../vendorList/VendorList';
import VendorListButtons from '../vendorList/VendorListButtons';
import VendorListFilter from '../vendorList/VendorListFilter';

export default {
  components: {
    VendorList,
    VendorListButtons,
    VendorListFilter
  },
  methods: {
    onVendorClick(vendor) {
      this.$store.dispatch('selVendor', vendor);
    }
  }
};
</script>
