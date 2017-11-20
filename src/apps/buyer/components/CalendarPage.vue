
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
import Calendar from '@/components/ui/Calendar/Calendar';
import BasePage from './BasePage';
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
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
