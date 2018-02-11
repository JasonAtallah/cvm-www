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
          <NewUser v-if="showNewUser" />
          <VendorDetail v-if="showVendorDetail" :vendor="vendor" />
          <AddVendor v-if="showAddVendor" :params="overridingDetail" />
          <ApptScheduled v-if="showScheduledMeeting" :params="overridingDetail" />
          <ReviewTimesSent v-if="showTimesSent" :params="overridingDetail" />
          <SendTimes v-if="showSendTimes" :params="overridingDetail" />
          <SendVendorStatusEmail v-if="showSendStatusEmail" :params="overridingDetail" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import { Card as ElCard } from 'element-ui';
import MasterDetail from '@/components/masterDetail/MasterDetail';
import AddVendor from './detail/AddVendor';
import ApptScheduled from './detail/ApptScheduled';
import BasePage from '../BasePage';
import Master from './master/Master';
import NewUser from './detail/NewUser';
import ReviewTimesSent from './detail/ReviewTimesSent';
import SendTimes from './detail/SendTimes';
import SendVendorStatusEmail from './detail/SendVendorStatusEmail';
import VendorDetail from './detail/VendorDetail';

export default {
  components: {
    AddVendor,
    ApptScheduled,
    BasePage,
    ElCard,
    MasterDetail,
    NewUser,
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
      vendor: 'selVendor',
      vendors: 'vendorList'
    }),
    showAddVendor() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'addVendor');
    },
    showNewUser() {
      return !!(!this.overridingDetail && (this.vendors.length === 0 || !this.vendor));
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
    },
    showVendorDetail() {
      return !!(!this.overridingDetail && this.vendor);
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
