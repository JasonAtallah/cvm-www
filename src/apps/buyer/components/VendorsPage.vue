
<style scoped>
</style>

<template>
<BasePage pageName="Vendors">
  <div slot="header-buttons">
    <button class="btn btn-primary" @click="addVendor">Add Vendor</button>
  </div>
  <div slot="content">
    <vendor-list-filter></vendor-list-filter>
    <vendor-list></vendor-list>
    <vendor-list-detail v-if="selVendor"></vendor-list-detail>

    <AddVendorModal />
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';

import BasePage from './BasePage';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';
import AddVendorModal from './AddVendorModal';


export default {
  components: {
    AddVendorModal,
    BasePage,
    VendorList,
    VendorListFilter,
    VendorListDetail
  },
  data() {
    return {
      name: 'Vendors'
    };
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
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
