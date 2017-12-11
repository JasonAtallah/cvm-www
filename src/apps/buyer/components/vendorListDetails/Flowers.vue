<style scoped>

.table-header {
  color: #a8a8a8;
  background-color: #f9fafc;
}

.product-name {
  font-weight: bold;
  color: #777777
}

.product-info {
  color: #a8a8a8;
}

</style>

<template>
  <div id="flowersContent">
    <table class="table table-hover">
      <thead class="table-header">
        <th>Strain Name</th>
        <th>Weight Available</th>
        <th>THC (mg)</th>
        <th>CBD (mg)</th>
        <th>Grow Style</th>
        <th>Bud Size</th>
        <th>Shelf Ready</th>        
      </thead>
      <tbody v-for="item in vendor.flowers.products" :key="item.name">
        <tr @click.prevent="showProductDetail(item.name)">
          <td class="product-name">{{ item.name }}</td>
          <td class="product-info">{{ item.weightAvailable }}</td>
          <td class="product-info">{{ item.thc }}</td>
          <td class="product-info">{{ item.cbd }}</td>
          <td class="product-info">{{ item.growStyle }}</td>
          <td class="product-info">{{ item.budSize }}</td>
          <td class="product-info">{{ item.shelfReady }}</td>
        </tr>
        <ProductFiles :item="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductFiles from './ProductFiles';

export default {
  components: {
    ProductFiles
  },
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      activeRow: 'productDetailsRow'
    })
  },
  methods: {
    showProductDetail(productName) {
      if (productName === this.activeRow) {
        this.$store.commit('productDetailsRow', null);
      } else {
        this.$store.commit('productDetailsRow', productName);
      }
    }
  }
};
</script>