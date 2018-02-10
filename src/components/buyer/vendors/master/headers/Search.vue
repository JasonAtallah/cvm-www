<style lang="scss" scoped>
.vendor-list-search {
  width: 100%;
  color: $vendors-master-color;
}

.vendor-list-search li {
  list-style: none;
  display: table-cell;
  text-align: left;
  padding: 1rem;
  width: 50%;
}

.vendor-list-search .title {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 5px;
}

.vendor-list-search .el-input__inner::placeholder {
    color: #000;
}
</style>

<template>
<div class="vendor-list-search">
  <div class="title">Search</div>
  <ElInput placeholder="Name, Contact, Product Type" label="Search" clearable size="mini" @input="updateSearch" />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Input as ElInput } from 'element-ui';

export default {
  components: {
    ElInput
  },
  methods: {
    updateSearch(query) {
      this.$store.dispatch('loadVendors', { query });
    }
  }
};
</script>
