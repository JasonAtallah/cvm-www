<style scoped>
.row {
  margin-bottom: 1rem;
}
</style>

<template>
<Detail :showSave="false" :showCancel="false">
  <Information :vendor="response" />
  <div v-for="productType in productTables"
    v-if="response[productType.vendorField].products.length > 0"
    :key="productType.vendorField">
    <div class="row">
      <div class="col-12">
        <h3>{{ productType.label }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12" >
        <ElTable :data="response[productType.vendorField].products">
          <ElTableColumn v-for="field in productType.columns" :key="field.field" :prop="field.field" :label="field.header" />
        </ElTable>
      </div>
    </div>
  </div>
</Detail>
</template>

<script>
import {
  Table as ElTable,
  TableColumn as ElTableColumn } from 'element-ui';
import { FlowersProductTable, EdiblesProductTable, ConcentratesProductTable } from '@/apps/buyer/metadata/productTables';
import Detail from '../../masterDetail/Detail';
import Information from '../../buyer/vendors/detail/detailTabs/Information';

export default {
  components: {
    Detail,
    ElTable,
    ElTableColumn,
    Information
  },
  data() {
    return {
      productTables: {
        FlowersProductTable,
        EdiblesProductTable,
        ConcentratesProductTable
      }
    };
  },
  props: ['response']
};
</script>
