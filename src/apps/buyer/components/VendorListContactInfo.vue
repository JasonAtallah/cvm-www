<template>
  <div>
    <div class="row c-info">
      {{ vendor.contact.firstName }} {{ vendor.contact.lastName }}
    </div>
    <div class="row">
      <span class="fa fa-road text-muted c-info" :title="prepAddress"></span>
      <span class="fa fa-phone text-muted c-info" :title="vendor.contact.phone"></span>
      <span class="fa fa-envelope text-muted c-info" :title="vendor.contact.email"></span>
      <a v-if="vendor.company.website" class="fa fa-desktop text-muted c-info" :title="vendor.company.website" target="_blank" :href="vendor.company.website" role="button"></a>
    </div>
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['vendor'],
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors'
    }),
    prepAddress() {
      const address = `${this.vendor.company.address}, ${this.vendor.company.city}, ${this.vendor.company.state}`;
      return address;
    }
  }
};

</script>

<style>
.c-info {
    padding: 5px 10px;
}
</style>
