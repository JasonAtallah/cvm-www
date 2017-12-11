<style scoped>

</style>

<template>
  <BasePage pageName="Vendors" v-if="buyer">
    <div slot="header-buttons">
      <button class="btn btn-primary" @click="addVendor">Add Vendor</button>
    </div>
    <div slot="content">
      <div class="row">
        <div class="col-sm-12">
          <VendorListFilter />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4">
          <VendorList />
        </div>
        <div class="col-md-12 col-lg-8">
          <VendorListDetail v-if="vendor" />
        </div>
      </div>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';

export default {
  components: {
    BasePage,
    VendorList,
    VendorListFilter,
    VendorListDetail
  },
  data() {
    return {
      name: 'Vendors'
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'selVendor'
    })
  },
  methods: {
    addVendor() {
      this.$store.commit('takeAction', {
        type: 'addVendor'
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadVendors');
    });
  }
};
</script>
