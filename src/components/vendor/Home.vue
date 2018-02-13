<style>

</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <Detail :title="title" description="You can come back to this page anytime to check the status of your submission."
           :showSave="false" :showCancel="false">
            <NoVendorAction />
            <VendorNeedsToReviewTimes v-if="buyer.state.name === 'VendorNeedsToReviewTimes'" />
            <ApptScheduled v-if="buyer.state.name === 'ApptScheduled'" />
          </Detail>
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
import Detail from '../masterDetail/Detail';
import NoVendorAction from './homePage/NoVendorAction';
import VendorNeedsToReviewTimes from './homePage/VendorNeedsToReviewTimes';

export default {
  components: {
    BasePage,
    ApptScheduled,
    Detail,
    NoVendorAction,
    VendorNeedsToReviewTimes
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    }),
    title() {
      return `Welcome back, ${this.vendor.company.name}`;
    }
  }
};
</script>
