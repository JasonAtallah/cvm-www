<style scoped>

a {
  text-decoration: none;
  color: #888b91;
}

a:hover {
  color: #5b9bd1;
}

.card {
  padding: 15px 15px;
  cursor: pointer;
  border-radius: 0;
}

.card:nth-of-type(n+2) {
  border-top: none;
}

.company-name {
  font-size: 1rem;
  font-weight: bold;
}

.contact-name {
  font-size: 0.9rem;
}

#profile-logo {
  display: block;
  margin: auto;
  max-width: 70px;
  float: left;
}

</style>

<template>
  <div class="vendor-list-item">      
    <ul class="list-unstyled">
      <li>
        <div class="card" v-for="vendor in vendors" :key="vendor._id" @click.prevent="onVendorClick(vendor)">              
          <div class="row">
            <div class="col-md-8">
              <span class="company-name">{{ vendor.company.name }}</span>
              <span v-if="vendor.status === 'approved'" class="badge badge-success">Approved</span>
              <span v-if="vendor.status === 'rejected'" class="badge badge-danger">Rejected</span>
              <br />
              <span class="contact-name">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</span>                
            </div> 
            <div class="col-md-4">
              <DropdownButton class="actionMenu text-right" label="Action" :vendor="vendor" :options="actions" @selection="onActionSelect(vendor, $event)" />
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
