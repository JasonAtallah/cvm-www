<style scoped>
.set-calendar {
  text-align: left;
  display: block;
}
</style>

<template>
<div class="modal set-calendar" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Gmail Calendar Selection</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Please select the calendar to use for scheduling:</label>
            <select class="form-control" id="selCalendar"
              v-model="selectedCalendar"
              @change="onCalendarSelect">
                <option value=""></option>
                <option v-for="calendar in calendars" :value="calendar.id">{{ calendar.name }}</option>
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
        <button type="button" class="btn btn-primary" @click.prevent="submitCalendar">Save</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'set-calendar',
  data() {
    return {
      selectedCalendar: null,
      calendarName: null
    };
  },
  computed: {
    ...mapGetters({
      calendars: 'calendars',
      isVisible: 'needSetCalendar'
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
        this.$store.dispatch('setGCalendar', {
          name: this.calendarName
        });
      }
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal && !this.calendars) {
        this.$store.dispatch('loadCalendars');
      }
    }
  }
};
</script>
