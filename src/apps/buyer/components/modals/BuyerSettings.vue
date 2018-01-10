<template>
  <ElDialog :visible.sync="isVisible" title="Settings">
    <ElTabs v-model="activeTab" type="card">
      <ElTabPane label="Profile" name="profile">
        <ProfileForm :buyer="buyer" />
      </ElTabPane>
      <ElTabPane label="Email Templates" name="emails">
        <EmailTemplatesForm :buyer="buyer" />
      </ElTabPane>
    </ElTabs>
  </ElDialog>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Dialog as ElDialog,
  Tabs as ElTabs,
  TabPane as ElTabPane } from 'element-ui';
import EmailTemplatesForm from './buyerSettings/EmailTemplatesForm';
import ProfileForm from './buyerSettings/ProfileForm';

export default {
  components: {
    ElButton,
    ElDialog,
    ElTabs,
    ElTabPane,
    EmailTemplatesForm,
    ProfileForm
  },
  data() {
    return {
      activeTab: 'profile'
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer'
    }),
    isVisible: {
      get() {
        return this.$store.getters.pendingAction.type === 'editBuyerSettings';
      },
      set(value) {
        if (value === false) {
          this.$store.commit('cancelPendingAction');
        }
      }
    }
  }
};
</script>

<style>

</style>
