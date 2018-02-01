<style lang="scss" scoped>
.vendors-page {
  height: 100%;
}

.vendors-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid $section-border-color;
}
</style>

<template>
  <BasePage pageName="Vendors" v-if="buyer">
    <div slot="content" class="vendors-page">
      <MasterDetail>
        <div slot="master" class="vendors-master">
          <Master />
        </div>
        <div slot="detail" class="vendors-detail">
          <VendorDetail v-if="showVendorDetail" :vendor="vendor" />
          <ElCard v-else>
            <AddVendor v-if="addVendor" :params="overridingDetail" />
            <ApptScheduled v-if="showScheduledMeeting" :params="overridingDetail" />
            <ReviewTimesSent v-if="showTimesSent" :params="overridingDetail" />
            <SendTimes v-if="showSendTimes" :params="overridingDetail" />
            <SendVendorStatusEmail v-if="showSendStatusEmail" :params="overridingDetail" />
          </ElCard>
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Card as ElCard } from 'element-ui';
import MasterDetail from '@/components/MasterDetail';
import AddVendor from './detail/AddVendor';
import ApptScheduled from './detail/ApptScheduled';
import BasePage from '../BasePage';
import ReviewTimesSent from './detail/ReviewTimesSent';
import SendTimes from './detail/SendTimes';
import SendVendorStatusEmail from './detail/SendVendorStatusEmail';
import Master from './master/Master';
import VendorDetail from './detail/VendorDetail';

export default {
  components: {
    AddVendor,
    ApptScheduled,
    BasePage,
    ElCard,
    MasterDetail,
    ReviewTimesSent,
    SendTimes,
    SendVendorStatusEmail,
    VendorDetail,
    Master
  },
  data() {
    return {
      name: 'Vendors'
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      overridingDetail: 'overridingDetail',
      vendor: 'selVendor'
    }),
    addVendor() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'addVendor');
    },
    showVendorDetail() {
      return !!(!this.overridingDetail && this.vendor);
    },
    showScheduledMeeting() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'cancelMeeting');
    },
    showSendTimes() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'sendTimes');
    },
    showSendStatusEmail() {
      return !!(this.overridingDetail && (this.overridingDetail.type === 'approveVendor' || this.overridingDetail.type === 'rejectVendor'));
    },
    showTimesSent() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'timesSent');
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
