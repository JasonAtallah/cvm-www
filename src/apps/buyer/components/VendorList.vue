<style lang="scss" scoped>
.card {
  border: none;
  border-bottom: 1px solid #CCC;
}
</style>

<template>
  <div class="vendor-list-item">
    <div class="card" v-for="vendor in vendors" :key="vendor._id">
      <div class="card-body">
        <a class="card-title" href="#" @click.prevent="onVendorClick(vendor)">{{ vendor.company.name }}</a>
        <h6>{{ vendor.company.city}}, {{ vendor.company.state }}</h6>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import DropdownButton from '@/components/form/DropdownButton';

export default {
  components: {
    DropdownButton
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
