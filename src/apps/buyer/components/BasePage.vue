<style scoped>

</style>

<template>
<Page :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right">
    {{ buyer.firstName }}
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
      buyer: 'buyer',
      pageMenuItems: 'pageMenuItems'
    })
  }
};
</script>
