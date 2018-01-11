<template>
  <ElDialog :visible.sync="isVisible" title="Cancel Meeting" width="30%">
    <ElButton type="danger" @click="send">Confirm</ElButton>
    <ElButton @click="cancel">Cancel</ElButton>
  </ElDialog>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Dialog as ElDialog } from 'element-ui';

export default {
  components: {
    ElButton,
    ElDialog
  },
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    }),
    isVisible: {
      get() {
        return this.$store.getters.pendingAction.type === 'cancelMeeting';
      },
      set(value) {
        if (value === false) {
          this.$store.commit('cancelPendingAction');
        }
      }
    },
    action() {
      return this.$store.getters.pendingAction.type;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    send() {
      this.$store.dispatch('cancelMeeting', {
        vendor: this.vendor,
        action: this.action
      });
    }
  }
};
</script>
