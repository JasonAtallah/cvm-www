<style scoped>
.card {
  border: none;
  border-bottom: 1px solid #CCC;
}

#profile-logo {
  display: block;
  margin: auto;
  max-width: 70px;
  float: left;
}

.company-name {
  font-size: 1.5em;
}

.title {
    display: inline-block;
    font-size: 1.7em;
    font-weight: bold;
    padding: 5px 15px;
}
ul.c-controls {
    list-style: none;
    margin: 0px;
    min-height: 44px;
}

ul.c-controls li {
    margin-top: 8px;
    float: left;
}

ul.c-controls li a {
    font-size: 1.7em;
    padding: 11px 10px 6px;   
}
ul.c-controls li a i {
    min-width: 24px;
    text-align: center;
}

</style>

<template>
  <div class="vendor-list-item">
    <ul class="list-unstyled">
      <li>
        <div class="card card-body" v-for="vendor in vendors" :key="vendor._id">
          <a @click.prevent="onVendorClick(vendor)">
            <img id="profile-logo" src="https://cdn.allbud.com/image/upload/s--Gsagk9Ld--/c_limit,h_600,w_800/v1433196075/images/dispensary/main-street-marijuana/970/main-st-marijuana-allbud.jpg" alt="Vendor Logo">
            <span class="company-name">{{ vendor.company.name }}</span>
          </a>
          <div class="row">
            <div class="col-sm-6 col-lg-9">
              <VendorListContactInfo :vendor="vendor" />
            </div>
            <div class="col-sm-6 col-lg-3">
              <DropdownButton class="actionMenu" label="Action" :vendor="vendor" 
              :options="actions" @selection="onActionSelect(vendor, $event)"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DropdownButton from '@/components/form/DropdownButton';
import VendorListContactInfo from './VendorListContactInfo';

export default {
  components: {
    DropdownButton,
    VendorListContactInfo
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
    }
  }
};
</script>
