<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
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
                    <input type="text" class="form-control" id="name" v-model="name">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Duration (mins):</label>
                    <input type="number" class="form-control" id="duration" v-model="duration">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Location:</label>
                    <input type="text" class="form-control" id="location" v-model="location">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Date:</label>
                    <input type="date" class="form-control" id="date" v-model="startDate">
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Time:</label>
                    <input type="time" class="form-control" id="time" v-model="startTime">
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Add Time</label>
                    <button type="button" class="btn btn-primary" @click.prevent="addTime"><i class="fa fa-plus"></i></button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-5">
                  <h5 v-if="startDate">Scheduled for {{ startDate }}</h5>
                  <ul class="list-unstyled" v-for="event in events">
                    <li v-if="event.startDate.split('T')[0] === startDate">
                      {{ event.title }} from {{ event.startDate.split('T')[1] }} to {{ event.endDate.split('T')[1] }}
                    </li>
                  </ul>
                </div>
                <div class="col-md-5">
                  <h5 v-if="suggestedTimes.length > 0">Times Selected</h5>
                  <ul class="list-unstyled" v-for="suggestedTime in suggestedTimes">
                    <li>
                      {{ suggestedTime.startDate }} at {{ suggestedTime.startTime }}
                      <button type="button" class="btn btn-default btn-sm" @click.prevent="removeTime(suggestedTime)"><i class="fa fa-times"></i></button>
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
      startDate: null,
      startTime: null,
      name: null,
      location: '*dispensary address*',
      duration: 30,
      suggestedTimes: []
    };
  },
  methods: {
    addTime() {
      if (this.startDate && this.startTime) {
        this.suggestedTimes.push({
          name: this.name,
          location: this.location,
          duration: this.duration,
          startDate: this.startDate,
          startTime: this.startTime
        });
        this.startDate = null;
        this.startTime = null;
      }
      console.log(this.suggestedTimes);
    },
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    removeTime(suggestedTime) {
      const index = this.suggestedTimes.indexOf(suggestedTime);
      this.suggestedTimes.splice(index, 1);
    },
    send() {
      this.validate()
      .then(() => {
        this.$store.dispatch('sendApptProposal', {
          vendor: this.vendor,
          suggestedTimes: this.suggestedTimes
        });
      });
    },
    validate() {
      return new Promise((resolve, reject) => {
        // write fn to confirm time selected doesn't overlap with other calendar events
        return resolve();
      });
    }
  }
};
</script>
