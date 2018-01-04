<style scoped>

.add-vendor-modal {
  text-align: left;
  display: block;
}

</style>

<template>
  <div class="modal add-vendor-modal" tabindex="-1" role="dialog" v-if="isVisible">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Confirm Meeting Cancellation</h5>
        </div>

        <div class="modal-body">
          <form>
            <div class="form-group">
              <h4>Are you sure you'd like to cancel this meeting?</h4>
            </div>
          </form>
        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="send">Confirm</button>
          <button type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  computed: {
    isVisible() {
      const pendingAction = this.$store.getters.pendingAction.type;
      return pendingAction === 'cancelMeeting';
    },
    action() {
      return this.$store.getters.pendingAction.type;
    },
    vendor() {
      return this.$store.getters.pendingAction.vendor;
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
