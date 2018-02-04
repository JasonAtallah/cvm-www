<style scoped>
span.vendor-name {
  font-size: 2rem;
}
</style>

<template>
  <div class="vendor-detail">
    <div class="row">
      <div class="col-sm-12">
        <span class="vendor-name">{{ vendor.company.name }}</span>
        <StateBadge />
        <!-- <WatchVendorBadge /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <DetailTabs @changeTab="changeTab" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <Information v-if="selTab === 'information'" :vendor="vendor" />
        <ProductTable v-if="selTab === 'flowers'" :table="FlowersProductTable" :vendor="vendor" />
        <ProductTable v-if="selTab === 'edibles'" :table="EdiblesProductTable" :vendor="vendor" />
        <ProductTable v-if="selTab === 'concentrates'" :table="ConcentratesProductTable" :vendor="vendor" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from './detailTabs/DetailTabs';
import Information from './detailTabs/Information';
import ProductTable from './detailTabs/ProductTable';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '../../../metadata/productTables';
import StateBadge from '../master/StateBadge';
import WatchVendorBadge from '../master/WatchVendorBadge';

export default {
  components: {
    DetailTabs,
    Information,
    ProductTable,
    StateBadge,
    WatchVendorBadge
  },
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable,
      selTab: 'information'
    };
  },
  props: ['vendor'],
  methods: {
    changeTab(detailTab) {
      this.selTab = detailTab;
    }
  }
};
</script>
