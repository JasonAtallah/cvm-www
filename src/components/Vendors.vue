<template>
<div class="page">
  <page pageName="Vendors">
    <div slot="content">
      <vendor-filter></vendor-filter>
      <vendor-list></vendor-list>
    </div>
  </page>
</div>
</template>

<script>
import Page from '@/components/Page';
import VendorList from '@/components/VendorList';
import VendorFilter from '@/components/VendorFilter';

export default {
  components: {
    Page,
    VendorList,
    VendorFilter
  },
  beforeMount() {
    this.$store.dispatch('init')
      .then(() => {
        this.$store.dispatch('buyer/loadVendors');
      });
  }
};
</script>

<style scoped>

</style>
