<style scoped>

.content-option {
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.vendor-list-detail {
  padding-left: 3rem;
  padding-top: 1.5rem;
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
      <DetailTabs @changeTab="changeTab" />
    </div>
    <div class="row profile-content">
      <Company v-if="selTab === 'company'" :vendor="vendor" />
      <Contact v-if="selTab === 'contact'" :vendor="vendor" />
      <ProductTable v-if="selTab === 'flowers'" :table="FlowersProductTable" :vendor="vendor" />
      <ProductTable v-if="selTab === 'edibles'" :table="EdiblesProductTable" :vendor="vendor" />
      <ProductTable v-if="selTab === 'concentrates'" :table="ConcentratesProductTable" :vendor="vendor" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from './vendorListDetails/DetailTabs';
import Company from './vendorListDetails/Company';
import Contact from './vendorListDetails/Contact';
import ProductTable from './vendorListDetails/ProductTable';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '../metadata/productTables';

export default {
  components: {
    DetailTabs,
    Company,
    Contact,
    ProductTable
  },
  props: ['vendor'],
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable,
      selTab: 'company'
    };
  },
  computed: {
    isVisible() {
      return this.vendor !== null;
    }
  },
  methods: {
    changeTab(detailTab) {
      this.selTab = detailTab;
    }
  }
};
</script>
