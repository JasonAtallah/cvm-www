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

.el-dropdown-link {
  cursor: pointer;
  font-size: 0.875rem;
}
</style>

<template>
<ul class="vendor-list-filter">

  <li class="sort">
    <div class="title">Sort</div>
    <ElDropdown @command="updateSort">
      <span class="el-dropdown-link">
        {{ selectedSortLabel }}
        <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem v-for="option in vendorFilter.sortOptions" :key="option.label"
        :command="option">
          {{ option.label }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
  </li>

  <li class="status">
    <div class="title">Status</div>
    <ElSelect @change="updateStatus"
      v-model="statusesSelected"
      filterable clearable
      size="mini"
      placeholder="All">
      <ElOption
        v-for="option in statusOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value">
      </ElOption>
    </ElSelect>
  </li>

  <li class="filter">
    <div class="title">Search</div>
      <input type="text" @input="updateSearch" />
  </li>

</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem,
  Option as ElOption,
  Select as ElSelect } from 'element-ui';
import DropdownForm from '@/components/form/DropdownForm';
import MenuSelect from '@/components/form/MenuSelect';
import SingleSelect from '@/components/form/SingleSelect';

export default {
  components: {
    DropdownForm,
    MenuSelect,
    SingleSelect,
    ElButton,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElOption,
    ElSelect
  },
  data() {
    return {
      ALL_STATUS_TYPES: 'All',
      sortSelected: '',
      statusesSelected: ''
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
