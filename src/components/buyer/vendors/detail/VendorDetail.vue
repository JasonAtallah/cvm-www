<style scoped>
span.vendor-name {
  font-size: 2rem;
}
</style>

<template>
<Detail :title="vendor.company.name" :showCancel="false"
  @save="close" saveLabel="Close">
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
</Detail>
</template>

<script>
import {
  Tabs as ElTabs,
  TabPane as ElTabPane
} from 'element-ui';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '@/apps/buyer/metadata/productTables';
import Detail from '@/components/masterDetail/Detail';
import Information from './detailTabs/Information';
import ProductTable from './detailTabs/ProductTable';

export default {
  components: {
    Detail,
    ElTabs,
    ElTabPane,
    Information,
    ProductTable
  },
  data() {
    return {
      FlowersProductTable,
      EdiblesProductTable,
      ConcentratesProductTable
    };
  },
  props: ['vendor'],
  methods: {
    close() {
      console.log('hi');
      this.$store.commit('selVendor', null);
    }
  }
};
</script>
