<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Appointment Scheduled with {{ vendor.contact.firstName }} from {{ vendor.company.name }}</h5>
        </div>

        <div class="modal-body">
          <form>
            <div class="form-group">
              <h3>{{ appt.name }}</h3>
              <table class="table">
                <tr>
                  <th>Location: </th>
                  <td>{{ appt.location }}</td>
                </tr>
                <tr>
                  <th>Date: </th>
                  <td>{{ appt.startDate }}</td>
                </tr>
                <tr>
                  <th>Time: </th>
                  <td>{{ appt.startTime }}</td>
                </tr>
                <tr>
                  <th>Duration: </th>
                  <td>{{ appt.duration }}</td>
                </tr>
              </table>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="ok">OK</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      vendorList: 'vendorList'
    }),
    appt() {
      return this.stateInfo.state.selectedTime;
    },
    isVisible() {
      const pendingAction = this.$store.getters.pendingAction.type;
      return pendingAction === 'viewApptInfo';
    },
    stateInfo() {
      return _.find(this.vendorList, { _id: this.vendor._id });
    }
  },
  methods: {
    ok() {
      this.$store.commit('cancelPendingAction');
    },
  }
};
</script>
