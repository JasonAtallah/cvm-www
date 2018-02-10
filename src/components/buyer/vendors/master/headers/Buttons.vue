<style lang="scss" scoped>
.vendor-list-buttons {
  margin: 0;
  padding: .7rem 1rem;
  height: $vendors-master-row-height;
  width: 100%;
  border-bottom: 1px solid $section-border-color;
}
</style>

<template>
<div class="vendor-list-buttons">
  <button id="addVendor" class="btn btn-sm btn-primary pull-right" @click="addVendor">+</button>
</div>
</template>

<script>
export default {
  methods: {
    addVendor() {
      this.$store.commit('overrideDetail', {
        type: 'addVendor'
      });
    }
  }
};
</script>
