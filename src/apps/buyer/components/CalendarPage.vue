<template>
<page :pageName="name">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div id="calendar" class="monthly"></div>
        </div>
      </div>
      <calendar
        :events="events"
        eventDateField="startDate"
        @clickEvent="onClickEvent" />
    </div>
  </div>
</page>
</template>

<script>
import { mapGetters } from 'vuex';
import Page from './page/Page';
import Calendar from './ui/Calendar/Calendar';

export default {
  name: 'CalendarPage',
  data() {
    return {
      name: 'Calendar',
      days: null
    };
  },
  components: {
    Page,
    Calendar
  },
  computed: {
    ...mapGetters('buyer', {
      events: 'events'
    })
  },
  methods: {
    onClickEvent(event) {

    }
  },
  beforeMount() {
    this.$store.dispatch('loadEvents');
  }
};
</script>

<style scoped>

</style>
