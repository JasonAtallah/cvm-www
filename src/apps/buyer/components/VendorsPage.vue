
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

import Page from './page/Page';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';

export default {
  components: {
    Page,
    VendorList,
    VendorListFilter,
    VendorListDetail
  },
  computed: {
    ...mapGetters({
      selVendor: 'selVendor'
    })
  }
};
</script>
