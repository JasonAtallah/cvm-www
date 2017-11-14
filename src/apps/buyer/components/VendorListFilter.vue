
<style scoped>
.vendor-list-filter {
  list-style: none;
  text-align: left;
  margin: 0;
  border-top: 1px solid #CCC;
  border-bottom: 1px solid #CCC;
  padding: 1rem 0;
}

.vendor-list-filter li {
  list-style: none;
  display: inline-block;
  min-width: 10rem;
  margin-right: 20px;
  text-align: left;
}

.vendor-list-filter li .title {
  display: block;
  font-size: .9rem;
}
</style>

<template>
<ul class="vendor-list-filter">
  <li>
    <div class="title">Sort By</div>
    <single-select :options="filter.sortOptions" :value="filter.sort" v-on:selection="updateSort"></single-select>
  </li>
  <li>
    <div class="title">Filter by Status</div>
    <single-select :options="statuses" :value="filter.status" v-on:selection="updateStatus"></single-select>
  </li>
  <li>
    <div class="title">Filter by Product</div>
    <single-select :options="productTypes" :value="filter.productType" v-on:selection="updateProductType"></single-select>
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';

import SingleSelect from './form/SingleSelect';

export default {
  name: 'vendor-list-filter',
  computed: {
    ...mapGetters({
      filter: 'vendorFilter',
      productTypes: 'productTypes',
      statuses: 'statuses'
    })
  },
  methods: {
    updateSort(value) {
      this.$store.commit('setVendorSort', value);
    },
    updateProductType(value) {
      this.$store.commit('setProductFilter', value);
    },
    updateStatus(value) {
      this.$store.commit('setStatusFilter', value);
    }
  },
  components: {
    SingleSelect
  }
};
</script>
