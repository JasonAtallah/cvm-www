<template>
  <ul class="vendor-list">
    <li v-for="vendor in vendors" :key="vendor.id">
      <vendor-list-item :vendor="vendor"></vendor-list-item>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorListItem from '@/components/VendorListItem';

export default {
  name: 'vendor-list',
  computed: {
    ...mapGetters('buyer', {
      vendors: 'sortedVendors'
    })
  },
  components: {
    VendorListItem
  }
};
</script>

<style scoped>
ul.vendor-list {

}

ul.vendor-list li {
  display: block;
  list-style: none;
  height: 3rem;
}
</style>
