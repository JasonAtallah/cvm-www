
<style scoped>
.vendor-list-filter {
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 1rem 0;
  max-width: 1200px;
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
  font-size: 1.2rem;
}

.btn.dropdown-toggle.filter-button {
  background-color: transparent;
}

</style>

<template>
<div class="container">
  <ul class="vendor-list-filter">
    <li>
      <div class="title">Sort</div>
      <single-select class="btn dropdown-toggle filter-button" :options="filter.sortOptions" :value="filter.sort" v-on:selection="updateSort"></single-select>
    </li>
    <li>
      <div class="title">Status</div>
      <single-select class="btn dropdown-toggle filter-button" :options="statuses" :value="filter.status" v-on:selection="updateStatus"></single-select>
    </li>
    <li>
      <div class="title">Product</div>
      <single-select class="btn dropdown-toggle filter-button" :options="productTypes" :value="filter.productType" v-on:selection="updateProductType"></single-select>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

import SingleSelect from '@/components/form/SingleSelect';

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
      this.$store.commit('vendorSort', value);
    },
    updateProductType(value) {
      this.$store.commit('productFilter', value);
    },
    updateStatus(value) {
      this.$store.commit('statusFilter', value);
    }
  },
  components: {
    SingleSelect
  }
};
</script>
