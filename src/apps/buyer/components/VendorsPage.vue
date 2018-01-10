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
          <VendorListMaster />
        </div>
        <div slot="detail" class="vendors-detail">
          <VendorDetail v-if="showVendorDetail" :vendor="vendor" />
          <ScheduledMeeting v-if="showScheduledMeeting" :params="overridingDetail" />
          <SendTimes v-if="showSendTimes" :params="overridingDetail" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/ui/MasterDetail';
import BasePage from './BasePage';
import ScheduledMeeting from './detail/ScheduledMeeting';
import SendTimes from './detail/SendTimes';
import VendorListMaster from './master/VendorListMaster';
import VendorDetail from './detail/VendorDetail';

export default {
  components: {
    BasePage,
    MasterDetail,
    ScheduledMeeting,
    SendTimes,
    VendorDetail,
    VendorListMaster
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
    showVendorDetail() {
      return !!(!this.overridingDetail && this.vendor);
    },
    showScheduledMeeting() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'cancelMeeting');
    },
    showSendTimes() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'sendTimes');
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
