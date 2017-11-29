<style scoped>
.vendor-list-detail {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  text-align: left;
  padding: 1rem;
  border-top: 1px solid #ccc;
}

.vendor-list-detail .detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
}

/* info panel beginning */

body {
  background: #f1f3fa;
}

/* Profile container */
.profile {
  margin: 20px 0;
}

/* Profile sidebar */


/* Profile Content */
.profile-content {
  padding: 20px;
  background: #fff;
  min-height: 460px;
}
/* info panel ending */
</style>


<template>
  <div class="vendor-list-detail" :style="{height: panelHeight}">

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

    <div class="detail-close">
      <button type="button" class="btn btn-default" @click="closeDetail">X</button>
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
  data() {
    return {
      panelHeight: '30%'
    };
  },
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      vendorDetailsTab: 'vendorDetailsTab'
    })
  },
  methods: {
    closeDetail() {
      this.$store.commit('setSelVendor', null);
    }
  },
  watch: {
    vendor(newVal, oldVal) {
      if (!newVal) {
        this.panelHeight = 0;
      } else {
        this.panelHeight = '30%';
      }
    }
  }
};
</script>
