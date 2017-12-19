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
          <span v-if="vendor.state.name === 'VendorApproved'" class="badge badge-success">Approved</span>
          <span v-if="vendor.state.name === 'VendorRejected'" class="badge badge-danger">Rejected</span>
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
import VendorActionButton from './VendorActionButton';

export default {
  components: {
    VendorActionButton
  },
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors',
      vendorStatusEmail: 'vendorStatusEmail',
    })
  },
  methods: {
    onVendorClick(vendor) {
      this.$store.dispatch('selVendor', vendor);
    }
  }
};
</script>
