<style scoped>
.vendor-list-detail {
  padding: 1rem;
}

.profile {
  margin: 20px 0;
}

.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
</style>


<template>
  <div class="vendor-list-detail">

    <div class="container">
      <div class="row profile">

        <VendorDetailsSidebar />

        <div class="col-md-9">
          <div class="profile-content">
            <main class="container">
              <VendorCompanyDetails v-if="vendorDetailsTab === 'company'" />
              <VendorFlowersDetails v-if="vendorDetailsTab === 'flowers'" />
              <VendorEdiblesDetails v-if="vendorDetailsTab === 'edibles'" />
              <VendorConcentratesDetails v-if="vendorDetailsTab === 'concentrates'" />
            </main>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorDetailsSidebar from './VendorDetailsSidebar';
import VendorCompanyDetails from './VendorCompanyDetails';
import VendorFlowersDetails from './VendorFlowersDetails';
import VendorEdiblesDetails from './VendorEdiblesDetails';
import VendorConcentratesDetails from './VendorConcentratesDetails';

export default {
  components: {
    VendorDetailsSidebar,
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
