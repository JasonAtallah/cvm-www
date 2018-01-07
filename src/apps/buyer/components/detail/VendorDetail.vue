<style scoped>
</style>

<template>
  <div class="vendor-list-detail">
    <div class="row">
      <div class="col-sm-12">
        <h3>{{ vendor.company.name }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <DetailTabs @changeTab="changeTab" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <Company v-if="selTab === 'company'" :vendor="vendor" />
        <Contact v-if="selTab === 'contact'" :vendor="vendor" />
        <ProductTable v-if="selTab === 'flowers'" :table="FlowersProductTable" :vendor="vendor" />
        <ProductTable v-if="selTab === 'edibles'" :table="EdiblesProductTable" :vendor="vendor" />
        <ProductTable v-if="selTab === 'concentrates'" :table="ConcentratesProductTable" :vendor="vendor" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from './vendorDetail/DetailTabs';
import Company from './vendorDetail/Company';
import Contact from './vendorDetail/Contact';
import ProductTable from './vendorDetail/ProductTable';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '../../metadata/productTables';

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
  methods: {
    changeTab(detailTab) {
      this.selTab = detailTab;
    }
  }
};
</script>
