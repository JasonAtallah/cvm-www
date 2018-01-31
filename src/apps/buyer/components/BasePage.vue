<style scoped>
#settingsBtn {
  padding: 0%;
  color: #4f5154;
}

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>

<template>
<FullScreenPage :menuItems="pageMenuItems" :pageName="pageName">
  <div slot="menu-right" v-if="buyer">
    <ElDropdown @command="onOptionSelect">
      <span class="el-dropdown-link">{{ buyer.firstName }}
      <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem v-for="option in appOptions" :key="option.value"
        :command="option">
          {{ option.label }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
  </div>
  <div slot="content">
    <slot name="content"></slot>
  </div>
</FullScreenPage>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem } from 'element-ui';
import FullScreenPage from '@/components/page/FullScreenPage';

export default {
  components: {
    FullScreenPage,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
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
    onOptionSelect(command) {
      if (command.dispatch) {
        this.$store.dispatch(command.dispatch, {
          command
        });
      } else if (command.commit) {
        this.$store.commit(command.commit, {
          command
        });
      }
    }
  }
};
</script>
