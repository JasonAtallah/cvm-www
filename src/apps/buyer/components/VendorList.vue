<style lang="scss" scoped>
.vendor-list {
  position: absolute;
  top: #{$vendor-list-filter-height * 2};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  overflow: scroll;
}

.vendor-list li {
  padding: 15px 15px;
  cursor: pointer;
  border-bottom: 1px solid $section-border-color;
}

.vendor-list .company-name {
  font-size: .9rem;
  font-weight: bold;
}

.vendor-list .contact-name {
  font-size: 0.9rem;
}
</style>

<template>
  <ul class="vendor-list list-unstyled">
    <li v-for="vendor in vendors" :key="vendor._id" @click.prevent="onVendorClick(vendor)">
      <div class="row">
        <div class="col-sm-8">
          <span class="company-name">{{ vendor.name }}</span>
          <span class="badge badge-success">{{ stateNameForDisplay(vendor.state.name) }}</span>
          <ApptScheduled />
          <VendorNeedsToReviewTimes />
          <button v-show="isVisible(vendor)" @click="showInfo(vendor)" type="button" class="btn btn-default">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>                   
        </div>        
        <div class="col-sm-4">
          <VendorActionButton :vendor="vendor" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import { stateNameForDisplay } from '../../../lib/filters';
import ApptScheduled from './modals/ApptScheduled';
import VendorActionButton from './VendorActionButton';
import VendorNeedsToReviewTimes from './modals/VendorNeedsToReviewTimes';

export default {
  components: {
    ApptScheduled,
    VendorActionButton,
    VendorNeedsToReviewTimes
  },
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors',
      vendorList: 'vendorList'
    })
  },
  methods: {
    onVendorClick(vendor) {
      this.$store.dispatch('selVendor', vendor);
    },
    showInfo(vendor) {
      console.log(vendor);
      if (vendor.state.name === 'ApptScheduled') {
        this.$store.commit('takeAction', {
          type: 'viewApptInfo'
        });
      } else if (vendor.state.name === 'VendorNeedsToReviewTimes') {
        console.log(vendor.state.name);
        this.$store.commit('takeAction', {
          type: 'viewTimesSentInfo'
        });
      }
    },
    stateNameForDisplay,
    isVisible(vendor) {
      console.log(vendor);
      if (vendor.state.name === 'VendorNeedsToReviewTimes' || vendor.state.name === 'ApptScheduled') {
        return true;
      }
      return false;
    }
  },
};
</script>
