<style lang="scss" scoped>
.vendor-list-filter {
  display: table;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  height: $vendor-list-filter-height;
  width: 100%;
  border-bottom: 1px solid $section-border-color;
}

.vendor-list-filter li {
  list-style: none;
  display: table-cell;
  text-align: left;
  padding: .2rem 1rem;
  width: 50%;
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

.fieldLabel {
  font-size: .8rem;
  font-weight: bold;
}
</style>

<template>
<ul class="vendor-list-filter">
  <li class="sort">
    <div class="title">Sort</div>
    <DropdownForm
      :label="selectedSortLabel"
      @selection="updateSort">
      <MenuSelect
        :options="vendorFilter.sortOptions"
        :value="vendorFilter.sort"
        @selection="updateSort"></MenuSelect>
    </DropdownForm>
  </li>
  <li class="filter">
    <div class="title">Filter</div>
    <DropdownForm
      :label="filterValue"
      :enableSubClick="true">

      <div class="fieldLabel">
        Status
      </div>
      <SingleSelect
        :options="statusOptions"
        :value="vendorFilter.status"
        :nullSelectionLabel="ALL_STATUS_TYPES"
        @selection="updateStatus"></SingleSelect>

      <br /><br />
      <div class="fieldLabel">
        Search
      </div>
      <input type="text" @input="updateSearch" />
    </DropdownForm>
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
  data() {
    return {
      ALL_STATUS_TYPES: 'All'
    };
  },
  computed: {
    ...mapGetters({
      statusOptions: 'statusOptions',
      vendorFilter: 'vendorFilter'
    }),
    selectedSortLabel() {
      if (!this.vendorFilter.sort) {
        return 'none';
      }
      return this.vendorFilter.sort.label;
    },
    filterValue() {
      if (this.vendorFilter.searchTerm && this.vendorFilter.status) {
        return `"${this.vendorFilter.searchTerm}" in ${this.vendorFilter.status}`;
      } else if (this.vendorFilter.searchTerm) {
        return `"${this.vendorFilter.searchTerm}"`;
      } else if (this.vendorFilter.status) {
        return this.vendorFilter.status;
      }

      return this.ALL_STATUS_TYPES;
    }
  },
  methods: {
    updateProductType(value) {
      this.$store.commit('productFilter', value);
    },
    updateSearch(event) {
      this.$store.commit('vendorSearch', event.target.value);
    },
    updateSort(sort) {
      this.$store.commit('vendorSort', sort);
    },
    updateStatus(value) {
      this.$store.commit('statusFilter', value);
    }
  }
};
</script>
