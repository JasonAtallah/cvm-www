<style scoped>
ul.vendor-list {
  padding: 0;
  margin-top: 2rem;
  text-align: left;
}

ul.vendor-list li {
  display: block;
  list-style: none;
  height: 3rem;
}
</style>

<template>
  <ul class="vendor-list">
    <li v-for="vendor in vendors" :key="vendor.id">
      <vendor-list-item :vendor="vendor"></vendor-list-item>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorListItem from './VendorListItem';

export default {
  name: 'vendor-list',
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors'
    })
  },
  components: {
    VendorListItem
  }
};
</script>
