<template>
<div>
  <ElButton type="text" v-if="buyer" @click="updateBuyerSettings=true">
    {{ buyer.firstName }}
  </ElButton>

  <ElDialog :visible.sync="updateBuyerSettings" title="Settings">
    <ElTabs v-model="activeTab" type="card">
      <ElTabPane label="Profile" name="profile">
        <ProfileForm :buyer="buyer" />
      </ElTabPane>
      <ElTabPane label="Email Templates" name="emails">
        <EmailTemplatesForm :buyer="buyer" />
      </ElTabPane>
    </ElTabs>
  </ElDialog>
</div>
</template>

<script>
import {
  Button as ElButton,
  Dialog as ElDialog,
  Tabs as ElTabs,
  TabPane as ElTabPane } from 'element-ui';
import EmailTemplatesForm from './EmailTemplatesForm';
import ProfileForm from './ProfileForm';

export default {
  props: ['buyer'],
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
      activeTab: 'profile',
      updateBuyerSettings: false,
    };
  }
};
</script>

<style>

</style>
