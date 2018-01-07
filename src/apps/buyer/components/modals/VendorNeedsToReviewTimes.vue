<style scoped>
.times {
  padding-left: 1rem;
}
</style>

<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Pending review from {{ stateInfo.name }}</h5>
        </div>

        <div class="modal-body">
          <form>
            <div class="form-group">
              <h4>Suggested Times</h4>
              <ul v-for="time in appt.suggestedTimes" class="list-unstyled" :key="time.startDate">
                <li class="times">
                  {{ time.startTime }} on {{ time.startDate }} @ {{ time.location }}
                </li>
              </ul>              
              <br>            
              <h4 v-if="appt.rejectedTimes">Rejected Times</h4>
              <ul v-for="time in appt.rejectedTimes" class="list-unstyled" :key="time.startDate">
                <li class="times">
                  {{ time.startTime }} on {{ time.startDate }} @ {{ time.location }}
                </li>
              </ul>                          
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
      return this.stateInfo.state;
    },
    isVisible() {
      const pendingAction = this.$store.getters.pendingAction.type;
      return pendingAction === 'viewTimesSentInfo';
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
