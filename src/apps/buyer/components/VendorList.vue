<style lang="scss" scoped>

 img {
    display: block;
    margin: auto;
    width: 20%;
    float: left;
  }

.vendor-list-item .vendor-item {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-style: solid; 
  border-width: thin;
  border-color: #DCDCDC;
  background-color: white;
  max-width: 1400px;
}

.vendor-list-item .company-name {
  font-weight: bold;
  color: #a125c6;
  font-size: 1.5rem;
}

.vendor-list-item .company-location {
  font-size: 1.3rem;
}

.vendor-list-item .city, .vendor-list-item .state {
  font-size: .9rem;
}

.vendor-list-item .product-chips {
  list-style: none;
  display: inline-block;
}

.vendor-list-item .product-chips {
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
  <div class="vendor-list-item container">
    <div class="card-body">      
      <div v-for="vendor in vendors" :key="vendor._id">
        <div class="row vendor-item">
          <a class="col-md-3" href="#" @click.prevent="onVendorClick(vendor)">
            <img id="profile-logo" src="https://cdn.allbud.com/image/upload/s--Gsagk9Ld--/c_limit,h_600,w_800/v1433196075/images/dispensary/main-street-marijuana/970/main-st-marijuana-allbud.jpg"
          alt="Vendor Logo">
            <span class="company-name">{{ vendor.company.name }}</span>
          </a>
          <span class="col-md-3 company-location">{{ vendor.company.city}}<span v-if="vendor.company.state">, </span> {{ vendor.company.state }}</span>
          <span class="col-md-3">
            <label v-if="productTypeExists(vendor.flowers.products)" class="product-chips">Flower</label>
            <label v-if="productTypeExists(vendor.concentrates.products)" class="product-chips">Concentrates</label>
            <label v-if="productTypeExists(vendor.edibles.products)" class="product-chips">Edibles</label>
          </span>
          <dropdown-button class="actionMenu col-md-3" label="Action" :options="actions" @selection="onActionSelect(vendor, $event)" />
        </div>
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
  computed: {
    ...mapGetters({
      vendors: 'sortedVendors',
      vendorStatusEmail: 'vendorStatusEmail',
      actions: 'vendorActions'
    })
  },
  methods: {
    onActionSelect(vendor, action) {
      this.$store.commit('takeAction', {
        type: action.value,
        vendor
      });
    },
    onVendorClick(vendor) {
      this.$store.commit('selVendor', vendor);
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
