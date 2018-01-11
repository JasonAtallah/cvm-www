<style scoped>
#settings-btn {  
  padding: 0%;  
  color: #4f5154;
}
</style>

<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <ElButton type="text" id="settings-btn" v-if="buyer" @click="showBuyerSettings">
      <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
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
