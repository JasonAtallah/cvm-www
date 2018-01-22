<style scoped>
#settingsBtn {
  padding: 0%;
  color: #4f5154;
}
</style>

<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <DropdownForm
      :label="buyer.firstName">
      <MenuSelect
        :options="appOptions"
        :value="appOptions"
        @selection="logout"
        />
    </DropdownForm>
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
import DropdownForm from '@/components/form/DropdownForm';
import MenuSelect from '@/components/form/MenuSelect';

export default {
  components: {
    FullScreenPage,
    ElButton,
    DropdownForm,
    MenuSelect
  },
  props: ['pageName'],
  computed: {
    ...mapGetters({
      appOptions: 'appOptions',
      buyer: 'buyer',
      pageMenuItems: 'pageMenuItems'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>
