<style>

</style>

<template>
  <div class="action-button">
    <DropdownButton v-if="currentAction" class="actionMenu text-right" buttonClassName="btn-link"
      :option="currentAction"
      :options="currentAction.options"
      @selection="onActionSelect($event)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DropdownButton from '@/components/form/DropdownButton';

export default {
  components: {
    DropdownButton
  },
  props: ['vendor'],
  computed: {
    ...mapGetters({
      buttons: 'vendorActionButtons'
    }),
    currentAction() {
      return this.buttons.find(button => button.status === this.vendor.state.name);
    }
  },
  methods: {
    onActionSelect(action) {
      if (action.commit) {
        this.$store.commit(action.commit, {
          type: action.value,
          vendor: this.vendor
        });
      } else if (action.dispatch) {
        this.$store.dispatch(action.dispatch, {
          vendor: this.vendor,
          action
        });
      }
    }
  }
};
</script>
