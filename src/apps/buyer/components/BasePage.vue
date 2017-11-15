
<style scoped>
</style>

<template>
<Page :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right">
    {{ profile.givenName }}
  </div>
  <div slot="header-buttons">
    <slot name="header-buttons"></slot>
  </div>
  <div slot="content">
    <slot name="content"></slot>
  </div>
</Page>
</template>

<script>
import { mapGetters } from 'vuex';

import Page from '@/components/page/Page';

export default {
  components: {
    Page
  },
  props: ['pageName'],
  computed: {
    ...mapGetters({
      profile: 'profile',
      pageMenuItems: 'pageMenuItems'
    })
  }
};
</script>
