<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <button @click="updateBuyerProfile" class="btn">{{ buyer.firstName }}</button>
  </div>
  <div slot="content">
    <slot name="content"></slot>
  </div>
</FullScreenPage>
</template>

<script>
import { mapGetters } from 'vuex';

import FullScreenPage from '@/components/page/FullScreenPage';

export default {
  components: {
    FullScreenPage
  },
  props: ['pageName'],
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      pageMenuItems: 'pageMenuItems'
    })
  },
  methods: {
    updateBuyerProfile() {
      console.log('hi');
      this.$store.commit('userInitiatedProfileUpdate', true);
      this.$store.commit('takeAction', {
        type: 'updateBuyerProfile'
      });
    }
  }
};
</script>
