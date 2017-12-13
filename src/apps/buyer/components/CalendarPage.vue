<style scoped>

</style>

<template>
<BasePage pageName="Calendar">
  <div slot="header-buttons">
    <button class="btn btn-info" @click="setSchedule">Set Schedule</button>
    <button class="btn btn-primary" @click="addEvent">Add Event</button>
  </div>
  <div slot="content">
    <div class="container">
      <div class="row">        
        <div class="col-sm-7">
          <div id="calendar" class="monthly"></div>
        </div>
      </div>
      <Calendar
        :events="events"
        eventDateField="startDate"
        v-on:clickEvent="eventClicked" />
    </div>
    <AddCalendarEventModal />
    <SetScheduleModal />
    <ViewCalendarEventModal :event="event" :vendor="vendor" />
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from '@/components/ui/Calendar/Calendar';
import BasePage from './BasePage';
import AddCalendarEventModal from './AddCalendarEventModal';
import SetScheduleModal from './SetScheduleModal';
import ViewCalendarEventModal from './ViewCalendarEventModal';

export default {
  components: {
    AddCalendarEventModal,
    BasePage,
    Calendar,
    SetScheduleModal,
    ViewCalendarEventModal
  },
  data() {
    return {
      days: null,
      event: null,
      vendor: null
    };
  },
  computed: {
    ...mapGetters({
      events: 'events',
      vendor: 'vendor'
    })
  },
  methods: {
    addEvent() {
      this.$store.commit('takeAction', {
        type: 'addCalendarEvent'
      });
    },
    eventClicked(event) {
      this.event = event;
      this.getVendor(event.vendorId);
      this.$store.commit('takeAction', {
        type: 'showCalendarEvent'
      });
    },
    getVendor(vendorId) {
      return this.$store.dispatch('loadVendor', '5a2ca1123f2e500cfbb6fda5');
    },
    setSchedule() {
      this.$store.commit('setSchedule', true);
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
