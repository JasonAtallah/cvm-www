<template>
  <div>
    <h3>Calendar</h3>
    <p class="lead">
      Select the calendar you would like to sync with us.
    </p>
    <div class="card card-body bg-light">
        <form>
          <div class="form-group">
            <label>Please select the calendar to use for scheduling:</label><br>
            <ElSelect v-model="selectedCalendar" @change="onCalendarSelect">
              <ElOption v-for="calendar in calendars" :key="calendar.id" :value="calendar.id" :label="calendar.name" />
            </ElSelect>
          </div>
          <br/>
          <div class="form-group">
            <label>Or create a new one:</label><br>
            <ElInput v-model="calendarName" @keypress="onNameInput" placeholder="CVM Calendar" />
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
import {
  Input as ElInput,
  Option as ElOption,
  Select as ElSelect
} from 'element-ui';

export default {
  name: 'set-calendar',
  components: {
    ElInput,
    ElOption,
    ElSelect
  },
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
