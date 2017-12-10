<style lang="scss" scoped>
.vendor-list-filter {
  display: table;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

.vendor-list-filter li {
  list-style: none;
  display: table-cell;
  text-align: left;
  padding: .2rem 1rem;
}

.vendor-list-filter li:nth-of-type(n+2) {
  border-left: 1px solid $section-border-color;
}

.vendor-list-filter li .title {
  display: block;
  font-size: .7rem;
  font-weight: bold;
}

.search input {
  height: 1.5rem;
}
</style>

<template>
<ul class="vendor-list-filter">
  <li class="sort">
    <div class="title">Sort</div>
    <DropdownForm v-on:selection="updateSort" :label="selectedSortLabel" >
      <MenuSelect :options="vendorFilter.sortOptions" :value="vendorFilter.sort" @selection="updateSort"></MenuSelect>
    </DropdownForm>
  </li>
  <li class="filter">
    <div class="title">Filter</div>
    <DropdownForm v-on:selection="updateStatus" :showDropdownToggle="false">
      <SingleSelect :options="productTypes" :value="vendorFilter.productType" v-on:selection="updateProductType"></SingleSelect>
    </DropdownForm>
  </li>
  <li class="search">
    <div class="title">Search</div>
    <input type="text" />
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import DropdownForm from '@/components/form/DropdownForm';
import MenuSelect from '@/components/form/MenuSelect';
import SingleSelect from '@/components/form/SingleSelect';

export default {
  components: {
    DropdownForm,
    MenuSelect,
    SingleSelect
  },
  computed: {
    ...mapGetters({
      vendorFilter: 'vendorFilter',
      productTypes: 'productTypes'
    }),
    selectedSortLabel() {
      if (!this.vendorFilter.sort) {
        return 'none';
      }
      return this.vendorFilter.sort.label;
    }
  },
  methods: {
    updateSort(sort) {
      this.$store.commit('vendorSort', sort);
    },
    updateProductType(value) {
      this.$store.commit('productFilter', value);
    },
    updateStatus(value) {
      this.$store.commit('statusFilter', value);
    }
  }
};
</script>
