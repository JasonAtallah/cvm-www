<style lang="scss" scoped>
.card {
  border: none;
  border-bottom: 1px solid #CCC;
}

img {
  display: block;
  margin: auto;
  max-width: 70px;
  float: left;
}

.company-name {
  font-size: 24px;
}
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

body {
    padding: 30px 0px 60px;
}

@media (max-width: 767px) {
    .visible-xs {
        display: inline-block !important;
    }
    .block {
        display: block !important;
        width: 100%;
        height: 1px !important;
    }
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
    <div class="col-md-12">
      <ul class="list-group" id="vendor-list">
        
        <li class="list-group-item">
          <span class="title">Vendors</span>
          <ul class="pull-right c-controls">
            <li>
              <a href="#" data-placement="top" title="Add Vendor" @click="addVendor">
                <i class="fa fa-plus"></i>
              </a>
            </li>           
          </ul>
        </li>

        <li class="list-group-item">
          <div class="card" v-for="vendor in vendors" :key="vendor._id">
            <div class="card-body">
              <a class="col-sm-12 col-lg-3" href="#" @click.prevent="onVendorClick(vendor)">
                <img id="profile-logo" src="https://cdn.allbud.com/image/upload/s--Gsagk9Ld--/c_limit,h_600,w_800/v1433196075/images/dispensary/main-street-marijuana/970/main-st-marijuana-allbud.jpg"
                  alt="Vendor Logo">
                <span class="company-name">{{ vendor.company.name }}</span>
              </a>
              <div class="row hidden-md-down">
                <div class="col-sm-6 col-lg-9">
                  <VendorListContactInfo :vendor="vendor" />
                </div>
                <div class="col-sm-6 col-lg-3">
                  <DropdownButton class="actionMenu col-md-3" label="Action" :vendor="vendor" :options="actions" @selection="onActionSelect(vendor, $event)" />
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
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
    },
    addVendor() {
      this.$store.commit('takeAction', {
        type: 'addVendor'
      });
    }
  }
};
</script>
