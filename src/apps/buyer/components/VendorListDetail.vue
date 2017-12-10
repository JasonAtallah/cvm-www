<style scoped>

.vendor-list-detail {
  padding-left: 1.5rem;
}

</style>


<template>
  <div class="vendor-list-detail ">
    <div class="row content-options">
      <VendorDetailsContentOptions />
    </div>
    <div class="row profile-content">
      <VendorCompanyDetails v-if="vendorDetailsTab === 'company'" />
      <VendorContactDetails v-if="vendorDetailsTab === 'contact'" />
      <VendorFlowersDetails v-if="vendorDetailsTab === 'flowers'" />
      <VendorEdiblesDetails v-if="vendorDetailsTab === 'edibles'" />
      <VendorConcentratesDetails v-if="vendorDetailsTab === 'concentrates'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorDetailsContentOptions from './VendorDetailsContentOptions';
import VendorCompanyDetails from './VendorCompanyDetails';
import VendorContactDetails from './VendorContactDetails';
import VendorFlowersDetails from './VendorFlowersDetails';
import VendorEdiblesDetails from './VendorEdiblesDetails';
import VendorConcentratesDetails from './VendorConcentratesDetails';

export default {
  components: {
    VendorDetailsContentOptions,
    VendorCompanyDetails,
    VendorContactDetails,
    VendorFlowersDetails,
    VendorEdiblesDetails,
    VendorConcentratesDetails
  },
  name: 'vendor-list-detail',
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      vendorDetailsTab: 'vendorDetailsTab'
    }),
    isVisible() {
      return this.vendor !== null;
    }
  },
  methods: {
    closeDetail() {
      this.$store.commit('selVendor', null);
    }
  }
};
</script>
