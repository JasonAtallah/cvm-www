<style lang="scss" scoped>
.vendor-status-filter {
  display: table;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
  width: 100%;
  height: $vendors-master-row-height;
  color: $vendors-master-color;
}

.vendor-status-filter li {
  list-style: none;
  display: table-cell;
  text-align: left;
  padding: 1rem;
  width: 50%;
}

.vendor-status-filter li:nth-of-type(n+2) {
  border-left: 1px solid $section-border-color;
}

.vendor-status-filter .title {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 5px;
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

.filter-dropdown-item:hover {
  background-color: inherit;
}
</style>

<template>
<div class="vendor-status-filter">

  <div class="title">Status</div>
  <ElSelect @change="updateStatus"
    v-model="selectedStatus"
    clearable
    size="mini"
    placeholder="All">
    <ElOption
      v-for="option in statusOptions"
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
  data() {
    return {
      selectedStatus: null
    };
  },
  computed: {
    ...mapGetters({
      vendorFilter: 'vendorFilter',
      statusOptions: 'statusOptions'
    })
  },
  methods: {
    updateStatus(value) {
      if (value) {
        this.$store.commit('statusFilter', value);
      } else {
        this.$store.commit('statusFilter', null);
      }
    }
  }
};
</script>
