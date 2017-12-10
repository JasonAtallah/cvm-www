
<style scoped>
</style>

<template>
<BasePage pageName="Vendors" v-if="buyer">
  <div slot="header-buttons">
    <button class="btn btn-primary" @click="addVendor">Add Vendor</button>
  </div>
  <div slot="content">
    <vendor-list-filter></vendor-list-filter>
    <vendor-list></vendor-list>
    <vendor-list-detail v-if="selVendor"></vendor-list-detail>

    <SendVendorStatusEmailModal />
    <AddVendorModal />
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';

import AddVendorModal from './AddVendorModal';
import BasePage from './BasePage';
import SendVendorStatusEmailModal from './SendVendorStatusEmailModal';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';

export default {
  components: {
    AddVendorModal,
    BasePage,
    SendVendorStatusEmailModal,
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
      buyer: 'buyer',
      selVendor: 'selVendor'
    })
  },
  methods: {
    addVendor() {
      this.$store.commit('takeAction', {
        type: 'addVendor'
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
