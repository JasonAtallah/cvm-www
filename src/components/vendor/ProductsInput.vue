<style scoped>
ul#products {
  list-style: none;
  padding: 0;
}
</style>

<template>
<Detail :title="def.name" :showSave="false" :showCancel="false">
  <div class="row">
    <div class="col-sm-3 products-master">
      <h4>Products</h4>
    </div>
  </div>

  <div class="row">
    <div class="container col-sm-3 products-master">
      <ul id="products">
        <li v-for="product in products" :key="product.id">
          <a href="#" @click.prevent="selectProduct(product)">{{ product.name }}</a>
        </li>
      </ul>
      <button class="btn btn-success" @click="addProduct">Add Product</button>
    </div>

    <div class="container col-sm-9 products-detail">
      <ProductForm v-if="product" :def="productDef" :product="product"/>
    </div>
  </div>
</Detail>
</template>

<script>
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail
  },
  data() {
    return {
      product: null
    };
  },
  props: ['def', 'products'],
  computed: {
    productDef() {
      return this.def.items;
    }
  },
  methods: {
    selectProduct(product) {
      this.product = product;
    },
    addProduct() {
      this.$store.commit('newProduct', {
        products: this.products,
        productDef: this.productDef
      });
      this.product = this.products[this.products.length - 1];
    }
  }
};
</script>
