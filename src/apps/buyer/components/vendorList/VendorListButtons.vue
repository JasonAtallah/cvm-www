<style lang="scss" scoped>
.vendor-list-buttons {
  margin: 0;
  padding: .7rem 1rem;
  height: $vendor-list-filter-height;
  width: 100%;
  border-bottom: 1px solid $section-border-color;
}
</style>

<template>
<div class="vendor-list-buttons">
  <button id="addVendor" class="btn btn-sm btn-primary" @click="addVendor">Add Vendor</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    addVendor() {
      this.$store.commit('takeAction', {
        type: 'addVendor'
      });
    }
  }
};
</script>
