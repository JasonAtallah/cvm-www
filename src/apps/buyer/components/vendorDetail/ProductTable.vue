<style scoped>
.table-header {
  color: #717171;
  background-color: #EFEFEF;
}

.product-name {
  font-weight: bold;
  color: #777777
}

.product-info {
  color: #a8a8a8;
}

.product-row {
  cursor: pointer;
}

.product-files-row:hover {
  background-color: transparent;
}
</style>

<template>
  <div class="product-table">
    <table class="table table-hover">
      <thead class="table-header">
        <th v-for="col in table.columns" :key="col.header">
          {{ col.header }}
        </th>
      </thead>
      <tbody v-for="product in products" :key="product.name">
        <tr class="product-row" @click="showProductDetail(product)">
          <td v-for="col in table.columns" :key="col.field" :class="col.isName ? 'product-name' : 'product-info'">
            {{ product[col.field] }}
          </td>
        </tr>
        <tr class="product-files-row" v-if="activeRow === product">
          <td :colspan="table.columns.length">
            <ProductFiles :vendor="vendor" :product="product" />
          </td>
        </tr>
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
  props: ['table', 'vendor'],
  data() {
    return {
      activeRow: null
    };
  },
  computed: {
    products() {
      return this.vendor[this.table.vendorField].products;
    }
  },
  methods: {
    showProductDetail(product) {
      if (product === this.activeRow) {
        this.activeRow = null;
      } else {
        this.activeRow = product;
      }
    }
  }
};
</script>
