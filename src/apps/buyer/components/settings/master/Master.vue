<style>
.settings-list {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #DEDEDE;
}

.settings-list li {
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid $section-border-color;
  background-color: #EEE;
  border-right: 1px solid #EEE;
}

.settings-list li:hover {
  background-color: #FFF;
}

.settings-list li.selected {
  background-color: #FFF;
  border-right: 1px solid #FFF;
}

.settings-list .settings-list-item {
  margin: 0;
  padding: 15px;
}

label.settings-input-label {
  margin-left: 0.5rem;
}
</style>

<template>
  <ul class="settings-list list-unstyled">
    <li v-for="setting in settings.settingsTabs" :key="setting.value"
    :class="{selected: isSelected(setting)}"
    @click="switchTab(setting)">
      <div class="row settings-list-item">
        <h3>{{ setting.label }}</h3>
      </div>
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

