<style>

</style>

<template>
  <ElRow>
    <ElCol :span="24">
      <ElMenu default-active="profile">
        <ElMenuItem v-for="setting in settings.settingsTabs" :key="setting.value" @click="switchTab(setting)" :index="setting.value">
          <span slot="title">{{ setting.label }}</span>
        </ElMenuItem>
      </ElMenu>
    </ElCol>
  </ElRow>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Col as ElCol,
  Menu as ElMenu,
  MenuItem as ElMenuItem,
  Row as ElRow } from 'element-ui';

export default {
  components: {
    ElCol,
    ElMenu,
    ElMenuItem,
    ElRow
  },
  prop: ['buyer'],
  computed: {
    ...mapGetters({
      settings: 'buyerSettings'
    })
  },
  methods: {
    isSelected(setting) {
      return this.settings.activeTab === setting.value;
    },
    switchTab(setting) {
      this.$store.commit('selSettingTab', setting.value);
    }
  }
};
</script>

