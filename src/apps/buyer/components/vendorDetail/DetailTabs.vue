<style scoped>

</style>

<template>
<ElTabs @tab-click="activateTab">
  <ElTabPane label="Information" name="information" />
  <ElTabPane label="Flowers" name="flowers" />
  <ElTabPane label="Edibles" name="edibles" />
  <ElTabPane label="Concentrates" name="concentrates" />
</ElTabs>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Tabs as ElTabs,
  TabPane as ElTabPane
} from 'element-ui';

export default {
  components: {
    ElTabs,
    ElTabPane
  },
  methods: {
    activateTab(tab) {
      this.$emit('changeTab', tab.label.toLowerCase());
    }
  }
};
</script>
