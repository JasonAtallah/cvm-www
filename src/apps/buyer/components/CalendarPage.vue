<style lang="scss" scoped>
.calendar-page {
  height: 100%;
}

.calendar-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid $section-border-color;
}
</style>

<template>
  <BasePage pageName="Calendar">
    <div slot="content" class="calendar-page">
      <MasterDetail>
        <div slot="master" class="calendar-master">
          <CalendarButtons />
          <Calendar
            :events="events"
            eventDateField="startDate"
            v-on:clickEvent="eventClicked" />
        </div>
        <div slot="detail" class="calendar-detail">

        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Calendar from '@/components/Calendar/Calendar';
import MasterDetail from '@/components/MasterDetail';
import CalendarButtons from './calendarPage/CalendarButtons';
import BasePage from './BasePage';

export default {
  components: {
    BasePage,
    Calendar,
    CalendarButtons,
    MasterDetail
  },
  computed: {
    ...mapGetters({
      events: 'events'
    })
  },
  methods: {
    eventClicked(event) {
      this.$store.commit('takeAction', {
        type: 'showCalendarEvent',
        event
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
