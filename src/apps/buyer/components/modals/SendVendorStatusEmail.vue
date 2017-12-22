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
        <h5 class="modal-title">Send Email to Vendor</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Subject:</label>
            <input type="text" class="form-control" id="subjectZ"
              v-model="email.subject">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Message:</label>
            <textarea cols="30" rows="10" class="form-control" id="body"
              v-model="email.body"></textarea>
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <label for="saveAsDefaultEmail">Make Default</label>
        <input id="saveAsDefaultEmail" v-model="newDefaultEmail" value="yes" type="checkbox">
        <button type="button" class="btn btn-primary" @click.prevent="send">Send</button>
        <button type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      newDefaultEmail: null
    };
  },
  computed: {
    isVisible() {
      return ['approveVendor', 'rejectVendor'].indexOf(this.action) >= 0;
    },
    action() {
      return this.$store.getters.pendingAction.type;
    },
    vendor() {
      return this.$store.getters.pendingAction.vendor;
    },
    email() {
      return this.$store.getters.buyer.emails[this.action];
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    send() {
      this.updateEmail()
        .then(() => {
          return this.$store.dispatch('performVendorAction', {
            vendor: this.vendor,
            action: this.action,
            email: this.email
          });
        });
    },
    updateEmail() {
      if (this.newDefaultEmail) {
        return this.$store.dispatch('updateBuyerEmailTemplate', {
          email: this.email,
          templateId: this.action
        });
      }
      return Promise.resolve();
    }
  }
};
</script>
