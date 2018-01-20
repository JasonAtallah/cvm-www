<style scoped>
#settingsBtn {
  padding: 0%;
  color: #4f5154;
}
</style>

<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    {{ buyer.firstName }}
  </div>
  <div slot="content">
    <slot name="content"></slot>
  </div>
</FullScreenPage>
</template>

<script>
import { mapGetters } from 'vuex';
import FullScreenPage from '@/components/page/FullScreenPage';
import { Button as ElButton } from 'element-ui';

export default {
  components: {
    FullScreenPage,
    ElButton
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
