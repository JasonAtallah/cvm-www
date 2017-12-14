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
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from '@/components/ui/Calendar/Calendar';
import BasePage from './BasePage';

export default {
  components: {
    BasePage,
    Calendar
  },
  computed: {
    ...mapGetters({
      events: 'events'
    })
  },
  methods: {
    addEvent() {
      this.$store.commit('takeAction', {
        type: 'addCalendarEvent'
      });
    },
    eventClicked(event) {
      this.$store.commit('takeAction', {
        type: 'showCalendarEvent',
        event
      });
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
