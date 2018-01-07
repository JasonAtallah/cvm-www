<style lang="scss" scoped>
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
          <VendorList />
        </div>
        <div slot="detail" class="vendors-detail">
          <VendorDetail v-if="showVendorDetail" :vendor="vendor" />
          <SendTimes v-if="isOverridingDetail('sendTimes')" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/page/content/MasterDetail';
import BasePage from './BasePage';
import SendTimes from './detail/SendTimes';
import VendorList from './master/VendorList';
import VendorDetail from './detail/VendorDetail';

export default {
  components: {
    BasePage,
    MasterDetail,
    SendTimes,
    VendorDetail,
    VendorList
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
      return this.vendor && !this.overridingDetail;
    }
  },
  methods: {
    addVendor() {
      this.$store.commit('takeAction', {
        type: 'addVendor'
      });
    },
    isOverridingDetail(name) {
      return this.overridingDetail && this.overridingDetail.type === name;
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
