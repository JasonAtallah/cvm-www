<style scoped>
.vendor-list-detail {
  padding: 1rem;
}

.profile {
  margin: 10px 0;
}

.profile-content {
  padding: 10px;
  background: #fff;
  min-height: 460px;
}
</style>


<template>
  <div class="vendor-list-detail">

    <div class="container">

        <div class="row">
          <VendorDetailsContentOptions />
        </div>
        
          <div class="profile-content">
              <VendorCompanyDetails v-if="vendorDetailsTab === 'company'" />
              <VendorFlowersDetails v-if="vendorDetailsTab === 'flowers'" />
              <VendorEdiblesDetails v-if="vendorDetailsTab === 'edibles'" />
              <VendorConcentratesDetails v-if="vendorDetailsTab === 'concentrates'" />
          </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorDetailsContentOptions from './VendorDetailsContentOptions';
import VendorCompanyDetails from './VendorCompanyDetails';
import VendorFlowersDetails from './VendorFlowersDetails';
import VendorEdiblesDetails from './VendorEdiblesDetails';
import VendorConcentratesDetails from './VendorConcentratesDetails';

export default {
  components: {
    VendorDetailsContentOptions,
    VendorCompanyDetails,
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
