
<style scoped>
.vendor-list-filter {
  list-style: none;
  height: 3rem;
}

.vendor-list-filter li {
  list-style: none;
  display: inline-block;
  min-width: 10rem;
  margin-right: 20px;
  text-align: left;
}

.vendor-list-ilter li .title {
  display: inline-block;
}
</style>

<template>
<ul class="vendor-list-filter">
  <li>
    <div class="title">Sort By</div>
    <single-select :options="filter.sortOptions" :value="filter.sort" v-on:selection="updateSort"></single-select>
  </li>
  <li>
    <div class="title">Product</div>
    <single-select :options="productTypes" :value="filter.productType" v-on:selection="updateProductType"></single-select>
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';

import SingleSelect from '@/components/form/SingleSelect';

export default {
  name: 'vendor-list-filter',
  computed: {
    ...mapGetters('buyer', {
      filter: 'vendorFilter',
      productTypes: 'productTypes'
    })
  },
  methods: {
    updateSort(value) {
      this.$store.commit('buyer/setVendorSort', value);
    },
    updateProductType(value) {
      this.$store.commit('buyer/setProductFilter', value);
    }
  },
  components: {
    SingleSelect
  }
};
</script>
