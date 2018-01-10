<template>
  <ElDialog :visible.sync="isVisible" title="Cancel Meeting" width="30%">
          <ElButton class="cancel-meeting-btn" type="danger" @click="send" width="100%">Confirm</ElButton>
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
    },
    vendor() {
      return this.$store.getters.pendingAction.vendor;
    }
  },
  methods: {
    send() {
      this.$store.dispatch('cancelMeeting', {
        vendor: this.vendor,
        action: this.action
      });
    }
  }
};
</script>
