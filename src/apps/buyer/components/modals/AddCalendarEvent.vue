<template>
<div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add Event</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name"
              v-model="calendarEvent.name">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Date:</label>
            <input type="date" class="form-control" id="date"
              v-model="calendarEvent.date">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Time:</label>
            <input type="time" class="form-control" id="time"
              v-model="calendarEvent.time">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Duration (mins):</label>
            <input type="number" class="form-control" id="duration"
              v-model="calendarEvent.duration">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Location:</label>
            <input type="text" class="form-control" id="location"
              v-model="calendarEvent.location">
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
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
      calendarEvent: {
        name: null,
        date: null,
        time: null,
        duration: 30,
        location: null
      }
    };
  },
  computed: {
    isVisible() {
      return this.$store.getters.pendingAction.type === 'addCalendarEvent';
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    save() {
      this.validate(this.calendarEvent)
        .then(() => {
          this.$store.dispatch('createCalendarEvent', this.calendarEvent);
        });
    },
    validate(calendarEvent) {
      return new Promise((resolve, reject) => {
        if (!calendarEvent.name.trim() || !calendarEvent.date.trim()) {
          return reject();
        }
        return resolve();
      });
    }
  }
};
</script>
