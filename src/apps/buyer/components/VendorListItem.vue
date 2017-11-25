<style lang="scss" scoped>
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
  background-color: $chip-color;
  display: inline;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 10px;
}

.vendor-list-item .actionMenu {
  display: inline-block;
}
</style>

<template>
  <div class="vendor-list-item">
    <a class="name" href="#" @click.prevent="onVendorClick(vendor)">{{ vendor.company.name }}</a>
    <span class="city">{{ vendor.company.city }}</span>
    <ul class="product-chips">
      <li v-for="productType in productTypes">
        {{ productType }}
      </li>
    </ul>
    <dropdown-button class="actionMenu" label="Action" :options="actions" @selection="onActionSelect" />
  </div>
</template>


<script>
import DropdownButton from '@/components/form/DropdownButton';

export default {
  components: {
    DropdownButton
  },
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
  methods: {
    onActionSelect(action) {
      this.$store.dispatch('takeVendorAction', {
        vendor: this.vendor,
        action
      });
    },
    onVendorClick(vendor) {
      this.$store.commit('setSelVendor', vendor);
    }
  }
};
</script>
