<style>

</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <VendorNeedsToReviewTimes v-if="buyer.state.name === 'VendorNeedsToReviewTimes'" :detailHeader="detailHeader" />
          <ApptScheduled v-else-if="buyer.state.name === 'ApptScheduled'" :detailHeader="detailHeader" />
          <NoVendorAction v-else :detailHeader="detailHeader" />
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';
import ApptScheduled from './homePage/ApptScheduled';
import NoVendorAction from './homePage/NoVendorAction';
import VendorNeedsToReviewTimes from './homePage/VendorNeedsToReviewTimes';

export default {
  components: {
    BasePage,
    ApptScheduled,
    NoVendorAction,
    VendorNeedsToReviewTimes
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    }),
    detailHeader() {
      return {
        title: `Welcome back, ${this.vendor.company.name}`,
        description: 'You can come back to this page anytime to check the status of your submission.'
      };
    }
  }
};
</script>
