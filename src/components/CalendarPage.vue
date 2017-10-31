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
import Page from '@/components/Page';
import Calendar from '@/components/ui/Calendar/Calendar';
import { mapGetters } from 'vuex';

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
    this.$store.dispatch('buyer/loadEvents');
  }
};
</script>

<style scoped>

</style>
