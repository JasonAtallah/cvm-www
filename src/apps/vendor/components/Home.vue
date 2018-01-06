<style>

</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <h1>Welcome back, {{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</h1>
          <VendorNeedsToReviewTimes v-if="buyer.state.name === 'VendorNeedsToReviewTimes'" />
          {{ buyer.state.name }}          
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';
import VendorNeedsToReviewTimes from './VendorHomePage/VendorNeedsToReviewTimes';

export default {
  components: {
    BasePage,
    VendorNeedsToReviewTimes
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    })
  }
};
</script>
