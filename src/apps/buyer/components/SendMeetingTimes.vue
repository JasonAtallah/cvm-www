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
          <h5 class="modal-title">Send Times to Vendor</h5>
        </div>

        <div class="modal-body">
          <form>
            <div class="form-group">

              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">email Name:</label>
                    <input type="text" class="form-control" id="name" v-model="email.name">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Duration (mins):</label>
                    <input type="number" class="form-control" id="duration" v-model="email.duration">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Location:</label>
                    <input type="text" class="form-control" id="location" v-model="email.location">
                  </div>
                </div>
              </div>

              <hr>
              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Date:</label>
                    <input type="date" class="form-control" id="date" v-model="dateViewing">
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <input type="time" class="form-control" id="time" v-model="timeViewing">
                  </div>
                </div>
                <div class="col-md-2">                  
                  <button type="button" class="btn btn-primary" @click.prevent="addTime">Add Time</button>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-6">
                  <h5 v-if="dateViewing">Other events you have scheduled for {{ dateViewing }}</h5>
                  <ul class="list-unstyled" v-for="event in events">
                    <li v-if="event.startDate.split('T')[0] === dateViewing">
                      {{ event.title }} from {{ event.startDate.split('T')[1] }} to {{ event.endDate.split('T')[1] }}
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h5 v-if="email.timesSelected.length > 0">Times Selected</h5>
                  <ul class="list-unstyled" v-for="time in email.timesSelected">
                    <li>
                      {{ time }}
                    </li>
                  </ul>
                </div>
              </div>

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
import moment from 'moment';

export default {
  computed: {
    ...mapGetters({
      events: 'events'
    }),
    isVisible() {
      const pendingAction = this.$store.getters.pendingAction.type;
      return pendingAction === 'scheduleTime' || pendingAction === 'reschedule';
    },
    action() {
      return this.$store.getters.pendingAction.type;
    },
    vendor() {
      return this.$store.getters.pendingAction.vendor;
    }
  },
  data() {
    return {
      dateViewing: null,
      timeViewing: null,
      email: {
        name: null,
        location: 'dispensary address',
        duration: 30,
        timesSelected: []
      }
    };
  },
  methods: {
    addTime() {
      this.email.timesSelected.push({
        date: this.dateViewing,
        time: this.timeViewing
      });
      this.dateViewing = null;
      this.timeViewing = null;
    },
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    send() {
      this.validate(this.email)
      .then(() => {
        this.$store.dispatch('performVendorAction', {
          vendor: this.vendor,
          action: this.action,
          email: this.email
        });
      });
    },
    validate(email) {
      return new Promise((resolve, reject) => {
        return resolve();
      });
    }
  }
};
</script>
