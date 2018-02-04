<template>
  <div>
    <h3>Calendar</h3>
    <p class="lead">
      Select the calendar you would like to sync with us.
    </p>
    <div class="card card-body bg-light">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Please select the calendar to use for scheduling:</label>
            <select class="form-control" id="selCalendar"
              v-model="selectedCalendar"
              @change="onCalendarSelect">
                <option v-for="calendar in calendars" :key="calendar.id" :value="calendar.id">{{ calendar.name }}</option>
            </select>
          </div>
          <br/>
          <div class="form-group">
            <label for="newCalendarName">Or create a new one:</label>
            <input type="text" class="form-control" id="newCalendarName" placeholder="CVM Calendar"
              v-model="calendarName"
              @keypress="onNameInput">
          </div>
        </form>
    </div>

    <div class="modal-footer">
      <button id="save" type="button" class="btn btn-primary" @click.prevent="submitCalendar">Save</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'set-calendar',
  data() {
    return {
      selectedCalendar: this.buyer.gcalendar.name || null,
      calendarName: null
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      calendars: 'calendars'
    })
  },
  methods: {
    onNameInput() {
      this.selectedCalendar = null;
    },
    onCalendarSelect() {
      this.calendarName = null;
    },
    submitCalendar() {
      if (this.selectedCalendar) {
        this.$store.dispatch('setGCalendar', _.find(this.calendars, { id: this.selectedCalendar }));
      } else if (this.calendarName && this.calendarName.trim()) {
        this.$store.dispatch('createGCalendar', this.calendarName);
      }
    }
  },
  created: function () {
    this.$store.dispatch('loadCalendars');
  }
};
</script>
