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
              v-model="buyer.email.subject">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Message:</label>
            <textarea cols="30" rows="10" class="form-control" id="body"
              v-model="buyer.email.body"></textarea>
          </div>
        </form>
      </div>
      
      <div class="modal-footer">
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
      buyer: {
        email: {
          subject: null,
          body: null,
          status: null
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      isVisible: 'sendVendorEmailModalIsVisible',
      vendorStatus: 'vendorStatus'
    })
  },
  methods: {
    cancel() {
      this.$store.commit('cancelSendVendorEmail');
    },
    send() {
      this.buyer.email.status = this.vendorStatus;
      this.$store.dispatch('setVendorStatusEmail', this.buyer);
    }
  }
};
</script>
