<style lang="scss" scoped>
.vendors-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid $section-border-color;
}
</style>

<template>
  <BasePage pageName="Vendors" v-if="buyer">
    <div slot="content" class="vendors-page">
      <MasterDetail>
        <div slot="master" class="vendors-master">
          <VendorListFilter />
          <VendorList />
        </div>
        <div class="detail">
          <VendorListDetail />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/page/content/MasterDetail';
import BasePage from './BasePage';
import VendorList from './VendorList';
import VendorListFilter from './VendorListFilter';
import VendorListDetail from './VendorListDetail';

export default {
  components: {
    BasePage,
    MasterDetail,
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
      selVendor: 'selVendor'
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
