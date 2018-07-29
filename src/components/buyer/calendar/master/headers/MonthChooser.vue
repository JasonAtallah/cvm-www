

<template>
<MonthView :events="events" @dayClick="onDayClicked"></MonthView>
</template>

<script>
import { mapGetters } from 'vuex';
import MonthView from '../../../../calendar/MonthView';

export default {
  components: {
    MonthView
  },
  computed: {
    ...mapGetters({
      events: 'events'
    })
  },
  methods: {
    onDayClicked(date) {
      this.$store.commit('cancelDetailOverride');
      this.$store.commit('selCalendarDate', date);
    }
  }
};
</script>
