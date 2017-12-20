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
                    <label for="exampleFormControlSelect1">Event Name:</label>
                    <input type="text" class="form-control" id="name" v-model="event.name">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Duration (mins):</label>
                    <input type="number" class="form-control" id="duration" v-model="event.duration">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Location:</label>
                    <input type="text" class="form-control" id="location" v-model="event.location">
                  </div>
                </div>
              </div>

              <hr>
              <h5>Select up to 3 options</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Date:</label>
                    <input type="date" class="form-control" id="date" v-model="event.choices.one.date">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <input type="time" class="form-control" id="time" v-model="event.choices.one.time">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Date:</label>
                    <input type="date" class="form-control" id="date" v-model="event.choices.two.date">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <input type="time" class="form-control" id="time" v-model="event.choices.two.time">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Date:</label>
                    <input type="date" class="form-control" id="date" v-model="event.choices.three.date">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <input type="time" class="form-control" id="time" v-model="event.choices.three.time">
                  </div>
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
      event: {
        name: null,
        location: 'dispensary address',
        duration: 30,
        choices: {
          one: {
            date: null,
            time: null
          },
          two: {
            date: null,
            time: null
          },
          three: {
            date: null,
            time: null
          }
        }
      }
    };
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    send() {
      this.validate(this.event)
      .then(() => {
        this.$store.dispatch('performVendorAction', {
          vendor: this.vendor,
          action: this.action,
          event: this.event
        });
      });
    },
    validate(event) {
      return new Promise((resolve, reject) => {
        return resolve();
      });
    }
  }
};
</script>
