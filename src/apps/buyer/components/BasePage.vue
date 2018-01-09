<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <BuyerSettings :buyer="buyer" />
  </div>
  <div slot="content">
    <slot name="content"></slot>
  </div>
</FullScreenPage>
</template>

<script>
import { mapGetters } from 'vuex';
import FullScreenPage from '@/components/page/FullScreenPage';
import BuyerSettings from './dialogs/BuyerSettings/BuyerSettings';

export default {
  components: {
    FullScreenPage,
    BuyerSettings
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
