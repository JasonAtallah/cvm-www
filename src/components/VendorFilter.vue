<template>
<ul class="vendor-filter">
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
  name: 'vendor-filter',
  computed: {
    ...mapGetters('buyer', {
      filter: 'vendorFilter',
      productTypes: 'productTypes'
    })
  },
  methods: {
    updateSort(value) {
      this.$store.commit('setVendorSort', value);
    },
    updateProductType(value) {
      this.$store.commit('setProductFilter', value);
    }
  },
  components: {
    SingleSelect
  }
};
</script>

<style scoped>
.vendor-filter {
  list-style: none;
  height: 3rem;
}

.vendor-filter li {
  list-style: none;
  display: inline-block;
  min-width: 10rem;
  margin-right: 20px;
  text-align: left;
}

.vendor-filter li .title {
  display: inline-block;
}
</style>
