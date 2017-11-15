
<style scoped>
</style>

<template>
<Page :pageName="pageName">
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
  props: ['pageName']
};
</script>
