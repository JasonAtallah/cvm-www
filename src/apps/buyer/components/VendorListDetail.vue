<style scoped>

.content-option {
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.vendor-list-detail {
  padding-left: 1.5rem;
}

.company-name {
  font-size: 2rem;
  color: #777777
}

</style>


<template>
  <div class="vendor-list-detail">
    <div class="row company-name">
      {{ vendor.company.name }}
    </div>
    <div class="row content-options">
      <DetailTabs />
    </div>
    <div class="row profile-content">
      <Company v-if="vendorDetailsTab === 'company'" />
      <Contact v-if="vendorDetailsTab === 'contact'" />
      <ProductTable v-if="vendorDetailsTab === 'flowers'" :table="FlowersProductTable" />
      <ProductTable v-if="vendorDetailsTab === 'edibles'" :table="EdiblesProductTable" />
      <ProductTable v-if="vendorDetailsTab === 'concentrates'" :table="ConcentratesProductTable" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from './vendorListDetails/DetailTabs';
import Company from './vendorListDetails/Company';
import Contact from './vendorListDetails/Contact';
import ProductTable from './vendorListDetails/ProductTable';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '../config/productTables';

export default {
  components: {
    DetailTabs,
    Company,
    Contact,
    ProductTable
  },
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable
    };
  },
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      vendorDetailsTab: 'vendorDetailsTab'
    }),
    isVisible() {
      return this.vendor !== null;
    }
  },
  methods: {
    closeDetail() {
      this.$store.commit('selVendor', null);
    }
  }
};
</script>
