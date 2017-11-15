
<style scoped>



</style>

<template>
<page pageName="Vendors">
  <div slot="header-buttons">
    <button class="btn btn-primary" @click="addVendor">Add Vendor</button>
  </div>
  <div slot="content">
    <vendor-list-filter></vendor-list-filter>
    <vendor-list></vendor-list>
    <vendor-list-detail v-if="selVendor"></vendor-list-detail>
    
    <AddVendorModal />
  </div>
</page>
</template>

<script>
import { mapGetters } from 'vuex';

import Page from './page/Page';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';
import AddVendorModal from './AddVendorModal';


export default {
  components: {
    AddVendorModal,
    Page,
    VendorList,
    VendorListFilter,
    VendorListDetail
  },
  computed: {
    ...mapGetters({
      selVendor: 'selVendor'
    })
  },
  methods: {
    addVendor() {
      this.$store.commit('startAddVendor');
    }
  }
};
</script>
