<style lang="scss" scoped>
ul li {
  padding: 15px 15px;
  cursor: pointer;
  border-top: 1px solid $section-border-color;
  border-bottom: 1px solid $section-border-color;
}

ul li:nth-of-type(n+2) {
  border-top: none;
}

.company-name {
  font-size: .9rem;
  font-weight: bold;
}

.contact-name {
  font-size: 0.9rem;
}
</style>

<template>
  <ul class="list-unstyled">
    <li v-for="vendor in vendors" :key="vendor._id" @click.prevent="onVendorClick(vendor)">
      <div class="row">
        <div class="col-md-8">
          <span class="company-name">{{ vendor.company.name }}</span>
          <span v-if="vendor.status === 'approved'" class="badge badge-success">Approved</span>
          <span v-if="vendor.status === 'rejected'" class="badge badge-danger">Rejected</span>
          <br />
          <span class="contact-name">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}<br /></span>
        </div>
        <div class="col-md-4">
          <DropdownButton class="actionMenu text-right" label="Action" :vendor="vendor" :options="actions" @selection="onActionSelect(vendor, $event)" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import DropdownButton from '@/components/form/DropdownButton';
import VendorListContactInfo from './VendorListContactInfo';

export default {
  components: {
    DropdownButton,
    VendorListContactInfo
  },
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors',
      vendorStatusEmail: 'vendorStatusEmail',
      actions: 'vendorActions'
    })
  },
  methods: {
    onActionSelect(vendor, action) {
      this.$store.commit('takeAction', {
        type: action.value,
        vendor
      });
    },
    onVendorClick(vendor) {
      this.$store.commit('selVendor', vendor);
    }
  }
};
</script>
