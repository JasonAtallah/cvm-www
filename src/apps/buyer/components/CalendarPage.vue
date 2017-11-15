
<style scoped>
</style>

<template>
<BasePage pageName="Calendar">
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
  beforeMount() {
    this.$store.dispatch('loadEvents');
  }
};
</script>
