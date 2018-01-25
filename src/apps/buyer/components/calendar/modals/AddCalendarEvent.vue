<template>
<div id="addEvent" class="modal" tabindex="-1" role="dialog" v-if="isVisible">
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
              v-model="event.name">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Date:</label>
            <input type="date" class="form-control" id="date"
              v-model="event.date">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Time:</label>
            <input type="time" class="form-control" id="time"
              v-model="event.time">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Duration (mins):</label>
            <input type="number" class="form-control" id="duration"
              v-model="event.duration">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Location:</label>
            <input type="text" class="form-control" id="location"
              v-model="event.location">
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button id="save" type="button" class="btn btn-primary" @click.prevent="save">Save</button>
        <button id="cancel" type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import traverse from 'traverse';

export default {
  data() {
    return {
      event: {
        name: null,
        date: null,
        time: null,
        duration: null,
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
    clear() {
      traverse(this.event).forEach(function (elem) {
        if (this.isLeaf) {
          this.update(null);
        }
      });
    },
    save() {
      this.validate(this.event)
        .then(() => {
          this.$store.dispatch('createCalendarEvent', this.event);
        });
    },
    validate(event) {
      return new Promise((resolve, reject) => {
        if (!event.name.trim() || !event.date.trim()) {
          return reject();
        }
        return resolve();
      });
    }
  }
};
</script>
