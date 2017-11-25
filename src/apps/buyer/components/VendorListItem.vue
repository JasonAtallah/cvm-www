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
    <div class="card-body">
      <div class="table-responsive">
        <table class="table center-aligned-table">
          <thead>
            <tr class="text">
              <th>Company</th>
              <th>Location</th>
              <th>Selling</th>
              <th>something</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="vendor in vendors" :key="vendor.id">
              <td>
                <a class="name" href="#" @click.prevent="onVendorClick(vendor)">{{ vendor.company.name }}</a>
              </td>
              <td>{{ vendor.company.city}}, {{ vendor.company.state }}</td>
              <td>
                <label v-if="productTypeExists(vendor.flowers.products)" class="badge badge-success">Flower</label>
                <label v-if="productTypeExists(vendor.concentrates.products)" class="badge badge-danger">Concentrates</label>
                <label v-if="productTypeExists(vendor.edibles.products)" class="badge badge-info">Edibles</label>
              </td>
              <td>something</td>
              <td>
                <dropdown-button class="actionMenu" label="Action" :options="actions" @selection="onActionSelect" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
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
    ...mapGetters({
      vendors: 'sortedVendors'
    }),
    actions() {
      return this.$store.getters.vendorActions;
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
    },
    productTypeExists(productType) {
      if (productType.length > 0) {
        return true;
      }
      return false;
    }
  }
};
</script>
