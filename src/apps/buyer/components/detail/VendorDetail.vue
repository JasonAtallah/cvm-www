<style scoped>
</style>

<template>
  <div class="vendor-detail">
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
        <div class="card card-body bg-light">
          <Information v-if="selTab === 'information'" :vendor="vendor" />
          <ProductTable v-if="selTab === 'flowers'" :table="FlowersProductTable" :vendor="vendor" />
          <ProductTable v-if="selTab === 'edibles'" :table="EdiblesProductTable" :vendor="vendor" />
          <ProductTable v-if="selTab === 'concentrates'" :table="ConcentratesProductTable" :vendor="vendor" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from '../vendorDetail/DetailTabs';
import Information from '../vendorDetail/Information';
import ProductTable from '../vendorDetail/ProductTable';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '../../metadata/productTables';

export default {
  components: {
    DetailTabs,
    Information,
    ProductTable
  },
  props: ['vendor'],
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable,
      selTab: 'information'
    };
  },
  methods: {
    changeTab(detailTab) {
      this.selTab = detailTab;
    }
  }
};
</script>
