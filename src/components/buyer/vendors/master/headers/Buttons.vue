

<template>
  <ElButtonGroup>
    <ElButton type="primary" icon="el-icon-plus" @click="addVendor">Add Vendor</ElButton>
  </ElButtonGroup>
</template>

<script>
import {
  Button as ElButton,
  ButtonGroup as ElButtonGroup } from 'element-ui';

export default {
  components: {
    ElButton,
    ElButtonGroup
  },
  methods: {
    addVendor() {
      this.$store.commit('overrideDetail', {
        type: 'addVendor'
      });
    }
  }
};
</script>
