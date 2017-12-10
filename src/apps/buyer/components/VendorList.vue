<style scoped>

a {
  text-decoration: none;
  color: #888b91;
}

a:hover {
  color: #5b9bd1;
}

.card {
  border-left: none;
  border-top: none;
  padding-top: 15px;
}

.company-name {
  font-size: 1.5em;
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
        <div class="card" v-for="vendor in vendors" :key="vendor._id">
          <div class="col-md-12">
            <a @click.prevent="onVendorClick(vendor)" href="#">
              <div class="pull-left">
                <img id="profile-logo" src="https://cdn.allbud.com/image/upload/s--Gsagk9Ld--/c_limit,h_600,w_800/v1433196075/images/dispensary/main-street-marijuana/970/main-st-marijuana-allbud.jpg"
                  alt="Vendor Logo">
              </div>
              <div class="row">
                <div class="col-md-12">
                  <span class="company-name">{{ vendor.company.name }}</span>
                  <span v-if="vendor.status === 'approved'" class="badge badge-success">Approved</span>
                  <span v-if="vendor.status === 'rejected'" class="badge badge-danger">Rejected</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <VendorListContactInfo :vendor="vendor" />
                </div>
                <div class="col-md-4">
                  <DropdownButton class="actionMenu text-right" label="Action" :vendor="vendor" :options="actions" @selection="onActionSelect(vendor, $event)"
                  />
                </div>
              </div>
            </a>
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
