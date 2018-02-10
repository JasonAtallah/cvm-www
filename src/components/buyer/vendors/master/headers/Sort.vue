<style lang="scss" scoped>
.vendor-sort {
  display: table;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 100%;
  height: $vendors-master-row-height;
  color: $vendors-master-color;
}

.vendor-sort li {
  list-style: none;
  display: table-cell;
  text-align: left;
  padding: 1rem;
}

.vendor-sort li:nth-of-type(n+2) {
  border-left: 1px solid $section-border-color;
}

.vendor-sort .title {
  display: block;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
}

.search input {
  height: 1.5rem;
}

.el-dropdown-link {
  cursor: pointer;
  font-size: 0.875rem;
}

.filter-dropdown-item:hover {
  background-color: inherit;
}
</style>

<template>
<div class="vendor-sort">
  <div class="title">Sort</div>
  <ElSelect @change="updateSort"
    v-model="vendorFilter.sort"
    required
    size="mini"
    placeholder="All">
    <ElOption
      v-for="option in vendorFilter.sortOptions"
      :key="option.value"
      :label="option.label"
      :value="option"
      value-key="value">
    </ElOption>
  </ElSelect>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Option as ElOption,
  Select as ElSelect } from 'element-ui';

export default {
  components: {
    ElOption,
    ElSelect
  },
  computed: {
    ...mapGetters({
      vendorFilter: 'vendorFilter'
    })
  },
  methods: {
    updateSort(sortOption) {
      this.$store.commit('vendorSort', sortOption);
    }
  }
};
</script>
