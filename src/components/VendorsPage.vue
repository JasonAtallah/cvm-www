
<style scoped>

</style>

<template>
<page pageName="Vendors">
  <div slot="content">
    <vendor-list-filter></vendor-list-filter>
    <vendor-list></vendor-list>
    <vendor-list-detail v-if="selVendor"></vendor-list-detail>
  </div>
</page>
</template>

<script>
import { mapGetters } from 'vuex';

import Page from '@/components/Page';
import VendorList from '@/components/VendorList';
import VendorListFilter from '@/components/VendorListFilter';
import VendorListDetail from '@/components/VendorListDetail';

export default {
  components: {
    Page,
    VendorList,
    VendorListFilter,
    VendorListDetail
  },
  computed: {
    ...mapGetters({
      selVendor: 'buyer/selVendor'
    })
  },
  beforeMount() {
    this.$store.dispatch('init')
      .then(() => {
        this.$store.dispatch('buyer/loadVendors');
      });
  }
};
</script>
