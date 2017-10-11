<template>
  <ul class="vendor-list">
    <li v-for="vendor in vendors" :key="vendor.id">
      <span class="name">{{ vendor.name }}</span>
      <span class="city">{{ vendor.city }}</span>
      <span class="state">{{ vendor.state }}</span>
      <ul class="product-chips">
        <li v-for="type in productTypes(vendor)">
          {{ type }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'vendor-list',
  computed: {
    ...mapGetters({
      filter: 'vendorFilter',
      vendors: 'sortedVendors'
    })
  },
  methods: {
    productTypes(vendor) {
      return [...vendor.products.reduce((types, product) => {
        types.add(product.type);
        return types;
      }, new Set())];
    }
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

ul.vendor-list li .name {
  font-weight: bold;
}

ul.vendor-list li .city, ul.vendor-list li .state {
  font-size: .9rem;
}

ul.product-chips {
  list-style: none;
  display: inline-block;
}

ul.product-chips li {
  background-color: #ccf;
  display: inline;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
