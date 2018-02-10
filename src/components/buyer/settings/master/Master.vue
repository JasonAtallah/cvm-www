<style lang="scss">
.settings-list {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: $vendor-list-background-color;
  background-image: $vendor-list-background-image;
}

.settings-list li {
  position: relative;
  cursor: pointer;
  background-color: #FFF;
  border: 1px solid #a0ac92;
  margin: 10px 10px;
  padding: 10px;
}

.settings-list li:hover {
  background-color: $vendor-list-item-hover-background-color;
}

.settings-list li.selected {
  margin: 10px 0 10px 20px;
  padding: 10px 0 10px 10px;
  border-right: none;
  background-color: $vendor-list-item-selected-background-color;
}

.settings-list li label {
  font-size: 1.6rem;
  position: relative;
  top: .2rem;
}
</style>

<template>
  <ul class="settings-list list-unstyled">
    <li v-for="setting in settings.settingsTabs" :key="setting.value"
    :class="{selected: isSelected(setting)}"
    @click="switchTab(setting)">
      <label>{{ setting.label }}</label>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
