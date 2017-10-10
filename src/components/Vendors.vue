<template>
  <div class="page">
    <page :pageName="name">
      <div slot="content">
        <vendor-filter :filter="filter"></vendor-filter>
        <vendor-list :vendors="vendors"></vendor-list>
      </div>
    </page>
  </div>
</template>

<script>
import Page from '@/components/Page';
import VendorList from '@/components/VendorList';
import VendorFilter from '@/components/VendorFilter';

export default {
  name: 'Vendors',
  data() {
    return {
      name: 'Vendors',
      filter: {
        sort: 'RecentLast'
      },
      vendors: [
        {
          name: 'Marijuana Supply Co.',
          city: 'Needles',
          state: 'CA',
          products: [
            {
              type: 'flower'
            }
          ],
          status: null
        },
        {
          name: 'Cannabis Ventures',
          city: 'California City',
          state: 'CA',
          products: [
            {
              type: 'flower'
            },
            {
              type: 'edible'
            }
          ],
          status: null
        }
      ]
    };
  },
  components: {
    Page,
    VendorList,
    VendorFilter
  },
};
</script>

<style scoped>

</style>
