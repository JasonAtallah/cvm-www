<style scoped>
.modal-dialog {
  text-align: left;
  display: block;
  max-width: 1024px;
}
ul#products {
  list-style: none;
  padding: 0;
}
</style>

<template>
<div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h2 class="modal-title">{{ def.name }}</h2>
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col-sm-3">
            <h4>Products</h4>
          </div>
        </div>

        <div class="row">
          <div class="container col-sm-3">
            <ul id="products">
              <li v-for="product in products" :key="product.id">
                <a href="#" @click.prevent="selectProduct(product)">{{ product.name }}</a>
              </li>
            </ul>

            <button class="btn btn-success" @click="addProduct">Add Product</button>
          </div>

          <div class="container col-sm-9">
            <ProductForm v-if="product" :def="productDef" :product="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
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
