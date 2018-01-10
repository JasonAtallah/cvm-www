<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <ElButton type="text" v-if="buyer" @click="showBuyerSettings">
      {{ buyer.firstName }}
    </ElButton>
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
  },
  methods: {
    showBuyerSettings() {
      this.$store.commit('takeAction', {
        type: 'editBuyerSettings'
      });
    }
  }
};
</script>
