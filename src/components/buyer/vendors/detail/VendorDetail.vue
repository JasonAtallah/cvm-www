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
        <ElTabs value="information">
          <ElTabPane label="Information" name="information">
            <Information :vendor="vendor" />
          </ElTabPane>
          <ElTabPane label="Flowers" name="flowers">
            <ProductTable :vendor="vendor" :table="FlowersProductTable" />
          </ElTabPane>
          <ElTabPane label="Edibles" name="edibles">
            <ProductTable :vendor="vendor" :table="EdiblesProductTable" />
          </ElTabPane>
          <ElTabPane label="Concentrates" name="concentrates">
            <ProductTable :vendor="vendor" :table="ConcentratesProductTable" />
          </ElTabPane>
        </ElTabs>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Tabs as ElTabs,
  TabPane as ElTabPane
} from 'element-ui';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '@/apps/buyer/metadata/productTables';
import Information from './detailTabs/Information';
import ProductTable from './detailTabs/ProductTable';
import StateBadge from '../master/StateBadge';
import WatchVendorBadge from '../master/WatchVendorBadge';

export default {
  components: {
    ElTabs,
    ElTabPane,
    Information,
    ProductTable,
    StateBadge,
    WatchVendorBadge
  },
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable
    };
  },
  props: ['vendor']
};
</script>
