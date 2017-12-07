<style>

</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <h1>Welcome back, {{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</h1>
          <VendorApproved v-if="vendor.status === 'approved'" />
          <VendorPending v-if="vendor.status === null" /> 
          <VendorRejected v-if="vendor.status === 'rejected'" />        
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';
import VendorApproved from './VendorHomePage/VendorApproved';
import VendorPending from './VendorHomePage/VendorPending';
import VendorRejected from './VendorHomePage/VendorRejected';

export default {
  components: {
    BasePage,
    VendorApproved,
    VendorPending,
    VendorRejected
  },
  computed: {
    ...mapGetters({
      vendor: 'vendor'
    })
  }
};
</script>
