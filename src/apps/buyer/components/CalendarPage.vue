
<style scoped>
</style>

<template>
<BasePage pageName="Calendar">
  <div slot="header-buttons">
    <button class="btn btn-primary" @click="addCalendarEvent">Add Event</button>
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
        eventDateField="startDate" />
    </div>
    <AddCalendarEventModal />
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';
import Calendar from '@/components/ui/Calendar/Calendar';
import AddCalendarEventModal from './AddCalendarEventModal';

export default {
  components: {
    AddCalendarEventModal,
    BasePage,
    Calendar
  },
  data() {
    return {
      days: null
    };
  },
  components: {
    AddCalendarEventModal,
    BasePage,
    Calendar
  },
  computed: {
    ...mapGetters({
      events: 'events'
    })
  },
  methods: {
    addCalendarEvent() {
      this.$store.commit('startAddCalendarEvent');
    }
  },
  beforeMount() {
    this.$store.dispatch('loadEvents');
  }
};
</script>
