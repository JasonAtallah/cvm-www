<template>
  <div class="vendor-list-item">
    <span class="name">{{ vendor.name }}</span>
    <span class="city">{{ vendor.city }}</span>
    <span class="state">{{ vendor.state }}</span>
    <ul class="product-chips">
      <li v-for="type in productTypes">
        {{ type }}
      </li>
    </ul>
    <dropdown-button label="Action" :options="actions" />
  </div>
</template>

<script>
import DropdownButton from '@/components/form/DropdownButton';

export default {
  name: 'vendor-list-item',
  props: {
    vendor: {
      type: Object,
      required: true
    }
  },
  computed: {
    actions() {
      return this.$store.getters.vendorActions;
    },
    productTypes() {
      if (!Array.isArray(this.vendor.products)) {
        return [];
      }
      return [...this.vendor.products.reduce((types, product) => {
        types.add(product.type);
        return types;
      }, new Set())];
    }
  },
  components: {
    DropdownButton
  }
};
</script>

<style scoped>
.vendor-list-item .name {
  font-weight: bold;
}

.vendor-list-item .city, .vendor-list-item .state {
  font-size: .9rem;
}

.vendor-list-item ul.product-chips {
  list-style: none;
  display: inline-block;
}

.vendor-list-item ul.product-chips li {
  background-color: #ccf;
  display: inline;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
